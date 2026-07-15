# Premium QA Engineer Portfolio

A GitHub-ready and Vercel-ready single-page QA Engineer portfolio built with clean HTML, CSS and JavaScript.

## Folder Structure

```text
qa-portfolio-github-ready/
├── assets/
│   └── resume.pdf
├── index.html
├── styles.css
├── script.js
├── README.md
└── vercel.json
```

## Update Friend's Information

Open `script.js` and edit only the `PORTFOLIO_DATA` object at the top.

You can update:

- Name and QA title
- Email, phone, location and availability
- LinkedIn, GitHub and WhatsApp links
- About content and QA philosophy
- Skills
- Experience
- Projects
- QA workflow
- Bug reports
- Test cases
- Certificates

## Replace Resume

Replace:

```text
assets/resume.pdf
```

with the actual resume. Keep the filename exactly `resume.pdf`.

## Add Profile Photo (Optional)

1. Put the photo inside `assets`, for example:

```text
assets/profile.jpg
```

2. In `script.js`, update:

```js
profileImage: "assets/profile.jpg"
```

If it is left empty, the portfolio automatically shows initials.

## Run Locally

No installation is required.

Open `index.html` directly in Chrome, or use VS Code Live Server.

## Push to GitHub

```bash
git init
git add .
git commit -m "Add QA Engineer portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. Open Vercel.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Keep the framework preset as **Other**.
6. Click **Deploy**.

There is no build command and no output directory required.

## Important

The contact form opens the visitor's default email application using `mailto:`. It does not need a backend.

External CDNs are used for:

- Lucide icons
- GSAP
- Lenis smooth scrolling
- Google Fonts

The portfolio still contains the complete layout and content code in the five main source files.
