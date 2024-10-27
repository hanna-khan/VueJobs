import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFountView from "@/views/NotFountView.vue";
import JobView from "@/views/JobView.vue";
import AddJobsView from "@/views/AddJobsView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/add',
            name: 'add-jobs',
            component: AddJobsView
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-jobs',
            component: EditJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFountView
        },
    ]
})

export default router;