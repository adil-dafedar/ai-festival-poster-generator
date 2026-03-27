const axios = require("axios");

async function test() {
  try {
    const response = await axios.post("http://localhost:5000/generate-image", {
      businessName: "Sweet Treats",
      businessType: "Bakery",
      festival: "Diwali",
      prompt: "highlight discount"
    });

    console.log(response.data);
    console.log("Open this URL to see your image:", response.data.imageUrl);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

test();