// ==========================================
// QrHacker QR Generator
// ==========================================

// Buttons
const urlBtn = document.getElementById("url-btn");
const textBtn = document.getElementById("text-btn");
const toast = document.getElementById("toast");
const urlInput = document.getElementById("url-input");
const textInput = document.getElementById("text-input");
const previewCard = document.querySelector(".preview-card");
const previewSection = document.querySelector(".preview-section");
const websiteInput = document.getElementById("website-url");
const plainText = document.getElementById("plain-text");
const downloadPngBtn = document.getElementById("download-png");
const downloadJpgBtn = document.getElementById("download-jpg");
const generateAgainBtn = document.getElementById("generate-again");
const generateBtn = document.getElementById("generate-btn");
const qrPreview = document.getElementById("qr-preview");

let qrCode = null;

// ================================
// Switch Between URL & Text
// ================================

urlBtn.addEventListener("click", () => {

    urlBtn.classList.add("active");
    textBtn.classList.remove("active");

    urlInput.style.display = "block";
    textInput.style.display = "none";

});

textBtn.addEventListener("click", () => {

    textBtn.classList.add("active");
    urlBtn.classList.remove("active");

    urlInput.style.display = "none";
    textInput.style.display = "block";

});

// ================================
// Generate QR
// ================================

generateBtn.addEventListener("click", () => {

    let value = "";

    if (urlBtn.classList.contains("active")) {

        value = websiteInput.value.trim();

    } else {

        value = plainText.value.trim();

    }

    if (value === "") {

        alert("Please enter some data.");

        return;

    }

    qrPreview.innerHTML = "";

    qrCode = new QRCode(qrPreview, {

        text: value,

        width: 250,

        height: 250,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H
       

    });
      showToast();
      downloadPngBtn.disabled = false;

downloadJpgBtn.disabled = false;

generateAgainBtn.disabled = false;
});
function showToast(){

    toast.classList.add("show");

    // Highlight the QR preview
    previewCard.classList.add("success");

    // Smooth scroll to QR Preview
    previewSection.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

    setTimeout(() => {

        toast.classList.remove("show");

        previewCard.classList.remove("success");

    },3000);

}
// ==========================================
// Download PNG
// ==========================================

downloadPngBtn.addEventListener("click", () => {

    const qrImage = qrPreview.querySelector("img");

    if (!qrImage) {

        alert("Please generate a QR Code first.");

        return;

    }

    const link = document.createElement("a");

    link.href = qrImage.src;

    link.download = "QrHacker-QR.png";

    link.click();

});
// ==========================================
// Download JPG
// ==========================================

downloadJpgBtn.addEventListener("click", () => {

    const qrImage = qrPreview.querySelector("img");

    if (!qrImage) {

       if(urlBtn.classList.contains("active")){

    if(value===""){

        alert("Please enter a website URL.");

        return;

    }

    try{

        new URL(value);

    }

    catch{

        alert("Please enter a valid website URL.");

        return;

    }

}
else{

    if(value===""){

        alert("Please enter some text.");

        return;

    }

}

        return;

    }

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    const image = new Image();

    image.onload = () => {

        canvas.width = image.width;

        canvas.height = image.height;

        ctx.fillStyle = "#FFFFFF";

        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(image, 0, 0);

        const jpg = canvas.toDataURL("image/jpeg");

        const link = document.createElement("a");

        link.href = jpg;

        link.download = "QrHacker-QR.jpg";

        link.click();

    };

    image.src = qrImage.src;

});
// ==========================================
// Generate Again
// ==========================================

generateAgainBtn.addEventListener("click", () => {

    qrPreview.innerHTML = `

        <div class="placeholder">

            <i class="fa-solid fa-qrcode"></i>

            <p>

                Your generated QR Code
                will appear here.

            </p>

        </div>

    `;

    websiteInput.value="";

plainText.value="";

websiteInput.focus();

urlBtn.classList.add("active");

textBtn.classList.remove("active");

urlInput.style.display="block";

textInput.style.display="none";

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
    downloadPngBtn.disabled = true;

downloadJpgBtn.disabled = true;

generateAgainBtn.disabled = true;

});
document.getElementById("success-message").style.display="block";
document.getElementById("success-message").style.display="none";
generateBtn.innerHTML =

'<i class="fa-solid fa-spinner fa-spin"></i> Generating...';

generateBtn.disabled = true;
setTimeout(()=>{

    // Generate QR here

    generateBtn.innerHTML =

    '<i class="fa-solid fa-bolt"></i> Generate QR';

    generateBtn.disabled=false;

},500);