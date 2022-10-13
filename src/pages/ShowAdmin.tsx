import { useRef, useState } from "react";

export default function ShowAdmin() {
  const [association, setAssociation] = useState<any>({});
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [presenterWindow, setPresenterWindow] = useState<Window>();
  const horizontalColumns = ['A', 'B', 'C', 'D'];
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
            if(fileInputRef.current){
              fileInputRef.current.value = "";
            }
          }catch(e){
            console.log(e);
          }
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
    <div className="Page-header px-4">
        <input
            ref={fileInputRef}
            className="invisible"
            type="file"
            onChange={(e) => {read(e.target)}}
        />
        <div className="flex items-stretch mb-5">
          <button onClick={()=>{if(fileInputRef.current){fileInputRef.current.click()}}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Load Existing</button>
          <button onClick={()=>{openPresenterWindow()}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Show Presenter Window</button>
          <button onClick={()=>{setAssociation({})}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Reset</button>
          <a className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' href='/'>Back to Menu</a>
        </div>

        <div className="w-full mx-4 grid grid-cols-4">
          {(horizontalColumns.map((category)=>{
              return (
                    <div className="flex flex-col p-5 border border-white border-opacity-50">
                      <span className="bg-[#7f00ff] text-white text-center mb-6 max-h-14">{category}</span>
                      <div className="grid grid-cols-1 h-full space-y-4">
                      {
                        verticalColumns.map((row) => {
                          return (<div className="flex items-center bg-[#7f00ff]">
                            <span className="w-12 text-white text-center">{row===5?'F':row}</span>
                            <button onMouseOver={()=>{sendMessageToPresenter('over', category, row, '')}}
                            onClick={()=>{sendMessageToPresenter('click', category, row, association[category+row])}}
                            className="w-full h-full flex items-center justify-center text-white text-center bg-violet-800 text-2xl py-2 px-4 break-all">{association[category+row]}</button>
                          </div>)
                        })
                      }
                      </div>
                    </div>
              )
          }))}
        </div>
        <div className="flex w-2/4 mt-8">
          <div className="w-full flex items-center">
            <div className="bg-[#7f00ff] h-full flex items-center px-4">
              <span className="text-white text-center">Final:</span>
            </div>
            <button onMouseOver={()=>{sendMessageToPresenter('over', 'FF', 0, '')}}
                            onClick={()=>{sendMessageToPresenter('click', 'FF', 0, association['FF0'])}} className="bg-indigo-500 w-full text-white p-10 text-center ">{association['FF0']}</button>
          </div>
        </div>
    </div>
    )
}