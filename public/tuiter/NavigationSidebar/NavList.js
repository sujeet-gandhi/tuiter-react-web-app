const NavList = (NavItem, ActiveScreen) => {
    let action = ''
    if (ActiveScreen == 'Explore' && NavItem.name === ActiveScreen){
        action = 'active'
    }
    else if(ActiveScreen== 'Home' && NavItem.name === ActiveScreen) {
        action = 'active'
    }
    else {
        action = ''
    }
    console.log(ActiveScreen)
    console.log(action)
    console.log(NavItem.name)
    return(`
            <a href="${NavItem.link}" class="list-group-item list-group-item-action ${action}">
            <i class="${NavItem.icon}" ></i>
            <span class = "d-none d-xl-inline-block focus" >&nbsp;${NavItem.name}</span></a>
    `)
}

export default NavList;