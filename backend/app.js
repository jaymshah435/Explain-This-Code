const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Middleware setup
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// POST endpoint to explain code using OpenRouter (OpenAI proxy)
app.post("/api/explain", async (req, res) => {
  const { code } = req.body;

  // Prompt sent to AI model
  const prompt = `Explain the following code in simple terms for a beginner:\n\n${code}`;

  try {
    // Send request to OpenRouter using GPT model
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Extract explanation from response
    const explanation = response.data.choices[0].message.content;
    res.json({ explanation });
  } catch (err) {
    console.error("API error:", err.message);
    res.status(500).json({ explanation: "Failed to explain code." });
  }
});

module.exports = app; // Export app for use in server.js