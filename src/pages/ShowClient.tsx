import { useState } from "react";

export default function CreateEdit() {
  const [association, setAssociation] = useState<any>({});
  const [currentOver, setCurrentOver] = useState("");

  const horizontalColumns = ['A', 'B', 'C', 'D'];
  const verticalColumns = [1,2,3,4,5];

  window.addEventListener("message", (event)=>{
    try{
      const message = JSON.parse(event.data);
      if(message.action === 'over'){
        setCurrentOver(message.category+message.row);
        setTimeout(()=>{setCurrentOver("")}, 2000);
      }
      if(message.action === 'click'){
        let tempAssoc = JSON.parse(JSON.stringify(association));
        tempAssoc[message.category+message.row] = message.data;
        console.log(tempAssoc);
        setAssociation(tempAssoc);
      }
    }catch(e){
      console.log(e);
    }
  });

  return (
    <div className="Page-header px-4">
        <div className="mx-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {(horizontalColumns.map((category)=>{
              return (
                    <div className="flex flex-col p-5 border border-white border-opacity-50">
                      <span className="bg-[#7f00ff] text-white text-center mb-6 max-h-14">{category}</span>
                      <div className="grid grid-cols-1 h-full space-y-4">
                      {
                        verticalColumns.map((row) => {
                          return (<div className={`flex items-center bg-[#7f00ff] ${currentOver === category+row ? 'animate-pulse bg-indigo-400' : ''}  ${row === 5 ? 'border-t-4 border-opacity-50' : ''}`}>
                            <span className="w-12 text-white text-center">{row===5?'F':row}</span>
                            <span className="w-full h-full flex items-center justify-center text-white text-center bg-violet-800 text-2xl py-2 px-4 break-all">{association[category+row]}</span>
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
            <button className={`w-full text-white p-10 text-center ${currentOver === 'FF0'? 'bg-indigo-200' : 'bg-violet-800'}`}>{association['FF0']}</button>
          </div>
        </div>
    </div>
    )
}