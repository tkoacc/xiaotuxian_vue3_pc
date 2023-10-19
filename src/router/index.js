import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/category/:id',
          name: 'Category',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '/category/sub/:id',
          name: 'SubCategory',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: '/cartlist',
          name: 'CartList',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: () => import('@/views/Checkout/index.vue')
        },
        {
          path: '/pay',
          name: 'Pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: '/paycallback',
          name: 'PayBack',
          component: () => import('@/views/Pay/PayBack.vue')
        },
        {
          path: '/member',
          name: 'Member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: '',
              name: 'UserInfo',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              name: 'UserOrder',
              component: () => import('@/views/Member/components/UserOrder.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
