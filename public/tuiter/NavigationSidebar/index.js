import NavList from "./NavList.js"
import NavItems from "./NavItems.js"
const NavigationSidebar = (ActiveScreen) => 
    `
            <div class="list-group">
             ${

            NavItems.map(NavItem => NavList(NavItem,ActiveScreen)).join('')
        
            }
            </div>
            <button class="mt-1 btn btn-primary rounded-pill w-100"> Tuit </button>
    `



export default NavigationSidebar;

