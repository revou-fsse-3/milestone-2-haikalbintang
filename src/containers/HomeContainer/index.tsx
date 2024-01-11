import { useEffect } from 'react'
import { Button, Card } from '../../components'

const HomeContainer = () => {
  // const [number, setNumber] = useState(1)

  const handleInsertToken = () => {
    localStorage.setItem('token', 'asdzxc')
  }

  useEffect(() => {}, [])

  return (
    <Card border>
      <div>
        <h2>Ini Container</h2>
      </div>
      <Card border>
        <Button label="Login" onClick={handleInsertToken} />
      </Card>
    </Card>
  )
}

export default HomeContainer
