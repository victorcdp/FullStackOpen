import { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import Persons from './components/Persons'
import NewPersonForm from './components/NewPersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setNewSearchFilter] = useState('')
  const personsToShow = persons.filter(
    (person) => (
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchFilterChange = (event) => {
    setNewSearchFilter(event.target.value)
  }

  const isRepeated = () => {
    const iterator = persons.values()

    for (const person of iterator) {
      if(person.name === newName){
        return true;
      }
    }
    return false;
  }

  const addName = (event) => {
    event.preventDefault()
    if(isRepeated()){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const nameObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter value={searchFilter} onChange={handleSearchFilterChange} />
      <h3>add a new</h3>
      <NewPersonForm
        onSubmit={addName}
        nameInputValue={newName}
        nameInputOnChange={handleNameChange}
        numberInputValue={newNumber}
        numberInputOnChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
