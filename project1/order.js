document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const clearCartBtn = document.getElementById("clear-cart");
    const upiSection = document.getElementById("upi-section");
    const paymentOptions = document.getElementsByName("payment");
    
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;
        cartItems.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;
            
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = function () {
                removeItem(index);
            };
            
            li.appendChild(removeBtn);
            cartList.appendChild(li);
            total += item.price;
        });
        totalPriceElement.textContent = total;
    }

    function removeItem(index) {
        cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCart();
    }

    clearCartBtn.addEventListener("click", function () {
        cartItems = [];
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCart();
    });

    paymentOptions.forEach(option => {
        option.addEventListener("change", function () {
            if (this.value === "upi") {
                upiSection.style.display = "block";
            } else {
                upiSection.style.display = "none";
            }
        });
    });

    function placeOrder() {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Order placed successfully!");
        alert("Your Food Will Be Arrived soon!Enjoy your Food☺️")
        localStorage.removeItem("cart");
        cartItems = [];
        updateCart();
    }

    window.placeOrder = placeOrder;
    updateCart();
});
