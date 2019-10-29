const tabbedWindows = evt => {
  const contentId = evt.currentTarget.getAttribute('data-target');

  // Get all elements with class="tabcontent" and hide them, and show the current tab
  document.querySelectorAll(".tabcontent").forEach(tabContent => {
    tabContent.style.display = tabContent.id === contentId ? 'block' : 'none';
  });

  // Get all elements with class="tablinks" and remove the class "active"
  document.querySelectorAll(".tablinks").forEach(tablink => {
    tablink.classList.remove('active');
  });

  // Add an "active" class to the button that opened the tab
  evt.currentTarget.classList.add('active');
}

document.querySelectorAll(".tablinks").forEach(tab => {
  tab.addEventListener('click', tabbedWindows, false);
});

document.querySelector(".tablinks").click();