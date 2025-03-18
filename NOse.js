// NOse.js

document.addEventListener('DOMContentLoaded', () => {
    // Manejo del botón de inicio de sesión
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            // Redirigir al catálogo
            window.location.href = 'catalogo.html';
        });
    }

    // Inicializa el carrito desde el almacenamiento local
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para actualizar el carrito y el total
    function updateCart() {
        const cartTotal = cart.reduce((total, item) => total + item.price, 0);
        document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    }

    // Manejo del carrito en el catálogo
    const cartButtons = document.querySelectorAll('.add-to-cart');
    if (cartButtons.length > 0) {
        cartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const product = button.closest('.product');
                const id = product.dataset.id;
                const name = product.querySelector('h2').textContent;
                const price = parseFloat(product.dataset.price);

                // Verifica si el producto ya está en el carrito
                const existingProduct = cart.find(item => item.id === id);
                if (existingProduct) {
                    // Si el producto ya está en el carrito, solo actualiza la cantidad
                    existingProduct.quantity += 1;
                } else {
                    // Si el producto no está, lo agrega al carrito
                    cart.push({ id, name, price, quantity: 1 });
                }

                // Actualizar el carrito en el localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Actualiza el total en la página
                updateCart();

                alert(`${name} agregado al carrito.`);
            });
        });
    }

    // Cargar el total inicial del carrito cuando se carga la página
    updateCart();

    // Puedes agregar funcionalidad de visualización del carrito si es necesario
    // Ejemplo: Mostrar todos los productos agregados al carrito en una lista
});
