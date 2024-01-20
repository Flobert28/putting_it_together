import { useState } from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
    <PersonCard firstName={"Doe, Jane"}
    age={ 45 }
    hairC={"Black"}
    fullName={"Jane Doe"} >
    </PersonCard>
    <PersonCard firstName={"Smith, John"}
    age={ 88 }
    hairC={"Brown"}
    fullName={"John Smith"} >
    </PersonCard>
    </>
  )
}

export default App
