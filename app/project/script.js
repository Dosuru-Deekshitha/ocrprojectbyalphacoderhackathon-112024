// Handle File Upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append("file", file);

        fetch('http://127.0.0.1:5000/detect', { // Update to your Flask backend URL
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                displayResults(data.kwh_values || ["No kWh values found"]);
            })
            .catch(err => {
                console.error('Error uploading file:', err);
                displayResults(["Error processing the image."]);
            });
    }
}

// Handle Camera Capture
let videoStream;

function captureImage() {
    const cameraSection = document.getElementById('camera-section');
    const video = document.getElementById('camera-preview');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoStream = stream;
            video.srcObject = stream;
            cameraSection.classList.remove('hidden');
        })
        .catch(err => console.error('Error accessing camera:', err));
}

function takePhoto() {
    const video = document.getElementById('camera-preview');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
        const formData = new FormData();
        formData.append("file", blob, "capture.jpg");

        fetch('http://127.0.0.1:5000/detect', { // Update to your Flask backend URL
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                displayResults(data.kwh_values || ["No kWh values found"]);
            })
            .catch(err => {
                console.error('Error processing captured image:', err);
                displayResults(["Error processing the image."]);
            });
    });

    videoStream.getTracks().forEach(track => track.stop());
    document.getElementById('camera-section').classList.add('hidden');
}

// Display Results
function displayResults(results) {
    const resultsText = document.getElementById('results-text');
    resultsText.textContent = results.join(', ');
}
