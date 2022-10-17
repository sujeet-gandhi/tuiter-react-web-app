import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const location = useLocation();
    const {pathname, search} = location;
    console.log(pathname, search);
    const parts = pathname.split('/')
    console.log(parts);
    return(
        <div className="list-group">
            <Link to="/tuiter/" href="#" className={`
        ${parts[2] === 'home'  || parts[2] === ""? 'active': ''} list-group-item`}>
                Home
            </Link>
            <Link to="/tuiter/explore"  href="#"
                  className={`
              ${parts[2] === 'explore' ? 'active':''}
              list-group-item
              `}>
                Explore
            </Link>
            <Link to="/tuiter/notification" href="#"
                  className={`
              ${parts[2] === 'notification' ? 'active' : ''}
            list-group-item`}>
                Notification
            </Link>
            <Link to="/tuiter/messages" href="#"
                  className={`
              ${parts[2] === 'messages' ? 'active' : ''}
            list-group-item`}>
                Messages
            </Link>
            <Link to="/tuiter/bookmarks" href="#"
                  className={`
              ${parts[2] === 'bookmarks' ? 'active' : ''}
            list-group-item`}>
                Bookmarks
            </Link>
            <Link to="/tuiter/lists" href="#"
                  className={`
              ${parts[2] === 'lists' ? 'active' : ''}
            list-group-item`}>
                Lists
            </Link>
            <Link to="/tuiter/profile" href="#"
                  className={`
              ${parts[2] === 'profile' ? 'active' : ''}
            list-group-item`}>
                Profile
            </Link>
            <Link to="/tuiter/more" href="#"
                  className={`
              ${parts[2] === 'more' ? 'active' : ''}
            list-group-item`}>
                More
            </Link>

            <button className="mt-1 btn btn-primary rounded-pill w-100"> Tuit</button>
        </div>
    )
}
export default NavigationSidebar;