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
            <div className="col-1 ms-4">
                <img className="rounded-circle float-end" src={post.userImage} alt={'postUserImage'}  width="50px" height="50px"/>

            </div>
            <div className="col-10 ms-2">
                <div className="row ">
                    <div className="fw-bold float-start">
                        {post.username}
                        <i className="fa-solid fa-circle-check ps-1"></i>
                        <span className="text-secondary ps-1"> @{post.handle}</span>
                        <span className="text-secondary"> . {post.time}</span>
                        <span className="text-secondary float-end ">...</span>

                        <div className="fw-lighter">
                            <span>{post.messageBeforeLink} <a className="text-decoration-none"
                                                              href={post.messageLink}>{post.messageLinkText}</a>{post.messageAfterLink}</span>
                        </div>
                    </div>
                </div>

                <div className="row ps-2">
                    <div className={`${post.imageWithText === false? 'wd-rounded-bottom':''}  ps-0 pe-0 mt-2 border border-secondary wd-rounded-top`}>

                        <img  className={`${post.imageWithText === false? 'wd-rounded-bottom':''}   wd-rounded-top`} alt={'postImage'} src={post.image} width="100%"/>
                    </div>
                </div>
                <div className="row ps-2">
                    <div className={`${post.imageWithText === false? 'd-none':' '}  ps-2 pe-2 border border-secondary wd-rounded-bottom`}>
                        <div className="mt-1 fw-bolder ps-1"><span className="text-white "> {post.imageTitle} </span></div>
                        <div className="fw-bolder ps-1"><span className="text-secondary">{post.imageInfo}</span></div>
                        <div className="fw-bolder ps-1 text-secondary"><i className="fa-solid fa-link"></i> {post.imageLink}</div>
                    </div>
                </div>

                <div className="row mt-3 text-secondary text-nowrap">
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
                <hr className="mt-2"/>

        </div>

    );
};

export default PostSummaryItem;