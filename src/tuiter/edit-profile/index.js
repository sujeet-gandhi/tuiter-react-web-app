import React from "react";
import {useSelector} from "react-redux"
import "./index.css"
import {Link} from "react-router-dom";
const ProfileComponent = () => {
    const profileData = useSelector((state) => state.profileReducer);
    console.log(profileData)
    return(
        <div>
            <div className="row mt-1">
                <div className="col-1 mt-2">
                <i className="fa-solid fa-arrow-left fs-5 float-right"></i>
                </div>
                <div className="col-11">
                    <span className="float-left fs-5 row">{profileData.firstName}&nbsp;{profileData.lastName}</span>
                    <span className="float-left fs-6 row">{profileData.numTuits} Tuits</span>
                </div>
            </div>
            <div className="row">
                <img className="" src={profileData.bannerPicture} alt={'postUserImage'}  width="50px" height="300px"/><br/>
            </div>
            <div className="row position-relative ">
                <div className="col-3 position-absolute">
                    <img className="rounded-circle  position-absolute wd-profile-image" src={profileData.profilePicture} alt={'postUserImage'}  height="140px"/>
                </div>
                <Link to="/tuiter/edit-profile">
                    <div className="col-8 position-absolute ">
                        <button className="float-end position-relative wd-profile-btn rounded-pill bg-black border">Edit Profile</button>
                    </div>
                </Link>

            </div>
        </div>
    );
};
export default ProfileComponent;