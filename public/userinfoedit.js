function userinfocheck() {
  console.log(document.getElementById("biog").innerHTML.length)
if (document.getElementById("biog").innerHTML.length > 150) {
 event.preventDefault()
 alert("Biography must be a maximum of 150 characters") 
} 
}
document.getElementById("submit").addEventListener("click", userinfocheck())

// NO ONE DELETES THIS SCRIPT LEAVE THIS SCRIPT UNCHANGED