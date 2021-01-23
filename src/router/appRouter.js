const AppLayout = () => import('../layouts/AppLayout')
const WorkflowTablePage = () => import('@/views/workflow/WorkflowTablePage')
const WorkflowPage = () => import('@/views/workflow/WorkflowPage')

export default {
  path: '/app',
  name: 'App',
  redirect: 'app/workflow',
  component: AppLayout,
  children: [
    {
      path: 'workflow',
      name: 'Workflow',
      redirect: '/app/workflow/list',
      component: {
        render (c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: 'list',
          name: 'WorkflowTablePage',
          component: WorkflowTablePage
        },
        {
          path: 'invoices/:id',
          name: 'WorkflowPage',
          component: WorkflowPage
        }
      ]

    }  
  ]
}