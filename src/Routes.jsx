import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='github' element={<Github />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )

  // [
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "github",
  //         element: <Github />,
  //       },
  //       {
  //         path: "user/:userid",
  //         element: <User />,
  //       },
  //     ],
  //   },
  // ]
);
