const NavigationSidebar = () => {
    return(`
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-brands fa-twitter wd-side-icon" ></i></a>
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-house wd-side-icon" ></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Home</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black fw-bolder">
                    <i class="fa-solid fa-hashtag wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Explore</span> </a>
                <a href="#" class=" list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-bell wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Notifications</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-envelope wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Messages</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-bookmark wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Bookmarks</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-list wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Lists</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-user wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;Profile</span></a>
                <a href="#" class="list-group-item list-group-item-action bg-black">
                    <i class="fa-solid fa-ellipsis wd-side-icon"></i>
                    <span class="d-none d-xl-inline-block wd-side-bar-text">&nbsp;More</span></a>
            </div>
            <button class="mt-1 btn btn-primary rounded-pill w-100"> Tuit </button>
    `);

}

export default NavigationSidebar;

