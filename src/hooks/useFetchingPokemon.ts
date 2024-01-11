import { useCallback, useEffect, useState } from 'react'

export interface PokemonData {
  name: string
}

export interface ResponseData {
  results: PokemonData[]
}

const useFetchingPokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])

  const fetchingPokemon = useCallback(async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data: ResponseData = await response.json()
    const result = data.results
    setPokemons(result)
  }, [])

  useEffect(() => {
    fetchingPokemon()
  }, [fetchingPokemon])

  return data: pokemons
}

export default useFetchingPokemon
