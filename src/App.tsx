import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout'
import { HomeContainer, ProtectContainer, StatsContainer } from './containers'
import ProtectLayout from './layout/ProtectLayout.tsx'

function App() {
  const routes = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomeContainer />,
        },
        {
          path: '/stats',
          element: <StatsContainer />,
        },
        {
          path: '/detail/:id',
          element: <></>,
        },
        {
          path: '*',
          element: <h1>Page Not Found</h1>,
        },
      ],
    },
    {
      element: <ProtectLayout />,
      children: [
        {
          path: '/protect',
          element: <ProtectContainer />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
