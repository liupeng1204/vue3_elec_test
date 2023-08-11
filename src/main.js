import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import UserPage from './pages/UserPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/users/:id', component: UserPage },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from) => {
    console.log({ to, from })
    return true
})

// createApp(App).mount('#app')
const app = createApp({})
app.use(router)
app.mount('#app')
