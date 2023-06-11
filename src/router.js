import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PhotoDetail from "./pages/PhotoDetail.vue";
import PhotosTag from "./pages/PhotosTag.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
   
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/photo/:id',
            name: 'detail',
            component: PhotoDetail,
        },
        {
            path: '/photo-tags/:tagId',
            name: 'PhotosTag',
            component: PhotosTag
        }
    ]
})

export { router }