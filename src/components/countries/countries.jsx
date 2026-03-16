
import React, { use } from 'react';

import Country from '../Country/Country';

// import './Countries.css';
import './Countries.css'

// Destucturing to show the variable's data:
const Countries = ({ countiresPromise }) => {

    // Use (use()) and store the variable into ().
    const countriesData = use(countiresPromise);
    const countries = countriesData.countries;
    // console.log(countries);


    return (
        <div>
            <h1>World On The Go: {countries.length} </h1>

            {/* Mapping in js and single data store in country, it sent County.jsx */}
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;
