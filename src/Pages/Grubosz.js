import React from 'react'

import API from "../data.json"

class Grubosz extends React.Component {
    state = {  }
    render() { 
        const {name, firstShortInfo, secondShortInfo} = API.rosliny.grubosz
        const {lighting, temperature, watering, flowerSoil, fertilizer, air} = API.rosliny.grubosz.data
        return ( 
           <>
           <h1>{name}</h1>
           <p>{firstShortInfo}</p>
           <p>{secondShortInfo}</p>
           <ul>
               <li>Oświetlenie - {lighting}</li>
               <li>Temperatura - {temperature}</li>
               <li>Podlewanie - {watering}</li>
               <li>Ziemia - {flowerSoil}</li>
               <li>Nawóz - {fertilizer}</li>
               <li>Wilgotność powietrza - {air}</li>
           </ul>
           </>
          
         );
    }
}
 
export default Grubosz;