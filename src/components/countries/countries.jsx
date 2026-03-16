
import React, { use, useState } from 'react';

import Country from '../Country/Country';

// import './Countries.css';
import './Countries.css'

// Destucturing to show the variable's data:
const Countries = ({ countiresPromise }) => {

    // Count Visited Country:
    const [visitedCountries, setvisitedCountries] = useState([]);

    // Added Visited Flag:
    const [visitedFlags, setVisitedFlags] = useState([]);

    // Count Visited Country: Handler:
    const handlevisitedCountries = (country) => {
        // console.log('Clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountries);
    }

    // Added Visited Flag: Handler:
    const handleVisitedFlags = (flag) =>{
        // console.log('Flag', flag);

        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
        
    }

    // Use (use()) and store the variable into ().
    const countriesData = use(countiresPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    return (
        <div>
            <h1>World On The Go {countries.length} </h1>
            <h2>Total Country Visited: {visitedCountries.length} </h2>
            <h2>Total Flags Visited: {visitedFlags.length} </h2>

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}> {country.name.common} </li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            {/* Mapping in js and single data store in country, it sent County.jsx */}
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handlevisitedCountries={handlevisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
