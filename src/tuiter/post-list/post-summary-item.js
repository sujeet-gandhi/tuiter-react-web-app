import React from "react";
const PostSummaryItem= (
    {
        post = { }
    }

) => {
    let show = 'd-none'
    let wdRoundBottom = 'wd-rounded-bottom'
    if (post.imageWithText === true) {
        show = ' '
        wdRoundBottom = ''
    }
    console.log('show', show)
    console.log('wdRoundBottom', wdRoundBottom)
    return(
        <div className="row">
            <div className="row">
                <div className="row">
                    <div className="col-1 ps-0">
                        <img className="rounded-circle " src={post.userImage} alt={'postUserImage'} height="50px" width="50px"/>
                    </div>
                    <div className="col-10 ps-3 fw-bold text-nowrap">
                        {post.username}
                        <i className="fa-solid fa-circle-check"></i>
                        <span className="text-secondary"> @{post.handle}</span>
                        <span className="text-secondary"> . {post.time}</span>
                        <div className="fw-lighter">
                            {post.messageBeforeLink} <a className="text-decoration-none"
                                                         href={post.messageLink}>{post.messageLinkText}</a>{post.messageAfterLink}
                        </div>
                    </div>
                    <div className="col-1 ps-0">
                        <span className="text-secondary">...</span>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-10">
                    <div className={`${post.imageWithText === false? 'wd-rounded-bottom':''}  row mt-2 border border-secondary wd-rounded-top`}>

                        <img className={`${post.imageWithText === false? 'wd-rounded-bottom':' '} ps-0 pe-0 wd-rounded-top`} alt={'postImage'} src={post.image}/>
                    </div>
                    <div className={`${post.imageWithText === false? 'd-none':' '} row ps-1 pt-1 border border-secondary wd-rounded-bottom`}>
                        <span className="text-white"> {post.imageTitle} </span>
                        <span className="text-secondary">{post.imageInfo}</span>
                        <div className="text-secondary"><i className="fa-solid fa-link"></i> {post.imageLink}</div>
                    </div>

                    <div className="row mt-3 text-secondary">
                        <div className="col-3 ">
                            <i className="fa-regular fa-comment"></i> <span className="ps-1">{post.comments}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa-solid fa-retweet"></i> <span className="ps-1">{post.retuits}</span>
                        </div>
                        <div className="col-3">
                            <i className="fa-regular fa-heart"></i> <span className="ps-1">{post.likes}</span>
                        </div>
                        <div className="col-3 pe-0">
                            <i className="fa-solid fa-upload"></i>
                        </div>
                    </div>
                </div>
                <hr className="mt-2" style={{"width": "95%"}}/>
            </div>
        </div>

    );
};

export default PostSummaryItem;