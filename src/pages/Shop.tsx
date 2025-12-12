import React, { useState } from 'react'
import DrinkCard from '../components/DrinkCard'
import { alchoholData } from '../data/alcohol'

export default function Shop() {
  const [type, setType] = useState("all")

  const filterAlchohol = type === "all" ? alchoholData : alchoholData.filter(t => t.category === type)
  
  return (
    <div>
      <div className='filters'>
              <button onClick={() => setType("all")}>All</button>
              <button onClick={() => setType("whiskey")}>Whiskey</button>
              <button onClick={() => setType("vodka")}>Vodka</button>
              <button onClick={() => setType("rum")}>Rum</button>
              <button onClick={() => setType("tequila")}>Tequila</button>
              <button onClick={() => setType("gin")}>Gin</button>
              <button onClick={() => setType("bourbon")}>Bourbon</button>
              <button onClick={() => setType("wine")}>Wine</button>
              <button onClick={() => setType("brandy")}>Brandy</button>
              <button onClick={() => setType("cognac")}>Cognac</button>
              <button onClick={() => setType("scotch")}>Scotch</button>
            </div>
            <div className='grid'> 
              {filterAlchohol.map((d) => (
                <DrinkCard key={d.id} drink={d} />
              ))}
            </div>  
    </div>
  )
}
