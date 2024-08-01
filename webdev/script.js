document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Forgot password functionality is not implemented.');
});


document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('forgotPassword')?.addEventListener('click', function() {
    alert('Forgot password functionality is not implemented.');
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Registration successful!');
    }
});



//next


document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the cart from localStorage or initialize it as an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Handle Add to Cart buttons on index.html
    if (window.location.pathname.endsWith('index.html')) {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.closest('.product').getAttribute('data-product-id');
                if (!cart.includes(productId)) {
                    cart.push(productId);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert('Product added to cart.');
                } else {
                    alert('Product already in cart.');
                }
                console.log('Cart:', cart); // Debugging log
            });
        });
    }

    // Display cart items on cart.html
    if (window.location.pathname.endsWith('cart.html')) {
        const cartItemsContainer = document.getElementById('cartItems');
        const products = {
            1: { name: 'Product 1', price: '$10.00' },
            2: { name: 'Product 2', price: '$15.00' },
            3: { name: 'Product 3', price: '$20.00' },
            4: { name: 'Product 4', price: '$25.00' }
        };

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(id => {
                const product = products[id];
                return product ? <p>${product.name} - ${product.price}</p> : '';
            }).join('');
        }
        console.log('Displayed Cart Items:', cartItemsContainer.innerHTML); // Debugging log
    }

    // Handle Logout button
    document.getElementById('logoutButton')?.addEventListener('click', function(event) {
        event.preventDefault();
        if (confirm('Are you sure you want to log out?')) {
            window.location.href = 'login.html';
        }
    });
});