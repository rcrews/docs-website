function tabbedWindows(evt, env) {

  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(env).style.display = "block";
  evt.currentTarget.className += " active";
}

const tab = document.querySelectorAll(".tablinks");
const content = document.querySelectorAll(".tabcontent");

for (let i = 0; i < tab.length; i++) {
    let conId = tab[i].getAttribute('data-target');
    let conArray = Array.from(content);
    let con = conArray.find((c) => c.getAttribute('id') === conId);
    let c = con.getAttribute('id');
    tab[i].addEventListener('click', (event) => tabbedWindows(event,c), false);
}