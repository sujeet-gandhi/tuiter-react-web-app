const ExploreComponent = () => {
    return (`
            <div class="">
                <div class="row">
                    <div class="col-10">
                        <div class="position-relative ms-3 mt-1">
                            <input class="form-control rounded-pill wd-padding-search-text "  id="input1" placeholder="Search Tuiter">
                            <i class="fa-solid fa-magnifying-glass position-absolute wd-search-icon"></i>
                        </div>
                    </div>
                    <div class="col-2 mt-1 ps-4 pt-1">
                        <a href="#">
                            <i class="fa-solid fa-gear fs-2" style="color: dodgerblue"></i>
                        </a>
                    </div>
                </div>

                <ul class="nav nav-tabs mt-2 mb-2 justify-content-between">
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
                <div class="position-relative border border-dark">
                    <img src="../../images/ai_day_3.webp" width="100%" height="70%">
                    <h1 class="position-absolute bottom-0 ps-2 text-white fs-5">Tesla AI Day - Humanoid Robot Prototype Optimus Revealed at Paolo Alto &nbsp;<i class="fa-solid fa-robot"></i> </h1>

                    <h6 class="position-absolute text-white small wd-small-text-image">Science | Trending</h6>

                </div>
                <ul class="list-group mt-0 rounded-2">

                    <li class="list-group-item ">
                        <div class="row ms-1">
                            <div class="col">
                                <div class="row position-relative">
                                    <div class="row text-secondary">
                                        Web Development
                                    </div>
                                    <div class="col ps-0 text-opacity-75 fw-bolder">
                                        ReactJS
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div class="col-8 text-secondary position-absolute wd-hour-stat">
                                        - 2h
                                    </div>

                                </div>
                                <div class="row fw-bolder text-opacity-75">
                                    React JS is a Single Page Application Network by Meta used to build Instagram
                                </div>

                            </div>
                            <div class="col-3">
                                <img class="float-end img-fluid rounded-1"  src="../../images/react.webp"  >
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item ">
                        <div class="row ms-1">
                            <div class="col">
                                <div class="row fw-bolder position-relative">
                                    <div class="col ps-0 text-opacity-75">
                                        JavaScript
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div class="col-8 text-secondary fw-lighter position-absolute wd-hour-stat-white">
                                        - 2h
                                    </div>

                                </div>
                                <div class="row fw-bolder text-opacity-75">
                                    JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
                                </div>
                                <div class="row text-secondary">
                                <span class="ps-0">
                                    23.4K Tuits
                                </span>
                                </div>

                            </div>
                            <div class="col-3">
                                <img class="float-end img-fluid rounded-1"  src="../../images/js.png"  >
                            </div>
                        </div>
                    </li>

                    </li>
                    <li class="list-group-item">
                        <div class="row ms-1 text-opacity-75">
                            <div class="col">
                                <div class="row fw-bolder position-relative">
                                    <div class="col ps-0">
                                        <img class="rounded-3" src="../../images/metacritic.png" height="17px">
                                        Metacritic
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div class="col-8 text-secondary fw-lighter position-absolute wd-date-stat">
                                        . October 4, 2022
                                    </div>

                                </div>
                                <div class="row fw-bolder text-opacity-75">
                                    Horizon Forbidden West is a masterpiece. The foundation that Horizon Zero Dawn has laid is improved in every way, whether it's gameplay or story.
                                </div>

                            </div>
                            <div class="col-3">
                                <img class="float-end rounded-1 img-fluid"  src="../../images/forbidden-west.webp" height="80%" width = 100%>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item ">
                        <div class="row ms-1">
                            <div class="col">
                                <div class="row fw-bolder position-relative">
                                    <div class="col ps-0 text-opacity-75">
                                        Pytorch
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    <div class="col-8 text-secondary fw-lighter position-absolute wd-hour-stat">
                                        - 2h
                                    </div>

                                </div>
                                <div class="row fw-bolder text-opacity-75">
                                    Meta Open Sources PyTorch AI Framework to New Foundation. The Foundation will now control the project
                                </div>

                            </div>
                            <div class="col-3">
                                <img class="float-end bg-white img-fluid rounded-1"  src="../../images/pytorch.png"  >
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    `)
}

export default ExploreComponent;