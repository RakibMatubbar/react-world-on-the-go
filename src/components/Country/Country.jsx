
import React, { useState } from 'react';

import './Country.css';

const Country = ({ country, handlevisitedCountries }) => {
    // console.log(country);
    // console.log(handlevisitedCountries);

    // Handle BTN: Visited or not?
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // console.log('BTN Clicked');

        /*
        setVisited(true);

        // Basic System:
        if(visited){
            setVisited(false)
        }else{
            setVisited(true)
        }

        // Tarnary System:
        setVisited(visited ? false : true);
        */

        // WOW System: True - flase game:
        setVisited(!visited);

        handlevisitedCountries(country);
    }


    return (

        // <div className='country'>
        <div className={`country ${visited && 'country-visited'}`}>

            {/* <img src={country.flags.flags.png} alt={country.flags.flags.alt} /> */}
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />

            <h3>Name: {country.name.common} </h3>

            <p>Population: {country.population.population} </p>

            {/* Conditional Rendaring: JS: {} */}
            <p>Area: {country.area.area}
                {
                    country.area.area > 30000 ? "Big Country" : "Samall Country"
                } </p>

            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button>Add Visited Flag</button>

        </div>
    );
};

export default Country;