import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, Github } from './components/index.jsx'
import { githubInfo } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/ReactRouter-GithubAPI/' element={<Layout/>} >
      <Route path='/ReactRouter-GithubAPI/' element={<Home />} />
      <Route
        loader={githubInfo}
        path='/ReactRouter-GithubAPI/user/aditya' 
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
