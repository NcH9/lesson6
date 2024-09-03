import { createMemoryHistory, createRouter } from 'vue-router'

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
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router 