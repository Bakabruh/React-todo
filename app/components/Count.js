import React, { useState, useEffect } from "react"

export default function Count() {
    const [todolist, setTodolist] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [lastItem, setLastItem] = useState(null)

    useEffect(() => {
        localStorage.setItem("Trucs à faire", todolist)
    }, [todolist])

    useEffect(() => {
        setLastItem(todolist[todolist.length - 1])
        console.log(lastItem)
    }, [todolist])

    // add todo
    const addTodo = () => {
        inputValue != "" ? setTodolist([...todolist, inputValue]) : null
        setInputValue("")
    }
    // delete todo
    const deleteTodo = index => {
        const newTodolist = [...todolist]
        newTodolist.splice(index, 1)
        setTodolist(newTodolist)
    }

    return (
        <div>
            <div className="exo-2">
                <h1>Todolist</h1>
                <p>Vous avez {todolist.length} dans votre liste</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {todolist.map((todo, index) => (
                        <li style={{ color: lastItem === todo ? 'pink' : '' }} key={index}>
                            {todo}
                            <button onClick={() => deleteTodo(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}