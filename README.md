# 🎨 AI Festival Poster Generator

An AI-powered tool that helps small business owners create **unique, festival-themed marketing images in seconds** — without any design skills.

## 🚨 Problem

Small business owners (grocery stores, salons, bakeries, local shops) rely heavily on **festival-based marketing** to drive sales.

But they face 3 key problems:

* ❌ No design skills
* ❌ No time to create creatives
* ❌ Repetitive, generic templates (e.g. Canva fatigue)

As a result, their marketing looks **uninspired or inconsistent**, especially during high-opportunity periods like Diwali, Eid, or New Year.


## 🎯 Users

* Local shopkeepers
* Small business owners
* Non-technical users using WhatsApp / Instagram for marketing

## 💡 Solution

This project enables users to:

1. Enter basic business details
2. Select a festival
3. Generate a **unique AI-designed poster instantly**

No templates. No design tools. No learning curve.


## ✨ Key Features

* 🎨 AI-generated festival posters (unique per request)
* 🏪 Business-aware prompts (name, type, festival)
* ⚡ Instant generation (frontend-based)
* 📥 Download posters
* 📤 Share directly (Web Share API)
* 🔁 Fallback system (placeholder if API fails)

### 🧪 MVP / Prototype Development

This project was built as a rapid MVP to validate a simple but powerful idea:

Can small business owners generate useful festival marketing content instantly using AI?

### ⚡ Approach
Built a frontend-first prototype using React
Avoided backend complexity to reduce setup time
Used Puter.js for instant AI image generation (no infra required)
Focused on speed of iteration over completeness

### Trade-offs

* ❌ Limited by API credits (Puter free tier)
* ❌ No persistent storage yet
* ❌ No branding memory (future feature)

But this allowed rapid MVP delivery.

## 🏗️ Tech Stack

* Frontend: React (Vite)
* AI: Puter.js (image generation models like `gemini-2.5-flash-image-preview`)
* Styling: Basic CSS

## ⚙️ How It Works

1. User inputs:

   * Business name
   * Business type
   * Festival
   * Optional prompt

2. App builds a structured prompt

3. Calls:

   ```js
   puter.ai.txt2img(prompt)
   ```

4. Displays generated image

5. User can download or share

## 🚀 Running Locally

```bash
git clone <https://github.com/adil-dafedar/ai-festival-poster-generator.git>
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```


## 📸 Demo Flow

1. Enter:

<img width="721" height="365" alt="image" src="https://github.com/user-attachments/assets/42aac304-45db-4ad7-8ec0-7452be2e8527" />

   * “Paras Electronics(My Dad's Shop)”
   * “Electronics Devices , sell and repair”
   * “Independence Day”

3. Click **Generate**

4. Get a unique festive poster



<img width="696" height="692" alt="image" src="https://github.com/user-attachments/assets/edd5c358-0960-4bee-9946-9e7392874577" />

Another Examples :


<img width="711" height="706" alt="image" src="https://github.com/user-attachments/assets/0f876020-2cda-4811-84f0-cbd444d0bd76" />

<img width="378" height="622" alt="image" src="https://github.com/user-attachments/assets/0ab4b1ed-a701-4447-9f57-8e3de27be56d" />

<img width="673" height="618" alt="image" src="https://github.com/user-attachments/assets/7d74412b-00b5-4933-a29d-b20fbe4a6482" />


## 📈 Future Improvements

* 🌐 Multi-language support (Hindi, Marathi, etc.)
* 📅 Festival auto-suggestions
* 📱 WhatsApp Business integration
* 🎥 AI video ads (Reels)
* 🔐 User accounts + saved designs

---

## ⭐ If you like this project

Star ⭐ the repo or share feedback!
