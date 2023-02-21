import { createRouter, createWebHistory } from 'vue-router'
import CreateTeamsView from '../views/CreateTeamsView.vue'
import QuestionView from '../views/QuestionView.vue'
import TopicsPickerView from '../views/TopicsPickerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'createTeams',
      component: CreateTeamsView
    },
    {
      path: '/question',
      name: 'question',
      component: QuestionView
    },
    {
      path: '/topics',
      name: 'topics',
      component: TopicsPickerView
    },
  ]
})

export default router
