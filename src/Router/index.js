import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./Views/HomeView.vue";
import JobsView from "./Views/JobsView.vue";
import NotFound from "./Views/NotFound.vue";
import JobView from "./Views/JobView.vue";
import AddJobView from "./Views/AddJobView.vue";
import EditJob from "./Views/EditJob.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView,
        },
        {
            path: '/jobs/Add',
            name: 'add-job',
            component: AddJobView,
        },
        {
            path: '/Jobs/Edit/:id',
            name: 'edit-job',
            component: EditJob,
        },
        {
            path: '/:catchAll(.*)',
            name: 'jobsadd',
            component: NotFound,
        },
    ],
});

export default router;