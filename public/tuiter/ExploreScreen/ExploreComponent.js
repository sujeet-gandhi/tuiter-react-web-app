import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {
    return (`
            <div class="">
                <div class="row">
                    <div class="col-10">
                        <div class="position-relative mt-1 ">
                            <input class="form-control rounded-pill wd-padding-search-text "  id="input1" placeholder="Search Tuiter">
                            <i class="fa-solid fa-magnifying-glass position-absolute wd-search-icon"></i>
                        </div>
                    </div>
                    <div class="col-2 mt-1 ps-4 pt-1">
                        <a href="#">
                            <i class="fa-solid fa-gear fs-4" style="color: dodgerblue"></i>
                        </a>
                    </div>
                </div>

                <ul class="nav nav-tabs mt-2 mb-2">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div class="mt-2">
                <div class="position-relative">
                    <img src="../../images/ai_day_3.webp" width="100%" height="70%">
                    <h1 class="position-absolute bottom-0 ps-2 text-white fs-4">Tesla AI Day - Optimus Revealed &nbsp;<i class="fa-solid fa-robot"></i> </h1>

                    <h6 class="position-absolute text-white small wd-small-text-image">Science | Trending</h6>

                </div>
                ${PostSummaryList()}
            </div>
    `)
}

export default ExploreComponent;