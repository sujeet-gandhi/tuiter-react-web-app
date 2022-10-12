const NavSidebarList = (nav_item) => {
    if (nav_item.nav_name === 'Explore'){
        focus = 'active'
    }
    else {
        focus = ''
    }
    return(`
            <a href="${nav_item.nav_link}" class="list-group-item list-group-item-action ${focus}">
            <i class="${nav_item.fa_icon}" ></i>
            <span class="d-none d-xl-inline-block">&nbsp;${nav_item.nav_name}</span></a>
    `)
}

export default NavSidebarList;