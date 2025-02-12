
import CreateTodo from "../components/todo/CreateTodo.jsx";
import TodoList from "../components/todo/TodoList.jsx";


const TodoPage = () => {
    return (
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title"> My ToDo App</h5>
                        </div>
                        <div className="card-body">
                            <CreateTodo />
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TodoPage;