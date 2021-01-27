const AppLayout = () => import('../layouts/AppLayout')
const WorkflowTablePage = () => import('@/views/workflow/WorkflowTablePage')
const WorkflowPage = () => import('@/views/workflow/WorkflowPage')
const AcceptInvoicePage = () => import('@/views/actionPages/actionsPage')
import beforeEnter from "../utils/index"


export default {
  path: '/app',
  name: 'App',
  redirect: '/app/workflow',
  component: AppLayout,
  children: [
    {
      path: 'workflow',
      name: 'Workflow',
      redirect: '/app/workflow/list',
      beforeEnter: beforeEnter,
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
        },
        {
          path: 'invoices-actions/:id',
          name: 'AcceptInvoicePage',
          component: AcceptInvoicePage
        }
      ]

    }  
  ]
}