
 function Todos({ todos}){
    return <div>
        {todos.map((todo)=>{
            return(<li key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "completed":"Mark as Complete"}</button>
                </li>)
            
        })}
        </div>
    
}
export default Todos