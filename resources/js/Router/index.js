import { createWebHistory, createRouter } from "vue-router";


import Article from "../Pages/Article.vue";
import Article_Type from "../Pages/Article_Type.vue";
import Author from "../Pages/Author.vue";
import Category from "../Pages/Category.vue";
import Notfound404 from "../Pages/Notfound404.vue";

export const routes = [
    {
        name: "Article",
        path: "/Article",
        component: Article
    },

    {
        name: "Article_Type",
        path: "/Article_Type",
        component: Article_Type
    },

    {
        name: "Author",
        path: "/Author",
        component: Author
    },

    {
        name: "Category",
        path: "/Category",
        component: Category
    },

    {
        name: "Notfound404",
        path: "/:pathMactch(.*)*",
        component: Notfound404
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0.0)
    }
});

export default router;