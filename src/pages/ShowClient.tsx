import { useState } from "react";

export default function CreateEdit() {
  const [association, setAssociation] = useState<any>({});
  const [currentOver, setCurrentOver] = useState("");

  const horizontalColumns = ['A', 'B', 'C', 'D', 'E'];
  const verticalColumns = [1,2,3,4,5];

  window.addEventListener("message", (event)=>{
    try{
      const message = JSON.parse(event.data);
      console.log(message);
      if(message.action === 'over'){
        setCurrentOver(message.category+message.row);
        setTimeout(()=>{setCurrentOver("")}, 1000);
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
    <div className="Page-header">
        <div className="w-full mx-4 grid grid-cols-5">
          {(horizontalColumns.map((category)=>{
              return (
                    <div className="grid grid-cols-1 gap-4 pr-5">
                      <span className="text-white ml-20">{category}</span>
                      <div>
                      {
                        verticalColumns.map((row) => {
                          return (<div className="flex items-center mb-4">
                            <span className="w-4 mr-2 text-white pr-1">{row===5?'F':row}</span>
                            <button className={currentOver === category+row? 'w-full text-white bg-indigo-500 p-10 text-center' : 'w-full text-white bg-indigo-700 p-10 text-center'}>{association[category+row]}</button>
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
            <button className="text-white bg-indigo-500 p-10 w-full text-center">{association['FF0']}</button>
          </div>
        </div>
    </div>
    )
}