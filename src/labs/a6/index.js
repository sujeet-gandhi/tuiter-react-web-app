import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item.js";
import TodoList from "./todo/todo-list.js";

function Assignment6() {
    const color = 'blue'
    const dangerous = true;
    return (
        <div>
            <h1>Assignment 6</h1>
            <TodoItem/>
            <TodoList/>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                   wd-fg-black wd-padding-10px`}>
                Dangerous background</div>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>


        </div>
    );
}
export default Assignment6;