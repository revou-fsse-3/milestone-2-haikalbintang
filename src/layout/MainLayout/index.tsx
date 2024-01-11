import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <div>Footer</div>
      </div>
    </div>
  )
}

export default MainLayout
