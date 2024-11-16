"# ocrprojectbyalphacoderhackathon-112024" 
"# ocrprojectbyalphacoderhackathon-112024" 
---
# OCR Smart Project  

An **OCR (Optical Character Recognition)** application designed to read energy meter displays, extract **kWh values**, calculate bills, and maintain a bill history. This project provides a user-friendly interface for efficient energy data management.  

---  

## Features  

- **Image Upload and Capture**: Upload images from your device or capture directly using your camera.  
- **Text Extraction**: Extracts **kWh values** from energy meter images using OCR techniques.  
- **Bill Calculation**: Automatically calculates bills based on extracted **kWh values** (₹5 per kWh).  
- **Bill History**: Logs and displays previously calculated bills along with their dates and times.  
- **Interactive Frontend**: A responsive interface for smooth user interaction and real-time updates.  

---  

## Project Structure  

```
OCR_METER_PROJECT/  
├── app/
|    |__project/
|        |_index.html
|        |_style.css
|        |_scripts.js
│   ├── __init__.py  
│   ├── detectionmodel.py  
│   ├── routes.py  
│   ├── utils.py  
├── uploads/  
│   ├── image.jpg  
│   ├── OlP.jpg  
├── .gitignore  
├── LICENSE  
├── output_image.jpg  
├── README.md  
├── requirements.txt  
└── run.py  
```  

---  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/Dosuru-Deekshitha/ocrprojectbyalphacoderhackathon-112024
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd ocr-smart-project  
   ```  
3. Install dependencies:  
   ```bash  
   pip install -r requirements.txt  
   ```  
4. Start the application:  
   ```bash  
   python run.py  
   ```  

---  

## Usage  

1. Open the application in your browser at `http://127.0.0.1:5000`.  
2. Use the **Upload Image** or **Capture Image** button to input an energy meter image.  
3. View the extracted **kWh values** and the calculated bill.  
4. Click on **Bill History** to see previous bills with timestamps.  

---  

## API Endpoints  

- **`POST /detect`**: Accepts an energy meter image and returns the extracted **kWh values**.  
- **`GET /history`**: Retrieves the bill history with timestamps.  

---  

## Technologies Used  

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Python, Flask  
- **OCR Model**: TensorFlow-based pretrained model for text recognition  
- **Other Tools**: EasyOCR

---  

## License  

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---  

## Contributing  

Contributions are welcome! To contribute:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m 'Add a new feature'  
   ```  
4. Push to the branch:  
   ```bash  
   git push origin feature-name  
   ```  
5. Open a pull request.  

---  

## Future Enhancements  

- Support for additional meter types.  
- Improved OCR accuracy under various conditions.  
- Integration with cloud platforms for centralized data storage and analysis.  

---  
