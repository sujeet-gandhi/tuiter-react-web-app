import TodoItem from "./todo-item";
import todos from "./todos.json";
import React from "react";
const TodoList = () => {
    return(
        <div>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem
                            key={todo._id}
                            todo={todo}/>)
                    })
                }
            </ul>
        </div>
    );
}
export default TodoList;

