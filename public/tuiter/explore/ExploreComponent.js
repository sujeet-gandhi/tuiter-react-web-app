const ExploreComponent = () => {
    return (`
            <div class="border border-dark">
            <div class="row">
                <div class="col-10">
                    <div class="position-relative ms-3 mt-1">
                        <input class="form-control rounded-pill wd-padding-search-text bg-dark text-white border-dark"  id="input1" placeholder="Search Tuiter">
                        <i class="fa-solid fa-magnifying-glass position-absolute wd-search-icon"></i>
                    </div>
                </div>
                <div class="col-2 mt-1 ps-4 pt-1">
                    <a href="#">
                    <i class="fa-solid fa-gear fs-2" style="color: lightgray"></i>
                    </a>
                </div>
            </div>

            <ul class="nav nav-tabs mt-2 border-0 justify-content-between">
                <li class="nav-item text-secondary">
                    <a class="nav-link text-secondary" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block ">
                    <a class="nav-link text-white" href="#"><span class="wd-selected">Entertainment</span></a>
                </li>
            </ul>
            </div>
            <div class="border border-dark">
            <div class="position-relative border border-dark">
            <img src="../../images/ai_day_3.webp" width="100%" height="70%">
                 <h1 class="position-absolute bottom-0 ps-2 text-white fs-4">Tesla AI Day - Humanoid Robot Prototype Optimus Revealed at Paolo Alto &nbsp;<i class="fa-solid fa-robot"></i> </h1>

                <h6 class="position-absolute text-white small wd-small-text-image">Science | Trending</h6>

            </div>
            <ul class="list-group mt-0 rounded-2">
                <li class="list-group-item bg-black">
                    <div class="row ms-1 text-white">
                        <div class="col">
                            <div class="row text-secondary small">
                                Trending in Dance Pop & R&B
                            </div>
                            <div class="row fw-bolder text-white text-opacity-75 position-relative">
                                <div class="col ps-0">
                                    Dua Lipa
                                </div>
                            </div>
                            <div class="row text-secondary small">
                                52.3K Tuits
                            </div>

                        </div>
                        <div class="col-1">
                            ...
                        </div>
                    </div>
                </li>
                <li class="list-group-item bg-black">
                    <div class="row ms-1 text-white">
                        <div class="col">
                            <div class="row text-secondary small">
                                Trending in Movie & Anime
                            </div>
                            <div class="row fw-bolder text-white text-opacity-75 position-relative">
                                <div class="col ps-0 ">
                                    Beyond the Spider-Verse
                                </div>
                            </div>
                            <div class="row text-secondary small">
                                <span class="ps-0">
                                    Trending with
                                    <a class="text-decoration-none " href="https://www.playstation.com/en-us/ps5/">Playstation 5</a>
                                </span>
                            </div>

                        </div>
                        <div class="col-1">
                            ...
                        </div>
                    </div>
                </li>
                <li class="list-group-item bg-black ">
                    <div class="row ms-1 text-white text-opacity-75">
                        <div class="col">
                            <div class="row fw-bolder position-relative">
                                <div class="col ps-0">
                                    <img class="rounded-3 bg-success" src="../../images/metacritic.png" height="17px">
                                    Metacritic
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>
                                <div class="col-8 text-secondary fw-lighter position-absolute wd-date-stat">
                                    . October 4, 2022
                                </div>

                            </div>
                            <div class="row fw-bolder text-white text-opacity-75">
                                Horizon Forbidden West is a masterpiece. The foundation that Horizon Zero Dawn has laid is improved in every way, whether it's gameplay or story.
                            </div>

                        </div>
                        <div class="col-3">
                            <img class="float-end rounded-1 img-fluid"  src="../../images/forbidden-west.webp" height="80%" width = 100%>
                        </div>
                    </div>
                </li>
                <li class="list-group-item  bg-black">
                    <div class="row ms-1 text-white">
                        <div class="col">
                            <div class="row fw-bolder position-relative">
                                <div class="col ps-0 text-white text-opacity-75">
                                    Pytorch
                                    <i class="fa-solid fa-circle-check"></i>
                                </div>
                                <div class="col-8 text-secondary fw-lighter position-absolute wd-hour-stat">
                                    - 2h
                                </div>

                            </div>
                            <div class="row fw-bolder text-white text-opacity-75">
                                Meta Open Sources PyTorch AI Framework to New Foundation. The Foundation will now control the project
                            </div>

                        </div>
                        <div class="col-3">
                            <img class="float-end img-fluid bg-white rounded-1"  src="../../images/pytorch.png"  >
                        </div>
                    </div>
                </li>
            </ul>
            </div>
    `)
}

export default ExploreComponent;