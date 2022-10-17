import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const location = useLocation();
    const {pathname, search} = location;
    console.log(pathname, search);
    const parts = pathname.split('/')
    console.log(parts.length);
    return(
        <div className="list-group">
            <Link to="/tuiter/home" href="#" className={`
        ${parts[2] === 'home'  || parts.length <3 ? 'active': ''} list-group-item`}>
                <i className="fa-solid fa-house "></i> &nbsp;Home

            </Link>
            <Link to="/tuiter/explore"  href="#"
                  className={`
              ${parts[2] === 'explore' ? 'active':''}
              list-group-item
              `}>
                <i className="fa-solid fa-hashtag "></i> &nbsp;Explore
            </Link>
            <Link to="/tuiter/notification" href="#"
                  className={`
              ${parts[2] === 'notification' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-bell "></i> &nbsp;Notification
            </Link>
            <Link to="/tuiter/messages" href="#"
                  className={`
              ${parts[2] === 'messages' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-envelope "></i>&nbsp;Messages
            </Link>
            <Link to="/tuiter/bookmarks" href="#"
                  className={`
              ${parts[2] === 'bookmarks' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-bookmark "></i>&nbsp;Bookmarks
            </Link>
            <Link to="/tuiter/lists" href="#"
                  className={`
              ${parts[2] === 'lists' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-list "></i>&nbsp;Lists
            </Link>
            <Link to="/tuiter/profile" href="#"
                  className={`
              ${parts[2] === 'profile' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-user "></i>&nbsp;Profile
            </Link>
            <Link to="/tuiter/more" href="#"
                  className={`
              ${parts[2] === 'more' ? 'active' : ''}
            list-group-item`}>
                <i className="fa-solid fa-ellipsis "></i>&nbsp;More
            </Link>
            <Link to="/" href="#"
                  className={`
              
            list-group-item`}>
                <i className="fa-solid fa-flask "></i> &nbsp;Labs
            </Link>

            <button className="mt-1 btn btn-primary rounded-pill w-100"> Tuit</button>
        </div>
    )
}
export default NavigationSidebar;