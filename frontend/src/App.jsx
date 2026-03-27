import { useState } from "react";
import "./styles.css";

function App() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [festival, setFestival] = useState("");
  const [prompt, setPrompt] = useState("");
  const [imageElement, setImageElement] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      const fullPrompt = `
Business Name: ${businessName}
Business Type: ${businessType}
Festival: ${festival}
Extra: ${prompt || "Make it colorful and festive"}
`;

      // Use Puter.js
      const img = await puter.ai.txt2img(fullPrompt, {
        model: "gemini-2.5-flash-image-preview",
      });

      setImageElement(img);
    } catch (err) {
      console.error(err);
      alert("Failed to generate image. Using placeholder.");
      const img = document.createElement("img");
      img.src = `https://picsum.photos/1024?random=${Date.now()}`;
      setImageElement(img);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Festival Poster Generator</h1>
      <input
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Business Type"
        value={businessType}
        onChange={(e) => setBusinessType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Festival"
        value={festival}
        onChange={(e) => setFestival(e.target.value)}
      />
      <input
        type="text"
        placeholder="Optional Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </button>

      <div className="image-container">
        {imageElement && <div ref={(el) => el && el.appendChild(imageElement)} />}
      </div>
            {imageElement && (
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = imageElement.src; // Get the image src
            link.download = `${businessName || "festival_poster"}.png`;
            link.click();
          }}
        >
          Download Image
        </button>
        )}
              {imageElement && (
        <button
          onClick={async () => {
            if (navigator.share) {
              try {
                await navigator.share({
                  title: `${businessName || "Festival Poster"}`,
                  text: `Check out this festive poster!`,
                  files: [
                    new File(
                      [await (await fetch(imageElement.src)).blob()],
                      `${businessName || "festival_poster"}.png`,
                      { type: "image/png" }
                    )
                  ],
                });
              } catch (err) {
                alert("Sharing failed: " + err.message);
              }
            } else {
              alert("Web Share API not supported in this browser.");
            }
          }}
        >
          Share
        </button>
      )}
    </div>
  );
}

export default App;