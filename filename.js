window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}


function alertSubFunc(event) {
    const emailValue = document.getElementById("email").value;
    alert("Subscriber \"added\": " + emailValue);
}