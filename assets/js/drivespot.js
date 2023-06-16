// Change Title  Dynamically

window.onload = function() {
let docTitle = document.title;
window.addEventListener("blur", () =>{document.title = "Come back 😞";})
window.addEventListener("focus", () =>{document.title = docTitle;})

};


// Hover on Priceing

let btn = document.getElementsByClassName('btn')[0];

function zoomPrice(x)
{
	x.style.transform = "scale(1.1)";
	// x.style.ZIndex = "s1";
 }

function normalPrice(x)
{
	x.style.transform = "scale(1)";
	// x.style.ZIndex = "0";
}

let menu = document.getElementsByClassName('menu')[0];
let responsive_menu_items = document.getElementsByClassName('responsive_menu_items')[0];
let isClicked = false;
function changeMenu()
{
	if (isClicked == false)
		{
			menu.innerHTML = "X";
			menu.style.fontSize = "40px";
			menu.style.width = "35px";
			isClicked=true;
			responsive_menu_items.style.width = "100%";
			responsive_menu_items.style.display = "block";
			responsive_menu_items.style.height = "20%";

		} else
		{
			menu.innerHTML = "=";
			isClicked=false;
			responsive_menu_items.style.width = "0%";
			responsive_menu_items.style.display = "none";
			// responsive_menu_items.style.transition = "all 2s";
			responsive_menu_items.style.height = "0%";
		}
}