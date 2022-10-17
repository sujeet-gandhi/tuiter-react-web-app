import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className="fs-3">
            <Link to="" >Labs</Link> |&nbsp;
            <Link to="/hello">Hello</Link> |&nbsp;
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}

export default Nav; 