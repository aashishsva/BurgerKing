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

// Sound effects
let clickSound = new Audio("click.mp3");
let successSound = new Audio("success.mp3");

function generateOrderId() {
    return Math.floor(Math.random() * 1001); 
}

function hideAllImages() {
    burgerImg.classList.remove("show");
    friesImg.classList.remove("show");
    drinkImg.classList.remove("show");
}

let newOrderBtn = document.getElementById("new-order-btn");

function resetOrder() {
    burger.checked = false;
    fries.checked = false;
    drink.checked = false;
    hideAllImages();
    orderItem.innerHTML = "";
    orderIdDisplay.style.display = "none";
}

newOrderBtn.addEventListener("click", function() {
    resetOrder();
    clickSound.play();
});

orderBtn.addEventListener("click", function(e) {
    e.preventDefault();
    hideAllImages();

    let items = [];
    let orderedImages = [];

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
        let orderId = generateOrderId();
        orderIdDisplay.innerHTML = `Order ID: ${orderId}`;
        orderIdDisplay.style.display = "block";
        clickSound.play();
        

        orderedImages.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add("show");
                orderItem.innerHTML = `<p>You ordered: ${items.join(", ")}</p>`;
                successSound.play();
            }, 500 * (index + 1));
            
        });
    } else {
        orderItem.innerHTML = `<p>Please select at least one item.</p>`;
        clickSound.play();
    }
});
