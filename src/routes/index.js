import {} from "react-router-dom"

import {
  Profile,
  Main
} from '../views/pages'

const routes = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/:id',
    component: Profile
  }
]

export default routes