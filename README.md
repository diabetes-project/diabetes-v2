# 📘 DiabCost Predictor  
### **Hệ thống dự báo chi phí điều trị đái tháo đường sử dụng Machine Learning**

[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)]()  
[![Flask](https://img.shields.io/badge/Backend-Flask-blue)]()  
[![XGBoost](https://img.shields.io/badge/Model-XGBoost-green)]()  
[![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC)]()  

---

## 🎯 Giới thiệu

**DiabCost Predictor** là ứng dụng web triển khai mô hình machine learning nhằm dự báo **chi phí điều trị một đợt khám/điều trị của người bệnh đái tháo đường**, dựa trên các thông tin hành chính – lâm sàng thường có trong hồ sơ BHYT.

Hệ thống này được phát triển như một phần của **luận án/đề tài nghiên cứu** trong lĩnh vực **quản lý y tế / y tế công cộng / khoa học dữ liệu y tế**.

Ứng dụng hỗ trợ:

- Ước tính chi phí điều trị theo từng cá nhân  
- Phân tích ảnh hưởng của các yếu tố như biến chứng, bệnh kèm, tuyến điều trị…  
- Hỗ trợ hoạch định chính sách chi trả BHYT  
- Tối ưu phân bổ nguồn lực trong điều trị đái tháo đường

---

## 🧠 Mô hình Machine Learning

Mô hình chính sử dụng:

### ✔ **XGBoost Regressor**
- Objective: `reg:gamma` (phân phối lệch phải, phù hợp dữ liệu chi phí y tế)  
- Hyperparameters được tinh chỉnh bằng `RandomizedSearchCV`  
- Sử dụng **Pipeline sklearn** gồm:
  - `ColumnTransformer`  
  - `StandardScaler` cho biến số  
  - `OneHotEncoder` cho biến phân loại  
  - XGBoost để dự báo đầu ra  

Mô hình được huấn luyện trên dataset BHYT sau tiền xử lý với **hơn 14 triệu lượt điều trị**.

---

## 🌐 Công nghệ

### Backend
- Python 3
- Flask
- Scikit-learn
- XGBoost
- Pandas, NumPy
- Joblib (lưu mô hình)

### Frontend
- TailwindCSS
- Feathers Icons
- HTML components (header/footer)

---

## 🖥️ Demo giao diện

UI được thiết kế theo phong cách **glassmorphism**, đơn giản – trực quan – dễ dùng cho nhân viên y tế:

- Form nhập liệu 16 trường thông tin hành chính/lâm sàng  
- Tự động xử lý và chuẩn hóa dữ liệu đầu vào  
- Kết quả được hiển thị ngay trong cùng trang  

---

## 🚀 Hướng dẫn cài đặt

### 1️⃣ Clone dự án

```bash
git clone https://github.com/<username>/diabcost-predictor.git
cd diabcost-predictor
```
### 2️⃣ Cài đặt thư viện
```bash
pip install -r requirements.txt
```
### 3️⃣ Chạy ứng dụng
```bash
python app.py
```
Ứng dụng chạy tại: http://127.0.0.1:5000/
### 📁 Cấu trúc thư mục
```csharp
├── app.py                 # Flask backend
├── trained_pipeline_xgb.pkl   # Pipeline ML đã huấn luyện
├── templates/
│   └── index.html         # Giao diện chính
├── static/
│   ├── logo.png
│   └── style.css
├── components/
│   ├── header.js
│   └── footer.js
├── README.md
└── requirements.txt
```
## 🧑‍⚕️ Ý nghĩa thực tiễn

Kết quả mô hình có thể hỗ trợ:

✔ Ước tính trước chi phí cho từng bệnh nhân
✔ Hoạch định ngân sách chi trả BHYT
✔ Xây dựng chính sách điều trị và phân tuyến
✔ Hỗ trợ nghiên cứu kinh tế y tế
✔ Dự báo xu hướng chi phí theo mức độ bệnh & biến chứng
## ⚠️ Lưu ý quan trọng
Đây không phải công cụ chẩn đoán lâm sàng.
Mục đích sử dụng cho nghiên cứu khoa học, phân tích, quản lý y tế.
Kết quả dự báo phụ thuộc vào chất lượng dữ liệu đầu vào.
## 📚 Trích dẫn (nếu dùng mô hình)
Nếu bạn sử dụng công cụ hoặc mã nguồn trong nghiên cứu, vui lòng trích dẫn:
```bash
<Your Name> (2025). DiabCost Predictor: Machine Learning Model for Predicting Diabetes Treatment Cost.
https://github.com/<username>/diabcost-predictor
```
## 🤝 Đóng góp
Mọi đóng góp nhằm cải thiện mô hình, giao diện hoặc mở rộng tính năng luôn được chào đón!

## 📩 Liên hệ

Tác giả: <Nguyễn Linh Việt>

Email: <Email>

GitHub: https://github.com/diabetes-project/diabetes
