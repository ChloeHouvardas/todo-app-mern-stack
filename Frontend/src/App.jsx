import "./index.css";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const App = () => {
    return (
        <div className="frame">
            <h1 className="text-wrapper">todo list</h1>

            <ToDoForm />
            <ToDoList />
        </div>
    );
};

export default App;