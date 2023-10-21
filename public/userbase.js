/* Constants defined:
userID [null|string] : User ID
loggedIn [boolean] : True if the user is logged in
hasMod [boolean] : true if user is a mod
certified [boolean] : true if the user is certified
*/

var badgeTab = document.getElementById("badges") // Get badge span
if(libc) {
   document.getElementById("avatar").setAttribute("class", "queue-img rounded-circle libc")
    badgeTab.innerHTML += '<img src="https://cdn.discordapp.com/emojis/637971528792670218.png" title="Library Creator Badge" width="50px" height="50px">'
  
}
//Certified badge

if(certified) {
    document.getElementById("avatar").setAttribute("class", "queue-img rounded-circle verified")
    badgeTab.innerHTML += '<img src="https://cdn.discordapp.com/emojis/507958292790902795.png" title="Certified Developer Badge" width="50px" height="50px">'
}
// Mod badge
if (hasMod) {
  document.getElementById("avatar").setAttribute("class", "queue-img rounded-circle moderator")
  badgeTab.innerHTML += '<img src="https://cdn.discordapp.com/emojis/507668351368036382.png" title="Website Moderator Badge" width="50px" height="50px">'
}
//Admin badge
if (hasAdmin) {
  document.getElementById("avatar").setAttribute("class", "queue-img rounded-circle admin")
  badgeTab.innerHTML += '<img src="https://cdn.discordapp.com/emojis/507680644416012299.png" title="Admin Badge" width="50px" height="50px">'
}

