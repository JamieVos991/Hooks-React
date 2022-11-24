import Todo from "../components/Todo/Todo";
import "./App.css";
import todos from "../Data/todos";

const App = () =>{

    // Maakt een variable aan: toBeRenderedTodos, en die pakt de todos uit de data map.
    let toBeRenderedTodos = todos.map(todo => {
        return <Todo title={todo.title} items={todo.items} />
    })
    return (
        <>
            {toBeRenderedTodos}
        </>
    )
}

export default App;