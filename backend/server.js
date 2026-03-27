const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Main API
app.post("/generate-image", async (req, res) => {
  const { businessName, businessType, festival, prompt } = req.body;

  try {
    const finalPrompt = `
Create a unique, vibrant festival poster.

Business Name: ${businessName}
Business Type: ${businessType}
Festival: ${festival}

Extra: ${prompt || "Make it attractive and modern"}

Style: Indian festive, colorful, high quality, promotional poster.
`;

    console.log("Sending prompt to Imagen:", finalPrompt);

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-4-generate:generateImage?key=${process.env.GEMINI_API_KEY}`,
      {
        prompt: finalPrompt,
        size: "1024x1024"
      }
    );

    console.log("Raw response from Imagen:", JSON.stringify(response.data, null, 2));

    const imageUrl = response.data?.images?.[0]?.url || null;

    if (!imageUrl) {
      return res.status(500).json({ success: false, error: "No image returned" });
    }

    res.json({
      success: true,
      promptUsed: finalPrompt,
      imageUrl
    });

  } catch (error) {
    console.error("Error from Imagen request:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});