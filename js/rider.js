var tabActive = document.getElementById("tabActive");
var tabAvailable = document.getElementById("tabAvailable");

var activeSection = document.getElementById("activeSection");
var availableSection = document.getElementById("availableSection");

var onlineToggle = document.getElementById("onlineToggle");
var statusBadge = document.getElementById("statusBadge");

var completeBtn = document.getElementById("completeBtn");
var acceptBtn = document.getElementById("acceptBtn");

/* Tabs */
tabActive.addEventListener("click", function () {
  activeSection.classList.remove("hide");
  availableSection.classList.add("hide");

  tabActive.classList.add("tab-active");
  tabAvailable.classList.remove("tab-active");
});

tabAvailable.addEventListener("click", function () {
  availableSection.classList.remove("hide");
  activeSection.classList.add("hide");

  tabAvailable.classList.add("tab-active");
  tabActive.classList.remove("tab-active");
});

/* Online toggle */
onlineToggle.addEventListener("change", function () {
  if (onlineToggle.checked) {
    statusBadge.textContent = "Online";
    statusBadge.className = "badge online";
  } else {
    statusBadge.textContent = "Offline";
    statusBadge.className = "badge offline";
  }
});

completeBtn.addEventListener("click", function () {
  alert("Delivery Completed!");
});

acceptBtn.addEventListener("click", function () {
  alert("Order Accepted!");
});
