const Form = ({todos, setInputText, inputText, setTodos, setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                completed: false,
                text: inputText,
                id: Math.random() * 1000
            }

        ])
        setInputText('')
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input
                onChange={inputTextHandler}
                value={inputText}
                type="text"
                className="todo-input"/>
            <button onClick={submitTodoHandler}
                    className="todo-button" type='submit'>
                <i className="fas fa-plus-square"/>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;