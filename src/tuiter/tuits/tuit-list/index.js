import React from "react";

import TuitItem from "../tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector((state) => state.tuitsReducer);
    console.log("array", tuitsArray)
    return (
        <>
            {
                tuitsArray?.map(eachPost =>
                    <TuitItem {...eachPost} /> )
            }
        </>
    );
};

export default TuitsList;