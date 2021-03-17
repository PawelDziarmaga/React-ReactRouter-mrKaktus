import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/Navigation.css';


class NavigationOne extends React.Component {
    state = {  }
    render() { 
        return ( 
          <>
            <ul className="frirstFloor">
                <li></li>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/rosliny">Rośliny</NavLink></li>
                <li><NavLink to="/kaktusy">Kaktusy</NavLink></li>
                <li><NavLink to="/sukulenty">Sukulenty</NavLink></li>
            </ul>
        </>
         );
    }
}
 
export default NavigationOne ;