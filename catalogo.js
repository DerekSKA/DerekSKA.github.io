// catalogo.js

document.addEventListener('DOMContentLoaded', () => {
    // Manejo del filtro de categorías
    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', () => {
        const category = categoryFilter.value;
        const products = document.querySelectorAll('.product');
        
        products.forEach(product => {
            const productCategory = product.dataset.category;
            if (category === 'all' || productCategory === category) {
                product.style.display = 'block'; // Mostrar el producto
            } else {
                product.style.display = 'none'; // Ocultar el producto
            }
        });
    });

    // Manejo del carrito
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const price = parseFloat(product.dataset.price);
            const productName = product.querySelector('h2').textContent;
            let currentTotal = parseFloat(document.getElementById('cart-total').textContent);
            
            currentTotal += price;
            document.getElementById('cart-total').textContent = currentTotal.toFixed(2);

            // Aquí puedes guardar en localStorage si es necesario
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ name: productName, price: price });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} agregado al carrito.`);
        });
    });
});
