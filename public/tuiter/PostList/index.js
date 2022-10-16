import PostSummaryItem from "../PostList/PostSummaryItem.js"
import posts from "../PostList/posts.js"

const PostSummaryList = () => {

    return(`
    ${
        posts.map( onePost => {
            return(PostSummaryItem(onePost))
        }).join('')

    }
            `)
}

export default PostSummaryList;