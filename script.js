
let inputText = document.getElementById("inputText");
let qrBox = document.getElementById("qrBox");
let qrImage = document.getElementById("qrImage");

// Function to Genenrate QR Code 
function generateQR(){
    if(inputText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + inputText.value;
        qrBox.classList.add("show-qr");
    } else if (inputText.value.length <= 0){
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 3000);
    }
}

// Function to clear text input 
function clearInput(){
    inputText.value = "";
    qrBox.classList.remove("show-qr");
}
