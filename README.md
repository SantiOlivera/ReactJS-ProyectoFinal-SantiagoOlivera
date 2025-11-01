# Techify - Tienda Online

**Techify** es una tienda online para productos tecnológicos, desarrollada con React y Firebase. Los usuarios pueden navegar por categorías, ver detalles de productos, agregar productos al carrito y completar una compra. El proyecto utiliza React Router para la navegación y Firestore de Firebase para la gestión de productos y registros de compras.

## Características

- Los usuarios pueden explorar productos, filtrar por categorías y ver los detalles de cada artículo.
- Los productos seleccionados se agregan al carrito, mostrando el precio, cantidad y subtotal de cada producto.
- Los usuarios pueden completar su compra proporcionando información personal y recibiendo un ID de orden.
- Utiliza React Router para navegar entre secciones

## Tecnologías utilizadas

- **React**
- **Firebase**
- **React Router**
- **Vite**
- **Context API**

## Estructura del proyecto

- **App.jsx**: Componente principal que contiene la configuración de rutas
- **NavBar.jsx**: Barra de navegación para acceder a las distintas secciones del sitio.
- **ItemListContainer.jsx**: Componente que se encarga de cargar y mostrar el listado de productos.
- **Item.jsx**: Componente de presentación de cada producto con detalles como imagen, nombre, precio y stock disponible.
- **Cart.jsx**: Componente donde se muestra el carrito con los productos seleccionados y el total de la compra.
- **CheckoutForm.jsx**: Formulario para completar la compra, que envía los datos a Firestore.
