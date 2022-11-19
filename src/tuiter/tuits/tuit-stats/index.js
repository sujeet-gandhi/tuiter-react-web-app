import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStat = ({post}) => {
    const dispatch = useDispatch();
    let postLike
    let postDislike
    if (parseInt(post.likes) > 0) {
        postLike = true
    }else{
        postLike = post.liked
    }
    if (parseInt(post.dislikes) > 0) {
        postDislike = true
    }else{
        postDislike = post.disliked
    }
    return (
        <div>
            <div className="row mt-3 text-secondary text-nowrap mb-1 ms-1">
                <div className="col-2 ">
                    <i className="fa-solid fa-comment"></i> <span className="ps-1">{post.replies}</span>
                </div>
                <div className="col-2">
                    <i className="fa-solid fa-retweet"></i> <span className="ps-1">{post.retuits}</span>
                </div>
                {/*<div className="col-3">*/}
                {/*    <i className={`fa-solid fa-heart ${post.liked ? "text-danger" : ""}`}></i> <span className="ps-1">{post.likes}</span>*/}
                {/*</div>*/}
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        likes: post.likes + 1
                    }))} className={`fa-solid fa-heart ${postLike ? "text-danger" : ""}`}></i><span className="ps-1">{post.likes}</span>
                </div>
                <div className="col-2">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...post,
                        dislikes: post.dislikes + 1
                    }))} className={`fa-solid fa-thumbs-down ${postDislike ? "text-primary" : ""}`}></i><span className="ps-1">{post.dislikes}</span>
                </div>
                <div className="col-4 pe-0">
                    <i className="fa-solid fa-upload"></i>
                </div>
            </div>
        </div>
    )
}
export default TuitStat;