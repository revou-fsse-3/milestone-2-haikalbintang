import { Outlet, Navigate } from 'react-router-dom'
import { Navbar } from '../../components'

const ProtectLayout = () => {
  const token = localStorage.getItem('token')

  if (token) {
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

  return <Navigate to="/" />
}

export default ProtectLayout
