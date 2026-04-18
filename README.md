#  Job Search Web Application

A responsive job search web app built with HTML, CSS, and JavaScript that fetches live job listings using the [Adzuna API](https://developer.adzuna.com/).

---

##  Features

- Search any job keyword and get live results
- Displays company name, job title, salary, and location for each listing
- Input validation with user-friendly error messages
- Clean, styled UI with colour-coded job cards
- Responsive design

---

##  Tech Stack

- **HTML**
- **Internal CSS**
- **JavaScript**
- **Adzuna Jobs API**

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-Aucire/A-Job-search-web-application.git
```

##  Project Structure

```
job-search-app/
├── index.html        # Main HTML file     
├── script.js         # JavaScript logic & API calls
├── .env              # Your secret API keys (not pushed to GitHub)
├── .env.example      # Template showing required env variables
└── .gitignore        # Ignores .env and node_modules
```

---

##  How It Works

1. User types a job keyword into the search input
2. On clicking the search button, a `GET` request is sent to the Adzuna API
3. The API returns a list of matching job vacancies from the UK job market
4. Results are dynamically rendered on the page showing company, title, salary, and location

---

##  Known Limitations

- Currently searches UK jobs only (`/jobs/gb/`)
- Returns 10 results per search
- Salary data may not be available for all listings

---

##  Acknowledgements

- Job data provided by [Adzuna](https://www.adzuna.co.uk/)

---

##  License

This project is open source and available under the [MIT License](LICENSE).