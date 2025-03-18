document.addEventListener('DOMContentLoaded', () => {
    // Recuperar los productos del carrito del localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Mostrar los productos en el carrito
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    // Función para actualizar el total
    const updateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
        checkoutButton.disabled = cart.length === 0; // Habilitar/Deshabilitar botón de checkout
    };

    // Función para renderizar los productos en el carrito
    const renderCart = () => {
        cartItemsContainer.innerHTML = ''; // Limpiar el contenedor
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="product-details">
                    <h3>${item.name}</h3>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <button class="remove-item" data-id="${item.id}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(div);
        });
        updateTotal();
    };

    // Función para eliminar un producto del carrito
    const removeItem = (id) => {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito actualizado
            renderCart(); // Volver a renderizar el carrito
        }
    };

    // Manejar la eliminación de productos
    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            removeItem(productId);
        }
    });

    // Mostrar los productos del carrito al cargar
    renderCart();
});
