import NavSidebarList from "./NavList.js"
import nav_list_item from "./navListItem.js"
console.log(nav_list_item)
const NavigationSidebar = () => {
    return(`
            <div class="list-group">
            ${
            nav_list_item.map( side_bar_item => {
                return(NavSidebarList(side_bar_item))
            }).join(' ')
        
    }
            </div>
            <button class="mt-1 btn btn-primary rounded-pill w-100"> Tuit </button>
    `);

}

export default NavigationSidebar;

