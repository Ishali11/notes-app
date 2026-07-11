import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault();

    const copyTask =[...task];

    copyTask.push({title,details})

    setTask(copyTask)
    console.log(task)


    
    
    setTitle('');
    setDetails('');

  };

  const deleteNote = (idx)=>{
    const copyTask = [...task];

    copyTask.splice(idx,1)
    
    setTask(copyTask)

  }




  return (
    <div className="h-screen lg:flex bg-black text-white">

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className="flex lg:w-1/2 items-start gap-4 p-10 ">

        <h1 className="text-3xl font-bold">Add Notes</h1>


        {/* FIRST INPUT FOR HEADING */}
        <div className="flex gap-5 w-1/2 items-start flex-col ">
        <input className="px-5 w-full py-2 font-medium border-2 rounded outline-none" 
                type="text" 
                placeholder="Enter Notes Heading"
                value={title}
                onChange={(e)=>{setTitle(e.target.value);
                }}>
        </input>
        

        {/* DETAILED INPUT */}
        <textarea className="px-5 h-32 w-full py-2  font-medium border-2  outline-none rounded" 
        placeholder="Enter Details" 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);

        }}>
        </textarea>
        <button className="bg-white active:bg-gray-350 w-full outline-none font-medium text-black px-5 py-2 rounded">Add Note</button>
        </div>
      </form>

      <div className=" lg:w-1/2 lg:border-l-2   p-10">
      <h1 className="text-4xl font-bold">Recent Notes</h1>
      <div className="flex items-start justify-start flex-wrap   mt-5 h-[90%] overflow-auto">
        {task.map(function(elem,idx){


        return <div key={idx} className="relative h-52 w-50 rounded-2xl text-[#574242] p-4 bg-cover  bg-[url('https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-simple-cute-sticky-notes-clipart-png-image_6484285.png')] ">
          <h2 onClick= {()=>{
            deleteNote(idx)
          }} className="absolute top-15 right-9 bg-amber-900 text-white p-1 active:scale-95 cursor-pointer rounded-full text-xs "><X size={14} strokeWidth={2.75}/></h2>
          <h3 className=" mt-10 px-3  leading-tight text-xl font-bold">{elem.title}</h3>
          <p className="px-4 leading-tight  text-s font-medium  text-[#523030]">{elem.details}</p>
        </div>
        
        })}
       
       
       
       
    
      </div>
        

        
      </div>


    </div>
  )
}

export default App
