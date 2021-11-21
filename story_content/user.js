function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oWyI56CCrH":
        Script1();
        break;
      case "5wKcH5iXdPd":
        Script2();
        break;
      case "5hQrCgSW5vH":
        Script3();
        break;
      case "61lqChaNPGo":
        Script4();
        break;
      case "6MN6MYiEG6J":
        Script5();
        break;
      case "5vUrQjiCody":
        Script6();
        break;
      case "6iTwjNmyBoI":
        Script7();
        break;
      case "6IJ3sQBc7dM":
        Script8();
        break;
      case "5cZev6d9zus":
        Script9();
        break;
      case "6eo5ODHvACs":
        Script10();
        break;
      case "6ij4tSRjJUY":
        Script11();
        break;
      case "62uEJU0NJ9j":
        Script12();
        break;
      case "6rJjnaa3A6w":
        Script13();
        break;
      case "6lL9rh9yODY":
        Script14();
        break;
      case "6lyXNF4dQgE":
        Script15();
        break;
      case "6m5PCvFWeFq":
        Script16();
        break;
      case "6DS1e2Bh8IV":
        Script17();
        break;
      case "644ojZ4I1OQ":
        Script18();
        break;
      case "6k1e50L8z4q":
        Script19();
        break;
      case "6EvEwZeklMd":
        Script20();
        break;
      case "68QjXCKuGST":
        Script21();
        break;
      case "5yAqqFTys9F":
        Script22();
        break;
      case "6Q87tfY9Mi7":
        Script23();
        break;
      case "6X8kYwtjgul":
        Script24();
        break;
      case "6RWU1T0JQoN":
        Script25();
        break;
      case "5wVjkLxuNUL":
        Script26();
        break;
      case "6cE7fxduvez":
        Script27();
        break;
      case "5oZaEC40ggR":
        Script28();
        break;
      case "6fABAo1Lx8g":
        Script29();
        break;
      case "6EXTFld3uyL":
        Script30();
        break;
  }
}

function Script1()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script2()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script3()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script4()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script5()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script6()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script7()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script8()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script9()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script10()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script11()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script12()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script13()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script14()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script15()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script16()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script17()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script18()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script19()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script20()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script21()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script22()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script23()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script24()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script25()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script26()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script27()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script28()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script29()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script30()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

