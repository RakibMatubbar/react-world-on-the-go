
import { Suspense } from 'react'
import './App.css'

import Countries from './components/countries/countries'

// Create a promise to get API's Data:
const countiresPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (
    <>

      {/* Suspense is a default from React to Show the API's Data into any component: */}
      <Suspense fallback={<p>Countires Loading...</p>}>

        {/* Countries function called here: and show within Contries func the API's data: */}
        <Countries countiresPromise={countiresPromise}></Countries>

      </Suspense>

    </>
  )
}

export default App
