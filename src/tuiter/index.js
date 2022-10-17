import NavigationSidebar from "./NavigationSidebar"
import Explore from "./explore"
import Home from "./home"
import Whotofollow from "./WhoToFollowList"
import {Routes, Route} from "react-router";


function Tuiter() {
    return (
        <div className="row">
            <div className="d-none d-sm-block col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <h2>Tuiter</h2>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="explore" element={<Explore/>}/>
                </Routes>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                <Whotofollow/>
            </div>
        </div>
    )
}

export default Tuiter