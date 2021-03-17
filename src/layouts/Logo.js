import React from 'react'
import '../style/Logo.css';
import LogoPictures from '../Pictures/Logo.png'
import NamePictures from '../Pictures/Nazwa.png'

class Logo extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
           <img src={LogoPictures} alt="Cactus with mustache as a logo"/>
           <img src={NamePictures} alt="Page name logo: mrKaktus"/>
             </div>
         );
    }
}
 
export default Logo;