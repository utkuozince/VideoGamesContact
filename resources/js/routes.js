
import VueRouter from "vue-router";
import VideoGames from "./components/VideoGames/VideoGames";
import Contact from "./components/Contact";


const routes = [
    {
        path: "/",
        component: VideoGames ,
        name:"videogames",
    },

    {
        path: "/contact",
        component:Contact ,
        name:"contact",
    },
];


const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
