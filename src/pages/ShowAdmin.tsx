import { useRef, useState } from "react";

export default function ShowAdmin() {
  const [association, setAssociation] = useState<any>({});
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [presenterWindow, setPresenterWindow] = useState<Window>();
  const horizontalColumns = ['A', 'B', 'C', 'D', 'E'];
  const verticalColumns = [1,2,3,4,5];

  const read = (e: HTMLInputElement) => {
    if(e.files && e.files.length > 0){
      const reader = new FileReader()
      reader.onload = async (e) => { 
        if(e.target){
          const text = (e.target.result)
          try{
            setAssociation(JSON.parse(text as string))
            if(presenterWindow){
              (presenterWindow as Window).close();
            }
          }catch(e){}
        }
      };
      reader.readAsText(e.files[0])
    }
  }


  const openPresenterWindow = () => {
    const wind = window.open('/show-client','presenter');
    setPresenterWindow(wind as Window);
  }

  const sendMessageToPresenter = (action: string, category: string, row: number, data: string) => {
    if(presenterWindow){
      const temp = presenterWindow as Window;
      const message = {
        action: action,
        category: category,
        row: row,
        data:data
      };
      temp.postMessage(JSON.stringify(message));
    }
  }

  return (
    <div className="Page-header">
        <input
            ref={fileInputRef}
            className="invisible"
            type="file"
            onChange={(e) => {read(e.target)}}
        />
        <div className="flex items-stretch mb-10">
          <button onClick={()=>{if(fileInputRef.current){fileInputRef.current.click()}}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Load Existing</button>
          <button onClick={()=>{openPresenterWindow()}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Show Presenter Window</button>
          <a className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' href='/'>Back to Menu</a>
        </div>

        <div className="flex">
          {(horizontalColumns.map((category)=>{
              return (
                    <div className="grid grid-cols-1 gap-4 pr-5">
                      <span className="text-white ml-20">{category}</span>
                      <div>
                      {
                        verticalColumns.map((row) => {
                          return (<div className="mb-5">
                            <span className="text-white pr-1">{row===5?'F':row}</span>
                            <button onMouseOver={()=>{sendMessageToPresenter('over', category, row, '')}} 
                            onClick={()=>{sendMessageToPresenter('click', category, row, association[category+row])}}
                            className="text-white bg-indigo-500 p-10 text-center">{association[category+row]}</button>
                          </div>)
                        })
                      }
                      </div>
                    </div>
              )
          }))}
        </div>
        <div className="flex w-2/4 content-center">
          <div className="mb-5 w-full">
            <span className="text-white pr-1">Final:</span>
            <button onMouseOver={()=>{sendMessageToPresenter('over', 'FF', 0, '')}} 
                            onClick={()=>{sendMessageToPresenter('click', 'FF', 0, association['FF0'])}} className="text-white bg-indigo-500 p-10 w-full text-center">{association['FF0']}</button>
          </div>
        </div>
    </div>
    )
}