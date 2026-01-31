var address = document.getElementById("address");
var phone = document.getElementById("phone");
var riders = document.querySelectorAll('input[name="rider"]');
var payments = document.querySelectorAll('input[name="payment"]');
var button = document.getElementById("confirmBtn");

function checkForm() {
  if (address.value !== "" && phone.value !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

address.addEventListener("input", checkForm);
phone.addEventListener("input", checkForm);
riders.forEach((r) => r.addEventListener("change", checkForm));
payments.forEach((p) => p.addEventListener("change", checkForm));

button.addEventListener("click", function () {
  var rider = document.querySelector('input[name="rider"]:checked');
  var payment = document.querySelector('input[name="payment"]:checked');

  if (address.value === "") {
    alert("Please enter your delivery address");
    return;
  }

  if (phone.value === "") {
    alert("Please enter your phone number");
    return;
  }

  if (!rider) {
    alert("Please select a rider");
    return;
  }

  if (!payment) {
    alert("Please select a payment method");
    return;
  }

  alert("Order confirmed successfully!");
});
