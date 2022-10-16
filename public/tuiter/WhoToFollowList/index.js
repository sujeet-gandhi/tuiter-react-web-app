import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"
console.log(who)
const WhoToFollowList  = () => {
    return(`
                <ul class="list-group">
                <div class="rounded">
                    <li class="list-group-item fw-bolder fs-5">Who to follow</li>
                </div>
                ${
                    who.map( item => {
                        return(WhoToFollowListItem(item))
                    }).join('')
    }
            </ul>
    `)

}
export default WhoToFollowList;