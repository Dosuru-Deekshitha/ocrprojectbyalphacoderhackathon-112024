import easyocr
import cv2
import os
import re

class DetectionModel:
    def __init__(self, language='en'):
        self.ocr_reader = easyocr.Reader([language])  # Initialize the EasyOCR reader with the given language

    def extract_kwh_values(self, image_path):
        """Extract kWh values from the provided image path."""
        # Ensure the image exists before proceeding
        if not os.path.exists(image_path):
            print("Error: Image path does not exist!")
            return []

        # Load the image for processing
        image = cv2.imread(image_path)

        # Ensure the image was loaded correctly
        if image is None:
            print("Error: Could not load the image.")
            return []

        # Use EasyOCR to recognize text in the image
        ocr_result = self.ocr_reader.readtext(image)

        # Initialize a list to store kWh values
        kwh_values = []

        # Extract digits from the recognized text
        for detection in ocr_result:
            bbox, text, confidence = detection
            # Use regex to find all digits in the text
            digits = re.findall(r'\d+', text)
            if digits:
                # Convert found digits to kWh format
                for digit in digits:
                    kwh_values.append(f"{digit} kWh")

        return kwh_values

