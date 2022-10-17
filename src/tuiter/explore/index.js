import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up-search"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-4 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-tabs mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="../../images/ai_day_3.webp" alt={'mainPostImage'} className="w-100"/>
                <h3 className="position-absolute wd-nudge-up text-white fw-bolder fs-4">
                    Tesla AI Day - Optimus Revealed&nbsp;<i className="fa-solid fa-robot"></i></h3>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;