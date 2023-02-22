import { createRouter, createWebHistory } from 'vue-router'
import CreateTeamsView from '../views/CreateTeamsView.vue'
import QuestionView from '../views/QuestionView.vue'
import TopicsPickerView from '../views/TopicsPickerView.vue'
import QuestionSelectView from '../views/QuestionSelectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'createTeams',
      component: CreateTeamsView
    },
    {
      path: '/question/:id',
      name: 'question',
      component: QuestionView
    },
    {
      path: '/topics-picker',
      name: 'topics-picker',
      component: TopicsPickerView
    },
    {
      path: '/select-question',
      name: 'select-question',
      component: QuestionSelectView
    },
  ]
})

export default router
