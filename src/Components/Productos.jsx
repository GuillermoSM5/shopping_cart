import React from 'react';
import Styled from 'styled-components';

const Productos = ({ productos, agregarAlCarrito }) => {
	console.log(productos);
	return (
		<>
			<h5>Productos</h5>
			<ContenedorProductos>
				{productos.map((item, index) => {
					return (
						<Producto key={index}>
							<p>{item.nombre}</p>
							<Boton onClick={() => agregarAlCarrito(item.id, item.nombre)}>
								Agregar al carrito
							</Boton>
						</Producto>
					);
				})}
			</ContenedorProductos>
		</>
	);
};
const ContenedorProductos = Styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

const Producto = Styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const Boton = Styled.button`
    border: none;
    background: #1c85e8;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
        background: #1c6ab9;
    }
`;

export default Productos;
