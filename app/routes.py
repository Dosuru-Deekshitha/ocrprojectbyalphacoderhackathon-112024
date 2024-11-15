from flask import Blueprint, jsonify, request
from .detectionmodel import DetectionModel

# Create a Blueprint instance
bp = Blueprint('routes', __name__)

# Define the route for the home page
@bp.route('/')
def home():
    return jsonify(message="Welcome to the OCR detection API")

# Define a detection route, assuming you want to use the DetectionModel here
@bp.route('/detect', methods=['POST'])
def detect():
    model = DetectionModel(language='en')  # Initialize the detection model
    
    if 'file' not in request.files:
        return jsonify(error="No file part in the request"), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify(error="No selected file"), 400

    # Save the uploaded file to 'uploads' folder
    file_path = f'uploads/{file.filename}'
    file.save(file_path)

    # Extract kWh values from the uploaded image
    kwh_values = model.extract_kwh_values(file_path)
    return jsonify(kwh_values=kwh_values)
