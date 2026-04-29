const buttons = document.querySelectorAll(".btn-display button");
const products = document.querySelectorAll(".product");
const noProducts = document.getElementById("no-products");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    let visibleCount = 0;
    noProducts.textContent = `No products found in "${button.textContent}"`;

    products.forEach((product) => {
      const category = product.dataset.category;

      if (filter === "all" || category === filter) {
        product.style.display = "flex";
        visibleCount++;
      } else {
        product.style.display = "none";
      }
    });

    // Show or hide "No products"
    if (visibleCount === 0) {
      noProducts.style.display = "block";
    } else {
      noProducts.style.display = "none";
    }
  });
});
