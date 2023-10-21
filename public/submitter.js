var onloadCallback = function(){
  grecaptcha.render("captcha", {"sitekey": "6LdzgIkUAAAAABb9wPVfFHSsTIPhjsxo7JMuky8f", "theme": "dark"})
} 



function prereqs() {
if (grecaptcha.getResponse().toString() === "") { 
  event.preventDefault(); 
  alert("Please solve the CAPTCHA.");
}
var longdesc = document.getElementById("longdesc")
var shortdesc = document.getElementById("desc")
var botInfo = JSON.parse(httpGet("/api/uservalidate?id=" + document.getElementById("bot_id").value))
if (longdesc.value.length < 100 || longdesc.value.length > 10000) {
 event.preventDefault(); 
 alert("Long description must be between 100 and 10000 characters long") 
} else if (shortdesc.value.length < 5 || shortdesc.value.length > 150) {
 event.preventDefault(); 
 alert("Short description must be between 5 and 150 characters.")
} else if (!botInfo.bot) {
  event.preventDefault()
  alert("The client ID you provided does not belong to a bot.")
}
  /*
if (document.getElementById("invite_url").value.replace(" ", "") == "") {
  document.getElementById("invite_url").value = "https://discordapp.com/oauth2/authorize?client_id=" + botInfo.id + "&scope=bot&permissions=0"
}
*/
}