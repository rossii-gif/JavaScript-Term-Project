// Select all tab buttons and tab content divs
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

// Function to switch tabs
tabLinks.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // Hide all tab contents
    tabContents.forEach(tab => tab.style.display = "none");

    // Remove 'active' class from all buttons
    tabLinks.forEach(btn => btn.classList.remove("active"));

    // Show the selected tab content
    document.getElementById(target).style.display = "block";

    // Add 'active' class to the clicked button
    button.classList.add("active");
  });
});

// Optional: set the first tab as active on page load
if (tabLinks.length > 0) {
  tabLinks[0].click();
}