const PostSummaryItem = (post) =>{
    return(`
    <li class="list-group-item ">
        <div class="row ms-1">
            <div class="col">
                <div class="row position-relative">
                    <div class="row text-secondary">
                        ${post.topic}
                    </div>
                    <div class="col ps-0 text-opacity-75 fw-bolder">
                        ${post.userName}
                        <i class="fa-solid fa-circle-check"></i> <span class="col-8 text-secondary position-absolute ps-2">
                        - ${post.time}
                    </span>
                    </div>                
                </div>
                <div class="row fw-bolder text-opacity-75">
                    ${post.title}
                </div>

            </div>
            <div class="col-3">
                <img class="float-end rounded-1" src="${post.image}" width="80px" height="80px">
            </div>
        </div>
    </li>
    `);
}

export default PostSummaryItem;