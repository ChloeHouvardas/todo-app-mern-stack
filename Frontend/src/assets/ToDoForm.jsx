import Plus from "./assets/plus.jsx";

const ToDoForm = () => {
    return (
        <div className="todo">
            <form className="new-task">
                <form className="new-task">
                    <input
                        type="text"
                        className="input"
                        placeholder="toodoo"
                    />
                    <button className="button"><Plus /></button>
                </form>
            </form>
        </div>
    );
};

export default ToDoForm;