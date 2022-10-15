import PostSummaryItem from "../HomePostSummary/PostSummaryItem.js"
import posts from "../HomePostSummary/posts.js"

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