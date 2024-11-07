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

orderBtn.addEventListener("click", function(e) {
    e.preventDefault();

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
