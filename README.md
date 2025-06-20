# 🧠 Explain This Code

A lightweight Chrome extension paired with an Express.js backend that lets users paste or highlight code snippets and receive beginner-friendly, AI-generated explanations using OpenRouter’s GPT-3.5 model. Perfect for learners and developers seeking fast insights.

---

## 🎥 Demo

Screenshots available in the `demo` folder.

---

## ✨ Features

- Paste or highlight code and get plain-English explanations  
- AI responses tailored for beginners using GPT-3.5  
- Chrome extension interface with clean and simple UI  
- Express.js API with prompt customization and error handling  
- Quick local setup – no database required

---

## 🛠 Tech Stack

- **Frontend:** HTML, JavaScript (Vanilla), Chrome Extension APIs  
- **Backend:** Node.js, Express.js, Axios  
- **AI Provider:** OpenRouter (GPT-3.5-Turbo)  
- **Other Tools:** dotenv, cors

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```

2. Create a `.env` file with your OpenRouter API key:
    ```env
    PORT=3003
    API_KEY=your_openrouter_api_key
    ```

3. Install dependencies and start the server:
    ```bash
    npm install
    node server.js
    ```

> Your backend will run at: `http://localhost:3003`

---

### 🧩 Chrome Extension Setup

1. Open Google Chrome and navigate to:
    ```
    chrome://extensions
    ```

2. Enable **Developer Mode** (top-right corner)

3. Click **Load Unpacked** and select the `extension/` directory

4. Click the extension icon in your toolbar and paste code to test

---

## 🚀 Usage

1. Ensure the backend is running on `localhost:3003`  
2. Open the Chrome extension  
3. Paste any code snippet into the text box  
4. Click **Explain** to get a beginner-friendly explanation  
5. View the result below in plain text

---

## 📌 Notes

- Requires an active OpenRouter account and API key  
- The extension communicates locally with your Express.js server  
- Responses are generated using GPT-3.5-Turbo via OpenRouter  
- Great for educational use cases or on-the-fly debugging

---

## 📄 License

MIT License

---

## 🤝 Contribute

Feel free to open issues, suggest features, or submit pull requests!
