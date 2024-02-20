// script.js
function generateResult() {
    var nick = document.getElementById('nick').value;
    var obserwatorzy = document.getElementById('obserwatorzy').value;
    var like = document.getElementById('like').value;

    var resultMessage = "Użytkownik " + nick + " dostał " + like + " i tyle " + obserwatorzy;

    // Display the result as a window alert
    alert(resultMessage);
}
