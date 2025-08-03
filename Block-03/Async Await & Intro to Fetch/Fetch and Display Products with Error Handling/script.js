
    const API_URL = "https://fakestoreapi.com/products"; // You can break this on purpose to test error

    async function fetchAndDisplayProducts() {
      const productContainer = document.getElementById("products");
      const errorContainer = document.getElementById("error");
      const totalPriceContainer = document.getElementById("total");

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const products = await response.json();

        // Show product cards
        products.forEach(product => {
          const card = document.createElement("div");
          card.className = "product-card";

          card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>₹${product.price}</p>
            <button>View Details</button>
          `;

          productContainer.appendChild(card);
        });

        // Calculate total using reduce
        const total = products.reduce((sum, product) => sum + product.price, 0);
        totalPriceContainer.innerText = `💰 Total Price of All Products: ₹${total.toFixed(2)}`;

        // Also log names and prices to console
        console.log("Fetched Products:");
        products.forEach(p => console.log(`${p.title} - ₹${p.price}`));
        console.log("Total Price (using reduce): ₹", total.toFixed(2));

      } catch (error) {
        errorContainer.innerText = "❌ Failed to fetch products. Please try again later.";
        console.error("Error fetching products:", error);
      }
    }

    // Run on page load
    fetchAndDisplayProducts();