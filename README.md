# 📊 DataPath SRMU — Data Science Career Roadmap

A practical, student-focused website for SRMU Lucknow students learning data science and targeting their first job.

---

## 🎯 Features

| Feature | Description |
|---|---|
| 🗂️ Project Portfolio Guide | 5 real-world project tutorials with messy data |
| 🎯 Interview Prep Tracker | SQL, Python, Probability & ML questions with answers |
| ⚔️ Toolbox Showdowns | Python vs R, Tableau vs Power BI comparisons |
| 📈 Progress Dashboard | Enter DIT/MidTerm/Lab marks → get CGPA prediction + charts |

---

## 📂 File Structure

```
ds-roadmap/
├── index.html              # Home page
├── css/
│   └── style.css           # Global styles
├── js/
│   └── main.js             # Global JS utilities + localStorage helpers
├── data/
│   └── students.json       # Sample/exported student data
└── pages/
    ├── dashboard.html      # Student progress dashboard (main feature)
    ├── portfolio.html      # Project portfolio guide
    ├── interview.html      # Interview prep tracker
    └── toolbox.html        # Toolbox showdowns
```

---

## 🚀 How to Deploy on GitHub Pages

1. **Fork or upload this repo** to your GitHub account
2. Go to **Settings → Pages**
3. Under "Source", select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/ds-roadmap/`

---

## 📊 Dashboard Features

The **Progress Dashboard** (`pages/dashboard.html`) includes:

### Input Fields
- **Theory Marks:** DIT 1 (Max 20), Mid Term (Max 30), DIT 2 (Max 20), Innovative DIT (Max 10), TA1 (Max 10), TA2 (Max 10)
- **Lab Marks:** Lab 0 through Lab 10 (Max 10 each)

### Outputs
- 📊 **Score Cards** with percentage and progress bars for each component
- 🎯 **CGPA Prediction** with grade (O/A+/A/B+/B/C) and personalized message
- 📌 **Focus Subjects** — sorted by lowest score, highlights urgent areas
- 📈 **4 Interactive Charts:**
  - Marks Overview (Bar Chart)
  - Lab Progress Line Chart (Lab 0–10)
  - Score Radar Chart
  - CGPA Prediction Scenarios Chart
- 👥 **Student Table** — save multiple students, search, edit, delete
- 💾 **Export/Import JSON** — data saved in localStorage + downloadable JSON

---

## 💾 Data Storage

- All student data is stored in **browser localStorage** (no backend needed)
- Use **"Export JSON"** button to download `students_data.json`
- Use **"Import JSON"** to load previously exported data
- The `data/students.json` file is a template/sample file

---

## 🛠 Tech Stack

- Pure HTML, CSS, JavaScript — **no frameworks, no npm**
- [Chart.js](https://www.chartjs.org/) for all charts (loaded via CDN)
- [Google Fonts](https://fonts.google.com/) — Outfit + JetBrains Mono
- Works completely offline after first load

---

## 📱 Responsive

Works on mobile, tablet, and desktop.

---

## 👤 Made By

**Prateek Singh**  
Roll No: 202410101360128  
SRMU Lucknow  
📞 9044298094  
📧 thakurprateeksinghsuryavanshi@gmail.com

---

## 📄 License

Free to use for educational purposes. Credit the author when sharing.
