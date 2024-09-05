import { createMemoryHistory, createRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore';

import task1 from '@/components/task1.vue';
import page2 from '@/views/page2.vue';


const routes = [
    { 
        path: '/', 
        component: task1 
    },
    {
        path: '/page2',
        name: 'page2',
        component: page2,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/not-found',
        name: 'notFound',
        component: () => import('../components/notFound.vue')
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.requiresAuth && !userStore.isAuthentified) {
        next('/not-found');
    } else {
        next();
    }
});

export default router 