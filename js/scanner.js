// ==========================================
// QrHacker Scanner
// scanner.js
// ==========================================

// Toast Notification
const toast = document.getElementById("toast");

// Result Card
const resultCard = document.querySelector(".result-card");

// Upload
const imageInput = document.getElementById("image-upload");

// Result
const resultText = document.getElementById("result-text");

// Camera Buttons
const startCameraBtn = document.getElementById("start-camera");
const scanAgainBtn = document.getElementById("scan-again-btn");

// Action Buttons
const copyBtn = document.getElementById("copy-btn");
const openBtn = document.getElementById("open-btn");

// Variables
let scannedData = "";

let html5QrCode = null;

let cameraRunning = false;

// ==========================================
// Image Upload Scanner
// ==========================================

imageInput.addEventListener("change", scanImage);

async function scanImage(event) {

    const file = event.target.files[0];

    if (!file) return;

    const image = new Image();

    image.src = URL.createObjectURL(file);

    image.onload = () => {

        const canvas = document.createElement("canvas");

        const ctx = canvas.getContext("2d");

        canvas.width = image.width;

        canvas.height = image.height;

        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(

            0,
            0,
            canvas.width,
            canvas.height

        );

        const code = jsQR(

            imageData.data,
            canvas.width,
            canvas.height

        );

        if (code) {

            scannedData = code.data;

            resultText.textContent = scannedData;

            copyBtn.disabled = false;

            scanAgainBtn.disabled = false;

            if (scannedData.startsWith("http")) {

                openBtn.disabled = false;

            } else {

                openBtn.disabled = true;

            }

            showSuccess();

        } else {

            resultText.textContent = "❌ No QR Code Found";

            copyBtn.disabled = true;

            openBtn.disabled = true;

            scanAgainBtn.disabled = true;

        }

    };

}

// ==========================================
// Camera Scanner
// ==========================================

startCameraBtn.addEventListener("click", startCamera);

async function startCamera() {

    if (cameraRunning) return;

    html5QrCode = new Html5Qrcode("reader");

    try {

        await html5QrCode.start(

            {
                facingMode: "environment"
            },

            {
                fps: 10,

                qrbox: {

                    width: 250,

                    height: 250

                }

            },

            onScanSuccess,

            onScanFailure

        );

        cameraRunning = true;

    }

    catch (err) {

        alert(

            "Unable to access camera.\n\nIf you're using a desktop without a webcam, this is expected."

        );

        console.error(err);

    }

}

async function onScanSuccess(decodedText) {

    scannedData = decodedText;

    resultText.textContent = decodedText;

    copyBtn.disabled = false;

    scanAgainBtn.disabled = false;

    if (decodedText.startsWith("http")) {

        openBtn.disabled = false;

    } else {

        openBtn.disabled = true;

    }

    showSuccess();

    if (html5QrCode) {

        await html5QrCode.stop();

        cameraRunning = false;

    }

}

function onScanFailure(error) {

    // Continue scanning

}

// ==========================================
// Copy Result
// ==========================================

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(scannedData);

    toast.textContent = "✅ Copied Successfully";

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

});

// ==========================================
// Open Link
// ==========================================

openBtn.addEventListener("click", () => {

    window.open(scannedData, "_blank");

});

// ==========================================
// Success Animation
// ==========================================

function showSuccess() {

    toast.textContent = "✅ QR Code Detected Successfully";

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

    resultCard.classList.add("success");

    setTimeout(() => {

        resultCard.classList.remove("success");

    }, 1200);

    resultCard.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}

// ==========================================
// Scan Again
// ==========================================

scanAgainBtn.addEventListener("click", () => {

    scannedData = "";

    resultText.textContent = "Waiting for QR...";

    copyBtn.disabled = true;

    openBtn.disabled = true;

    scanAgainBtn.disabled = true;

    imageInput.value = "";

    const scannerSection = document.querySelector(".scanner-section");

    if (scannerSection) {

        scannerSection.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    startCamera();

});