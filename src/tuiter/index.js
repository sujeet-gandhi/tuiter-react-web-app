import NavigationSidebar from "./navigation-sidebar"
import ExploreComponent from "./explore"
import HomeComponent from "./home"
import Whotofollow from "./who-to-follow-list"
import PostSummaryList from "./post-summary-list"
import {Routes, Route} from "react-router";


function Tuiter() {
    return (
        <div className="row mt-1">
            <div className="d-none d-sm-block col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <Routes>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path=""    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                <Routes>
                    <Route path="home"    element={<Whotofollow/>}/>
                    <Route path=""    element={<Whotofollow/>}/>
                    <Route path="explore" element={<Whotofollow/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Tuiter