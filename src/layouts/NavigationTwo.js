import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import '../style/NavigationTwo.css';


class NavigationTwo extends React.Component {
    state = {  }
    rosliny = () => {
              return(
                <ul className="thirdFloor">
                    <li><NavLink to="/rosliny/grubosz">Grubosz</NavLink></li>
                    <li><NavLink to="/rosliny/fikus">Fikus</NavLink></li>  
                </ul>
              )
    }
    kaktusy = () => {
             return(
                <ul className="thirdFloor">
                    <li><NavLink to="/kaktusy/opuncja">Opuncja</NavLink></li>
                    <li><NavLink to="/kaktusy/szczepiony">Szczepiony</NavLink></li>  
                </ul>
                )
             }
    sukulenty = () => {
              return(
                 <ul className="thirdFloor">
                    <li><NavLink to="/sukulenty/aloes">Aloes</NavLink></li>
                    <li><NavLink to="/sukulenty/sansewieria">Sansewieria</NavLink></li>  
                 </ul>
                    )
    
    }
    render() { 
        return ( 
          <>
          
            <ul className="secondFloor">
                <li></li>
                <li></li>
                <li><Route path="/rosliny" component={this.rosliny}/></li>
                <li><Route path="/kaktusy" component={this.kaktusy}/></li>
                <li><Route path="/sukulenty" component={this.sukulenty}/></li>

            </ul>
        </>
         );
    }
}
 
export default NavigationTwo ;