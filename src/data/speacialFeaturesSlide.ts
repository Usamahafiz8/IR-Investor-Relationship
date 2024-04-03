

import { FeaturesType } from "@/interFace/interFace"
import thum1 from "../../public/assets/img/service/1.jpg"
import thum2 from "../../public/assets/img/service/2.jpg"
import thum4 from "../../public/assets/img/service/4.jpg"
import thum5 from "../../public/assets/img/service/5.jpg"
import thum6 from "../../public/assets/img/service/6.jpg"

const Features:FeaturesType[] = [
    {
        id:1,
        img:thum1,
        title:"Airline reservation",
        price:259,
        oldPrice:300
    },
    {
        id:2,
        img:thum2,
        title:"spa & Massages",
        price:399,
        oldPrice:300
    },
    {
        id:3,
        img:thum4,
        title:"ironing & laundry",
        price:159,
        oldPrice:300
    },
    {
        id:4,
        img:thum5,
        title:"room service",
        price:266,
        oldPrice:300
    },
    {
        id:5,
        img:thum6,
        title:"car service",
        price:266,
        oldPrice:300
    },
]

export default Features