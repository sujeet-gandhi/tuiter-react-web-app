const PostSummaryItem = (post) => {
    let show = 'd-none'
    let wdRoundBottom = 'wd-rounded-bottom'
    if (post.imageWithText === true) {
        show = ' '
        wdRoundBottom = ''
    }
    return (`
    <div class="row">                   
            <div class="row">           
                <div class="col-1 ps-0">
                    <img class="rounded-circle " src="${post.userImage}" height="50px" width="50px">
                </div>                
                <div class="col-10 ps-3 text-white fw-bold text-nowrap">
                    ${post.username}
                    <i class="fa-solid fa-circle-check"></i>
                    <span class="text-secondary"> @${post.handle}</span>
                    <span class="text-secondary"> . ${post.time}</span>
                        <div class="fw-lighter">
                        ${post.messageBeforeLink} <a class="text-decoration-none" href=${post.messageLink}>${post.messageLinkText}</a>${post.messageAfterLink}
                        </div>
                </div>              
                <div class="col-1 ps-0">
                    <span class="text-secondary">...</span>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-10">   
                <div class="row mt-2 border border-secondary wd-rounded-top ${wdRoundBottom}">
                <img class=" ps-0 pe-0 wd-rounded-top ${wdRoundBottom}" src="${post.image}" >
                 </div>                
                 <div class="row ps-1 pt-1 border border-secondary wd-rounded-bottom ${show}">
                 <span class = "text-white"> ${post.imageTitle} </span>
                 <span class="text-secondary">${post.imageInfo}</span>
                 <div class="text-secondary"><i class="fa-solid fa-link"></i> ${post.imageLink}</div>
            </div>
                    
            <div class="row mt-3 text-secondary">
                <div class="col-3 ">
                <i class="fa-solid fa-comment"></i> <span class="ps-1">${post.comments}</span> 
                </div>
                <div class="col-3">
                <i class="fa-solid fa-retweet"></i> <span class="ps-1">${post.retuits}</span> 
                </div>
                <div class="col-3">
                <i class="fa-solid fa-heart"></i> <span class="ps-1">${post.likes}</span> 
                </div>
                <div class="col-3 pe-0">
                <i class="fa-solid fa-upload"></i>
                </div>                    
            </div>  
            </div>                  
            <hr class="mt-2" style="width: 95%">                
            </div>  
    `)
}

export default PostSummaryItem;