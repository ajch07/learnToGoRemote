import { useState } from "react";

export const CreateTodo=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return(
        <>
        <input style={{padding:10,
            margin:10
        }}type="text" placeholder="title" onChange={(e)=>{
            const value=e.target.value;
            setTitle(value);

        }}></input><br /><br />
        <input style={{padding:10,
            margin:10
        }}type="text" placeholder="description" onChange={(e)=>{
            const value=e.target.value;
            setDescription(value);
        }}></input><br />
        <button style={{padding:10,
            margin:10
        }}onClick={()=>{
            fetch("http://localhost:3003/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    desc:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then( async (res) => {
                const response=await res.json()
                console.log(response);
                
            }

            )
        }}>Add todo</button>
        </>
    )
}