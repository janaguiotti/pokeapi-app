import React from 'react'
import { useRequest } from './useRequest'
import './style.css'
import { Pokemon } from './components/Pokemon'

function App() {
    const { data: result, error } = useRequest('/pokemon')

    if (error) return <h1>Something went wrong!</h1>
    if (!result) return <h1>Loading...</h1>

    return (
        <main className='App'>
            <h1>Pokedex</h1>
            <div>
                {result.results.map((pokemon) => (
                    <Pokemon key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </main>
    )
}
export default App