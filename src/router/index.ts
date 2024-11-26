import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Manage from '@/views/Manage.vue'

import ManageBanUser from '@/views/ManageBanUser.vue'
import ManageHome from '@/views/ManageHome.vue'
import ManageSelectUser from '@/views/ManageSelectUser.vue'
import ManageUser from '@/views/ManageSelectUser.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/manage',
      component: Manage,
      redirect: '/manage/manageHome',
      children: [
        {
          path: 'manageHome',
          component: ManageHome
        },
        {
          path: 'manageSelectUser',
          component: ManageSelectUser
        },
        {
          path:'manageBanUser',
          component: ManageBanUser
        }
      ]
    },
  ],
})

export default router
