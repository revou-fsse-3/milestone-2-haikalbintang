import { useRef } from 'react'
import { Button, Card } from '../../components'
import Pokemon from './Pokemon'
import { useFetchingPokemon } from '../../hooks'

const HomeContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { data, fetchingPokemon } = useFetchingPokemon({
    enabled: true,
  })

  return (
    <Card border>
      <div>
        <h2>Ini Container</h2>
      </div>
      <Card border>
        <Pokemon pokemons={data} />
        <Button label={'Fetch Ulang'} onClick={() => fetchingPokemon()} />
        <Button label={'Update Value'} onClick={() => (inputRef.current!.value = 'value updated')} />
        <input type="text" value={'ini value'} ref={inputRef} />
      </Card>
    </Card>
  )
}

export default HomeContainer
