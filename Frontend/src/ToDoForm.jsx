import Plus from "./assets/plus.jsx";

const ToDoForm = ({newItem, setNewItem}) => {
    return (
        <div className="todo">
            <form className="new-task">
                <form className="new-task">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
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