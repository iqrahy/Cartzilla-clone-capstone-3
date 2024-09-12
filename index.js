// for other menu

const homeMenu = document.getElementById('homeMenu');
const homeItemList = document.getElementById('homeItemList');

  homeMenu.addEventListener('click', function () {
    if (homeItemList.style.display === 'block') {
      homeItemList.style.display = 'none';
    } else {
      homeItemList.style.display = 'block';
    }
  });

  homeMenu.addEventListener('mouseleave', function () {
    homeItemList.style.display = 'none';
  });


// for shop menu
const shopMenu = document.getElementById('shopMenu');
const ShopItem = document.getAnimations('shopItemList');

shopMenu.addEventListener('click', function(){
  if(ShopItem.style.display === 'block'){
    ShopItem.style.display = 'none';
  } else {
    ShopItem.style.display = 'block';
  }
})

shopMenu.addEventListener('mouseleave', function(){
  homeItemList.style.display = 'none';
})



// add cart items


document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cartItems');
  const emptyMessage = document.getElementById('emptyMessage');
  const cartCount = document.getElementById('cartCount');
  const totalPriceElement = document.getElementById('totalPrice');

  // Load cart from local storage
  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
  };

  const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  let cart = loadCart();

  // Function to update cart display
  function updateCart() {
    if (cart.length === 0) {
      // Show empty message and icon
      emptyMessage.style.display = 'block';
      cartItemsContainer.innerHTML = emptyMessage.outerHTML;
      totalPriceElement.textContent = '0.00';
    } else {
      // Hide empty message and icon
      emptyMessage.style.display = 'none';
      cartItemsContainer.innerHTML = ''; // Clear previous items

      let total = 0;

      cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item', 'd-flex', 'align-items-center', 'mb-2');
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" style="width: 60px; height: auto; margin-right: 10px;">
          <div class="flex-grow-1">
            <strong>${item.name}</strong>
            <div>$${item.price.toFixed(2)}</div>
          </div>
          <div class="d-flex align-items-center">
            <input type="number" class="form-control ms-4 me-2 item-quantity" value="${item.quantity}" min="1" data-name="${item.name}">
            <button class="btn btn-danger btn-sm remove-item" data-name="${item.name}" data-action="decrease">&minus;</button>
          </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
      });

      totalPriceElement.textContent = total.toFixed(2);
    }

    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  // Function to add item to cart
  function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }
    saveCart(cart);
    updateCart();
  }

  // Function to decrease item quantity
  function decreaseItemQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        removeFromCart(name);
      } else {
        saveCart(cart);
        updateCart();
      }
    }
  }

  // Function to remove item from cart
  function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart(cart);
    updateCart();
  }

  // Function to update item quantity
  function updateItemQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);
    if (item) {
      item.quantity = parseInt(quantity, 10);
      if (item.quantity <= 0) {
        removeFromCart(name);
      } else {
        saveCart(cart);
        updateCart();
      }
    }
  }

  // Add event listeners to "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');

      addToCart(name, price, image);
    });
  });

  // Add event listeners to "Decrease Quantity" buttons
  document.getElementById('cartItems').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item') && event.target.getAttribute('data-action') === 'decrease') {
      const name = event.target.getAttribute('data-name');
      decreaseItemQuantity(name);
    }
  });

  // Add event listener to quantity inputs
  document.getElementById('cartItems').addEventListener('change', (event) => {
    if (event.target.classList.contains('item-quantity')) {
      const name = event.target.getAttribute('data-name');
      const quantity = event.target.value;
      updateItemQuantity(name, quantity);
    }
  });

  // Initial cart update
  updateCart();
});