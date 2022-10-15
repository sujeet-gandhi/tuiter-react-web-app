import  NavigationSidebar from "../NavigationSidebar/index.js"
import  PostSummaryList from "../PostSummaryList/index.js"
import HomeComponent from "./HomeComponent.js"

function homeComponent() {
    $('#wd-explore').append(`
        <div class="row">

<!--   First column Navigation Side BAr-->

        <div class="d-none d-sm-block col-md-2 col-sm-2 col-1 col-lg-1 col-xxl-2 col-xl-2">
            ${NavigationSidebar("Home")}
        </div>

<!--   Second column Explore Component-->

        <div class="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
            ${HomeComponent()}
        </div>

<!--   Third Column Who To Follow List-->

        <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block ">
            ${PostSummaryList()}
        </div>

    </div>
</div>  
    `)
}

$(homeComponent);