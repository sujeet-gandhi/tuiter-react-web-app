import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    console.log("who", whoArray)
    return(
        <ul className="list-group">
            <div className="rounded">
                <li className="list-group-item fw-bolder fs-5">Who to follow</li>
            </div>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;