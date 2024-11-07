let burger = document.getElementById("burger");
let fries = document.getElementById("fries");
let drink = document.getElementById("drink");
let orderBtn = document.getElementById("order-btn");
let orderItem = document.getElementById("order-item");

// Image elements
let burgerImg = document.getElementById("burger-img");
let friesImg = document.getElementById("fries-img");
let drinkImg = document.getElementById("drink-img");

// Order ID container
let orderIdDisplay = document.getElementById("order-id");

// Function to generate a unique order ID (random number between 0 and 1000)
function generateOrderId() {
    return Math.floor(Math.random() * 1001); 
}

// Function to hide all item images
function hideAllImages() {
    burgerImg.style.display = "none";
    friesImg.style.display = "none";
    drinkImg.style.display = "none";
}

let newOrderBtn = document.getElementById("new-order-btn");

// Function to reset the order form
function resetOrder() {
    // Uncheck all checkboxes
    burger.checked = false;
    fries.checked = false;
    drink.checked = false;

    // Hide all images
    hideAllImages();

    // Clear the order details and order ID display
    orderItem.innerHTML = "";
    orderIdDisplay.style.display = "none";
}

// Event listener for the new order button
newOrderBtn.addEventListener("click", function() {
    resetOrder(); // Reset the order form when "New Order" is clicked
});


orderBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Hide previous order images
    hideAllImages();

    let items = [];
    let orderedImages = [];

    // Check selected items and add them to the order array
    if (burger.checked) {
        items.push(burger.value);
        orderedImages.push(burgerImg);
    }
    if (fries.checked) {
        items.push(fries.value);
        orderedImages.push(friesImg);
    }
    if (drink.checked) {
        items.push(drink.value);
        orderedImages.push(drinkImg);
    }

    if (items.length > 0) {
        // Generate a unique order ID for this order
        let orderId = generateOrderId();
        
        orderIdDisplay.innerHTML = `Order ID: ${orderId}`;
        orderIdDisplay.style.display = "block"; 

        orderedImages.forEach((img, index) => {
            setTimeout(() => {
                orderItem.innerHTML = `<p>You ordered: ${items.join(", ")}</p>`;
                img.style.display = "block";
            }, 1000 * (index + 1));  
        });
    } else {
        orderItem.innerHTML = `<p>Please select at least one item.</p>`;
    }
});
