import Index from "../views/Index/Index.js"
import Detail from "../views/Detail/Detail.js"
import Diancan from "../views/Index/Diancan/Diancan"
import Evaluate from "../views/Index/Evaluate/Evaluate"
import Merchant from "../views/Index/Merchant/Merchant"

const routes=[
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index/diancan",
                component:Diancan
            },
            {
                path:"/index/evaluate",
                component:Evaluate
            },
            {
                path:"/index/merchant",
                component:Merchant
            },
            {
                path:"/index",
                to:"/index/diancan"
            }
        ]
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/",
        to:"/index"
    }
]
export default routes;