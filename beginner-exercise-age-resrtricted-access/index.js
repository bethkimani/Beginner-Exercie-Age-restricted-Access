document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const age = document.getElementById("age").value;
    const result = document.getElementById("result");
  
    if (age === "" || age === null) {
      result.textContent = "Invalid age";
    } else if (age < 18) {
      result.textContent = "Access denied. You are too young.";
    } else if (age >= 18 && age < 65) {
      result.textContent = "Access granted";
    } else if (age >= 65) {
      result.textContent = "Access denied. You are too old.";
    }
  });
  