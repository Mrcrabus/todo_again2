import './App.css';
import Form from "./components/Form";
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList";

const App = () => {
    const [inputText, setInputText] = useState()
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(el => el.completed === true))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(el => el.completed === false))
                break
            default:
                setFilteredTodos(todos)
        }
    }

    useEffect(() => {
        filterHandler()
    }, [todos, status])

    return (
        <div className="App">
            <header><h1>TODO List</h1></header>
            <Form inputText={inputText}
                  setInputText={setInputText}
                  setTodos={setTodos}
                  todos={todos}
                  setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}
                filteredTodos={filteredTodos}
            />

        </div>
    );
}

export default App;
