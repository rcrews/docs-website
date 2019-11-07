function tabWindows() {
    "use strict";

const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

const activateTab = target => {
  const contentId = target.getAttribute('data-target');

  // Get all elements with class="tabcontent" and hide them, and show the current tab
  tabContents.forEach(tabContent => {
    tabContent.style.display = tabContent.id === contentId ? 'block' : 'none';
  });

  // Get all elements with class="tablinks" and remove the class "active"
  tabLinks.forEach(tablink => {
    tablink.classList.remove('active');
  });

  // Add an "active" class to the button that opened the tab
  target.classList.add('active');
};


const tabbedWindows = evt => {
  const target = evt.currentTarget;

  activateTab(target);
}


document.querySelectorAll(".tablinks").forEach(tab => {
    tab.addEventListener('click', tabbedWindows, false);
    console.log(tab);
});

activateTab(tabLinks[0]);
}
