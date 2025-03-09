# Text Enhancement API 🚀

A simple **Node.js** and **Express**-based API that enhances text using Google's **Gemini API**. It can modify text to be **shortened, lengthened, formal, or casual**, and improve clarity.

---

## 🛠 Features  
✔ **Enhance** text for better readability  
✔ **Modify** text (shorten, expand, formalize, casual)  
✔ Uses **Google Gemini API** for AI-powered improvements  
✔ Simple **REST API** built with **Node.js, Express & Axios**  

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/shagun122/Text_Enhancement.git
cd Text_Enhancement
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env** file in the project root and add:  
```
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
```

### **4️⃣ Run the Server**
```sh
npm start
```
API will now run on **http://localhost:5000** 

---

## 🔗 API Endpoints  

### **1️⃣ Enhance Text**
> Improves the readability and clarity of the text.  
**Endpoint:**  
```http
POST /api/text/enhance
```
**Body (JSON):**
```json
{
  "text": "Your input text here"
}
```
**Response (JSON):**
```json
{
  "enhancedText": "Improved version of the input text"
}
```

### **2️⃣ Modify Text**
> Modify text by shortening, expanding, or changing tone.  
**Endpoint:**  
```http
POST /api/text/modify
```
**Body (JSON):**
```json
{
  "text": "Your input text here",
  "modification": "shorten | lengthen | formal | casual"
}
```
**Response (JSON):**
```json
{
  "modifiedText": "Modified text based on request"
}
```

---

## 📦 Project Structure  
```
📂 text_enhancement/
 ┣ 📂 controllers/          # Route handlers
 ┃ ┣ 📜 textController.js   # Handles text enhancement/modification
 ┣ 📂 routes/               # API routes
 ┃ ┣ 📜 textRoutes.js       # Defines API endpoints
 ┣ 📂 services/             # Services (external API calls)
 ┃ ┣ 📜 geminiService.js    # Handles requests to Gemini API
 ┣ 📜 .gitignore            # Ignored files
 ┣ 📜 package.json          # Project dependencies
 ┣ 📜 postman_collection.json # Postman API test collection
 ┣ 📜 index.js              # Main server file
 ┗ 📜 README.md             # Project documentation
```

---

## 🛠 Technologies Used  
- **Node.js** - Backend runtime  
- **Express.js** - API framework  
- **Axios** - HTTP requests  
- **Google Gemini API** - AI-powered text processing  

---

## 📌 TODOs / Future Enhancements  
✅ Add authentication (API Key or OAuth)  
✅ Improve response formatting  
✅ Add frontend UI for text enhancement  

---

## 🤝 Contributing  
Want to improve this project? Fork it, create a branch, and submit a **pull request**! 🚀  

---

## 📜 License  
This project is **open-source** and licensed under the **MIT License**.  

---

