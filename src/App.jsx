import React, { useState } from 'react';
import Styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Inicio from './Components/Inicio';
import Tienda from './Components/Tienda';
import Blog from './Components/Blog';
import Error404 from './Components/Error404';
import Carrito from './Components/Carrito';

function App() {
	const productos = [
		{ id: 1, nombre: 'producto 1' },
		{ id: 2, nombre: 'producto 2' },
		{ id: 3, nombre: 'producto 3' },
		{ id: 4, nombre: 'producto 4' },
	];
	const [carrito, setCarrito] = useState([]);

	const agregarAlCarrito = (idProducto, nombre) => {
		const nuevoCarrito = [...carrito];
		if (nuevoCarrito.length === 0) {
			nuevoCarrito.push({ id: idProducto, nombre: nombre, cantidad: 1 });
		} else {
			const existe =
				nuevoCarrito.filter((productodelcarrito) => {
					return productodelcarrito.id === idProducto;
				}).length > 0;
			if (existe) {
				nuevoCarrito.forEach((producto, index) => {
					if (producto.id === idProducto) {
						const cantidad = producto.cantidad;
						nuevoCarrito[index] = {
							id: idProducto,
							nombre: nombre,
							cantidad: cantidad + 1,
						};
					}
				});
			} else {
				nuevoCarrito.push({ id: idProducto, nombre: nombre, cantidad: 1 });
			}
		}
		setCarrito(nuevoCarrito);
	};
	return (
		<Contenedor>
			<Menu>
				<NavLink to='/'>Inicio</NavLink>
				<NavLink to='/blog'>Blog</NavLink>
				<NavLink to='tienda'>Tienda</NavLink>
			</Menu>
			<main>
				<Switch>
					<Route exact path='/' component={Inicio} />
					<Route path='/blog' component={Blog} />
					<Route path='/tienda'>
						<Tienda productos={productos} agregarAlCarrito={agregarAlCarrito} />
					</Route>
					<Route component={Error404} />
				</Switch>
			</main>
			<aside>
				<Carrito carrito={carrito} />
			</aside>
		</Contenedor>
	);
}

const Contenedor = Styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);`;

const Menu = Styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }`;

export default App;
