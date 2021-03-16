import React from 'react';
import Productos from './Productos'

const Tienda = ({productos}) => {
    
    return (
       <div> 
         <h3>Tienda</h3>
         <Productos productos={productos}/>
       </div>  
    );
}
 
export default Tienda;