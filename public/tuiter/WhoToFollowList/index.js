import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"

const WhoToFollowList  = () => {
    return(`
    <ul class="list-group">
                <div class="rounded">
                    <li class="list-group-item fw-bolder fs-5  text-white bg-dark">Who to follow</li>
                </div>
                <li class="list-group-item text-white bg-dark">
                    <div class="row ">
                        <div class="col-3 ">
                            <img class="rounded-circle" src="../../images/bee.png" width="80%">
                        </div>
                        <div class="col-6 ps-2 fw-bold position-relative text-nowrap align-content-start ">
                            The Babylon Bee
                            <i class="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                            <div class="text-secondary fw-lighter"> @TheBabylonBee</div>

                        </div>
                        <div class="col-3 position-relative">
                            <button class="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item text-white bg-dark">
                    <div class="row">
                        <div class="col-3">
                            <img class="rounded-circle" src="../../images/netflix.jpg" width="80%">
                        </div>
                        <div class="col-6 ps-2 fw-bold position-relative text-nowrap align-content-start">
                            Netflix
                            <i class="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                            <div class="text-secondary fw-lighter"> @netflix</div>

                        </div>
                        <div class="col-3 position-relative">
                            <button class="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                        </div>
                    </div>
                </li>

                <li class="list-group-item text-white bg-dark">
                    <div class="row">
                        <div class="col-3">
                            <img class="rounded-circle" src="../../images/nasa.jpg" width="80%" height="100%">
                        </div>
                        <div class="col-6 ps-2 fw-bold position-relative text-nowrap align-content-start">
                            NASA
                            <i class="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                            <div class="text-secondary fw-lighter"> @NASA</div>

                        </div>
                        <div class="col-3 position-relative">
                            <button class="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                        </div>
                    </div>
                </li>

                <li class="list-group-item text-white bg-dark">
                    <div class="row">
                        <div class="col-3">
                            <img class="rounded-circle" src="../../images/spacex.jpg" width="80%" height="100%">
                        </div>
                        <div class="col-6 ps-2 fw-bold position-relative text-nowrap align-content-start">
                            Spacex
                            <i class="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                            <div class="text-secondary fw-lighter"> @Spacex</div>

                        </div>
                        <div class="col-3 position-relative">
                            <button class="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                        </div>
                    </div>
                </li>
                <div class="rounded">
                    <li class="list-group-item text-white bg-dark">
                        <div class="row">
                            <div class="col-3">
                                <img class="rounded-circle" src="../../images/linus.jpeg" width="80%">
                            </div>
                            <div class="col-6 ps-2 fw-bold position-relative text-nowrap align-content-start">
                                Linus Torvalds
                                <i class="fa-solid fa-circle-check position-absolute pt-1 ps-1"></i>
                                <div class="text-secondary fw-lighter"> @Linus_Torvalds</div>

                            </div>
                            <div class="col-3 position-relative">
                                <button class="btn btn-primary rounded-pill fw-bolder position-absolute wd-follow-button">Follow</button>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
    `)

}


export default WhoToFollowList;