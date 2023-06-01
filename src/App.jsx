import { useState } from 'react'
import './App.css'

// Entry point
function App() {
  // Create a useState with inital value of an empty array, called animals. setAnimals is a function that will update the animals array
  const [animals, setAnimal] = useState([]);

  // Create a function called search that will fetch data from the server
  const search = async (q) => {
    const response = await fetch(`http://localhost:3000?` + new URLSearchParams({q}));
    const data = await response.json();
    setAnimal(data);
  }

  return (
    <main>
      <h1>Animal Farm</h1>

      {/* Create a search input bar, then run the search function when on input */}
      <input
        type="text"
        placeholder="Enter an animal"
        onChange={(e) => search(e.target.value)}
      />

      {/* Create a list of animals */}
      <ul>
        {/* Loop through the animals array and display each animal */}
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal}/>
        ))}
        {/* If there are no animals, display a message */}
        {animals.length === 0 && 'No animals to show'}
      </ul>
    </main>
  )
}

// Create a component called Animal that will display the animal's type, name, and age
// CAN IGNORE THIS VVV
// eslint-disable-next-line react/prop-types
function Animal({ type, name, age }) {
  return (
    <li>
      <strong>{type} {name} {age}</strong>
    </li>
  )
}

export default App
