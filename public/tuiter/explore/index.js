import  NavigationSidebar from "../NavigationSidebar/index.js"
import  WhoToFollowListItem from "../WhoToFollowList/index.js"
import ExploreComponent from "./ExploreComponent.js"

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row">

<!--   First column Navigation Side BAr-->

        <div class="col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2">
            ${NavigationSidebar()}
        </div>

<!--   Second column Explore Component-->

        <div class="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
            ${ExploreComponent()}
        </div>

<!--   Third Column Who To Follow List-->

        <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block ">
            ${WhoToFollowListItem()}
        </div>

    </div>
</div>  
    `)
}

$(exploreComponent);