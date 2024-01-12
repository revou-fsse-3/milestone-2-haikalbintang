import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout'
import { HomeContainer, ProtectContainer, StatsContainer, ProductContainer, UserContainer } from './containers'
import ProtectLayout from './layout/ProtectLayout.tsx'
import ContextProvider from './providers/ContextProvider.tsx'

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
          path: '/product',
          element: <ProductContainer />,
        },
        {
          path: '/user',
          element: <UserContainer />,
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
    <div className="App">
      <ContextProvider>
        <RouterProvider router={routes} />
      </ContextProvider>
    </div>
  )
}

export default App
