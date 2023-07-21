
function Generate() {

    var password=document.getElementById("input");

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   console.log(randomNumber);
   password += chars.substring(randomNumber, randomNumber +1);
   console.log(password)
  }
        document.getElementById("input").value = password;
        document.getElementById("input").style.color= "black";
 }

 function copyPassword() {
    var copyText = document.getElementById("input");
    copyText.select();
  
    // Use the Clipboard API to write the selected text to the clipboard
    navigator.clipboard.writeText(copyText.value)
      .then(() => {
        console.log("Text copied to clipboard successfully!");
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
      document.getElementById("text").style.display="block";
  }
  
    