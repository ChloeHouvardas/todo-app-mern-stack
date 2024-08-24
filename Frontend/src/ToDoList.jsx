import ToDoItem from "./ToDoItem";

const ToDoList = ({todos}) => {
    return (
        <div>
            {todos.map(todo => (
                <ToDoItem key={todo._id} todo={todo} deleteTodo={deleteTodo}/>
            ))}
            
        </div>
    );
};

export default ToDoList;