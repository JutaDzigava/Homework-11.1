const nav = ["home", "about", "gallery", "contact"]

const links = ["index.html", "about.html", "gallery.html", "contacts.html"];

nav.push("delivery");
links.push("delivery.html");

let navtext = '<ul class="flex">';

for(i=0; i<nav.length; i++){
    navtext += '<li><a href=" ' + links[i] + ' ">' + nav[i] + "</a></li>";
    console.log(navtext);
}

navtext += "</ul>";

console.log(navtext);

document.getElementById("nav").innerHTML = navtext;

// davaleba linkis nacvlad swori misamartis

