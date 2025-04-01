function filterCategory() {
    let selectedCategory = document.getElementById("categoryFilter").value;
    let items = document.querySelectorAll(".menu-item"); // Ensure all menu items have this class

    items.forEach(item => {
        if (selectedCategory === "all" || item.classList.contains(selectedCategory)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("searchBox").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
        let itemName = item.textContent.toLowerCase();
        item.style.display = itemName.includes(searchValue) ? "block" : "none";
    });});


    // Function to add items to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage
    let item = { name, price };

    cart.push(item); // Add item to cart array
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart

    console.log("Cart after adding:", cart); // Debugging

    alert(name + " added to cart!");
}
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item + " added to cart!");
}

function goToOrderPage() {
    window.location.href = "order.html";
}

