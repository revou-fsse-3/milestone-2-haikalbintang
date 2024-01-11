import { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Card } from '../../components'
import Pokemon from './Pokemon'

interface PokemonData {
  name: string
}

interface ResponseData {
  results: PokemonData[]
}

const HomeContainer = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchingPokemon = useCallback(async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data: ResponseData = await response.json()
    const result = data.results
    setPokemons(result)
  }, [])

  useEffect(() => {
    fetchingPokemon()
  }, [fetchingPokemon])

  return (
    <Card border>
      <div>
        <h2>Ini Container</h2>
      </div>
      <Card border>
        <Pokemon pokemons={pokemons} />
        <Button label={'Fetch Ulang'} onClick={() => fetchingPokemon()} />
        <Button label={'Update Value'} onClick={() => (inputRef.current!.value = 'value updated')} />
        <input type="text" value={'ini value'} ref={inputRef} />
      </Card>
    </Card>
  )
}

export default HomeContainer
