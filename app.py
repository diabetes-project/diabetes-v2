from flask import Flask, request, render_template
import pandas as pd
import joblib
import numpy as np

app = Flask(__name__)

# Load pipeline
pipeline = joblib.load("trained_pipeline_xgb.pkl")

# Trang chủ
@app.route('/')
def home():
    return render_template('index.html')

# API predict
@app.route('/predict', methods=['POST'])
@app.route('/predict', methods=['POST'])
def predict():
    try:
        form = request.form.to_dict()

        # Replace '3+' with '≥3' cho cột ordinal
        for k in ["Số biến chứng", "Điểm biến chứng"]:
            if k in form and form[k] == "3+":
                form[k] = "≥3"

        # Chuyển dataframe
        df = pd.DataFrame([form])

        # Dự đoán
        pred = pipeline.predict(df)

        # Format kết quả
        predicted_cost = f"{int(np.exp(pred[0])):,}".replace(",", ".") + " VND"

        return render_template(
            "index.html",
            prediction_cost=f"Chi phí dự báo: {predicted_cost}"
        )

    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=1003)
