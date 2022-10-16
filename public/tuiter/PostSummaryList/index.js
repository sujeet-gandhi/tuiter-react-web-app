import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js"
import posts from "../PostSummaryList/posts.js"

const PostSummaryList = () => {

    return(`  
    <ul class="list-group mt-0 rounded-2">
    ${
        posts.map( onePost => {
            return(PostSummaryItem(onePost))
        }).join('')
    }
     </ul>
    `)
}

export default PostSummaryList;