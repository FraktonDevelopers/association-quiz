import { useRef, useState } from "react";

export default function CreateEdit() {
  const [association, setAssociation] = useState<any>({});
  const fileInputRef = useRef<HTMLInputElement>(null)
  const horizontalColumns = ['A', 'B', 'C', 'D', 'E'];
  const verticalColumns = [1,2,3,4,5];

  const handleItemChange = (value: string, category :string, row: number) => {
    let tempAssoc = JSON.parse(JSON.stringify(association));
    tempAssoc[category+row] = value;
    setAssociation(tempAssoc);
  }

  const save = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(association)], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "Association.json";
    document.body.appendChild(element);
    element.click();
  };

  const read = (e: HTMLInputElement) => {
    if(e.files && e.files.length > 0){
      const reader = new FileReader()
      reader.onload = async (e) => { 
        if(e.target){
          const text = (e.target.result)
          try{
            setAssociation(JSON.parse(text as string))
          }catch(e){}
        }
      };
      reader.readAsText(e.files[0])
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
          <button onClick={()=>{save()}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Save</button>
          <button onClick={()=>{if(fileInputRef.current){fileInputRef.current.click()}}} className='bg-indigo-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Load Existing</button>
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
                            <input className="text-center" value={association[category+row]} onChange={(e) => handleItemChange(e.target.value, category, row)} type='text'></input>
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
            <input className="w-full text-center" onChange={(e) => handleItemChange(e.target.value, 'FF', 0)} type='text'></input>
          </div>
        </div>
    </div>
    )
}