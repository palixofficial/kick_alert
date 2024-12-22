document.getElementById("testButton").addEventListener("click", function () {
  const alertPopup = document.getElementById("alertPopup");
  alertPopup.style.display = "flex";
  alertPopup.classList.add("active");

  setTimeout(() => {
    alertPopup.classList.remove("active");
    alertPopup.classList.add("hidden");
    setTimeout(() => {
      alertPopup.style.display = "none";
      alertPopup.classList.remove("hidden");
    }, 800); // Match the animation duration
  }, 2000); // Hide after 5 seconds
});
