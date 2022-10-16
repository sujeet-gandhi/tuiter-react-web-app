const WhoToFollowListItem  = (who) => {
    return(`
            <li class="list-group-item">
            <div class="row">
                <div class="col-3">
                    <img class="rounded-circle " src="${who.avatarIcon}" height="90%" width="70%">
                </div>
                <div class="col-6 ps-0 fw-bold position-relative text-nowrap align-content-start">
                    ${who.userName}
                    <i class="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                    <div class="text-secondary fw-lighter"> @ ${who.handle}</div>
                </div>
                <div class="col-3 position-relative">
                    <button class="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                </div>
            </div>
        </li>
    
    `)
}

export default WhoToFollowListItem;