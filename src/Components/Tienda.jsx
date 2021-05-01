import React from 'react';
import Productos from './Productos';

const Tienda = ({ productos, agregarAlCarrito }) => {
	return (
		<div>
			<h3>Tienda</h3>
			<Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />
		</div>
	);
};

export default Tienda;
