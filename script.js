/* =========================================================
   SINGLE CONTENT CONFIG
   Replace the sample details below with your friend's details.
   Almost the entire website content is controlled from here.
   ========================================================= */

const PORTFOLIO_DATA = {
  identity: {
    name: "Nancy Serasiya",
    shortBrand: "QA",
    title: "QA Engineer",
    availability: "Available for QA opportunities",
    location: "Ahmedabad, Gujarat, India",
    email: "nancyserasiya@gmail.com",
    phone: "+91 95864 55438",
    whatsappNumber: "919586455438",
    profileImage: "", // Example: "assets/profile.jpg". Leave empty to show initials.
    website: "https://nancy289.github.io",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/nancy-serasiya",
    github: "https://nancy289.github.io",
    whatsapp: "https://wa.me/919586455438",
  },

  heroTyping: [
    "Manual Testing",
    "Functional Testing",
    "API Testing",
    "Bug Reporting",
    "Regression Testing",
    "User Experience Validation",
  ],

  about: {
    summary:
      "I approach testing as product thinking: understand the user, challenge assumptions, identify risks early and help teams release with confidence.",
    professionalSummary:
      "Aspiring QA Engineer with a strong quality-first mindset and practical knowledge of manual testing, functional testing, regression testing, bug reporting and user experience validation. Focused on learning quickly, documenting issues clearly and helping teams deliver reliable software.",
    careerObjective:
      "To begin and grow my career in Quality Assurance by contributing strong attention to detail, structured testing and clear communication while continuously improving technical and automation skills.",
    philosophy:
      "A strong QA engineer does not only find bugs — they reveal risk, protect users and make the entire team better.",
  },

  stats: [
    { value: "500+", label: "Test Cases Designed", icon: "list-checks" },
    { value: "180+", label: "Defects Documented", icon: "bug" },
    { value: "12+", label: "Product Modules Tested", icon: "blocks" },
    { value: "98%", label: "Regression Coverage", icon: "shield-check" },
  ],

  skills: [
    { name: "Manual Testing", category: "Testing", icon: "mouse-pointer-click", level: 5, description: "Exploratory, scenario-based and user-focused validation." },
    { name: "Functional Testing", category: "Testing", icon: "workflow", level: 5, description: "Validating features against functional requirements." },
    { name: "Regression Testing", category: "Testing", icon: "refresh-cw", level: 5, description: "Protecting existing workflows after every change." },
    { name: "Smoke Testing", category: "Testing", icon: "flame", level: 5, description: "Fast build verification before deeper execution." },
    { name: "Sanity Testing", category: "Testing", icon: "scan-search", level: 4, description: "Focused validation after targeted fixes or changes." },
    { name: "API Testing", category: "API", icon: "braces", level: 4, description: "Status, payload, headers, errors and contract checks." },
    { name: "Postman", category: "API", icon: "send-horizontal", level: 4, description: "Collections, environments and API test execution." },
    { name: "Jira", category: "Tools", icon: "tickets", level: 5, description: "Professional defect reporting and sprint tracking." },
    { name: "Bug Reporting", category: "Testing", icon: "bug", level: 5, description: "Clear evidence, impact, severity and reproduction." },
    { name: "Test Case Writing", category: "Testing", icon: "notebook-pen", level: 5, description: "Reusable positive, negative and edge test coverage." },
    { name: "SQL", category: "Technical", icon: "database", level: 3, description: "Data verification using practical SQL queries." },
    { name: "Git", category: "Technical", icon: "git-branch", level: 3, description: "Source control fundamentals and team workflows." },
    { name: "GitHub", category: "Tools", icon: "github", level: 4, description: "Repositories, issue tracking and collaboration." },
    { name: "Agile", category: "Process", icon: "users-round", level: 4, description: "Sprint planning, standups, reviews and retrospectives." },
    { name: "SDLC", category: "Process", icon: "chart-no-axes-combined", level: 4, description: "Understanding software delivery from idea to support." },
    { name: "STLC", category: "Process", icon: "route", level: 5, description: "Planning, designing, executing and closing testing." },
    { name: "Excel", category: "Tools", icon: "sheet", level: 4, description: "Test data, traceability, reports and analysis." },
  ],

  experience: [
    {
      period: "2025 — Present",
      role: "Quality Assurance Engineer",
      company: "Company Name · Ahmedabad",
      summary:
        "Owned end-to-end manual testing for customer, seller and admin workflows across a responsive marketplace platform.",
      achievements: [
        "Designed reusable test suites covering booking, payments, subscriptions and user management.",
        "Reported high-impact functional, UI and data-consistency defects with clear evidence.",
        "Collaborated with developers to verify fixes and reduce regression risk before release.",
      ],
    },
    {
      period: "2024 — 2025",
      role: "QA Intern / Software Tester",
      company: "Previous Company · India",
      summary:
        "Supported functional validation, test documentation and release verification for web-based products.",
      achievements: [
        "Executed positive, negative, boundary and cross-browser test scenarios.",
        "Maintained structured bug reports and daily testing status updates.",
        "Improved understanding of API validation, SQL checks and Agile teamwork.",
      ],
    },
  ],

  projects: [
    {
      name: "Marketplace Web Application",
      role: "QA Engineer — Web, Seller & Admin",
      description:
        "A multi-role service marketplace with search, packages, bookings, payments, subscriptions, availability and review workflows.",
      responsibilities:
        "Requirement analysis, test planning, scenario design, execution, defect reporting, retesting and regression.",
      testing:
        "Functional, UI/UX, responsive, integration, negative, boundary, role-based and payment-flow testing.",
      tools: ["Jira", "Postman", "Chrome DevTools", "Excel", "SQL"],
      github: "https://github.com/",
      demo: "https://example.com/",
      status: "Case Study",
      accent: "#8b5cf6",
    },
    {
      name: "REST API Quality Suite",
      role: "API Testing Specialist",
      description:
        "Structured API validation for authentication, user management, booking and transaction endpoints.",
      responsibilities:
        "Created collections, environments, request chaining, assertions and negative data scenarios.",
      testing:
        "Status codes, headers, schema, response time, authorization, error handling and data consistency.",
      tools: ["Postman", "JSON", "REST API", "Jira", "SQL"],
      github: "https://github.com/",
      demo: "https://example.com/",
      status: "Completed",
      accent: "#22d3ee",
    },
  ],

  workflow: [
    { name: "Requirement", icon: "file-search", description: "Clarify business goals, user journeys, acceptance criteria, dependencies and hidden assumptions." },
    { name: "Planning", icon: "map", description: "Define scope, risks, test types, environments, priorities, effort and release checkpoints." },
    { name: "Test Cases", icon: "notebook-tabs", description: "Design positive, negative, boundary, integration and edge scenarios with clear expected results." },
    { name: "Execution", icon: "play", description: "Execute systematically, capture evidence, validate data and explore beyond documented paths." },
    { name: "Bug Reporting", icon: "bug", description: "Communicate impact through reproducible steps, severity, evidence and expected versus actual behavior." },
    { name: "Retesting", icon: "rotate-cw", description: "Verify the exact fix, surrounding behavior and data state in the correct environment." },
    { name: "Regression", icon: "shield-check", description: "Protect stable workflows by retesting affected modules and high-risk business journeys." },
    { name: "Release", icon: "rocket", description: "Share quality status, known risks and release confidence with clear stakeholder communication." },
  ],

  bugs: [
    {
      id: "BUG-101",
      title: "Selected booking date changes to previous day",
      severity: "High",
      priority: "High",
      status: "Open",
      steps: [
        "Open the booking page.",
        "Select any future date.",
        "Continue to package confirmation.",
      ],
      expected: "The selected date should remain unchanged throughout the booking flow.",
      actual: "The confirmation page displays one day earlier than the selected date.",
      screenshotNote: "Date mismatch highlighted",
    },
    {
      id: "BUG-114",
      title: "Failed payment blocks the time slot for other users",
      severity: "Critical",
      priority: "High",
      status: "Done",
      steps: [
        "Start a booking and select an available slot.",
        "Fail or cancel the payment.",
        "Search the same slot using another account.",
      ],
      expected: "A failed payment should release the reserved slot immediately.",
      actual: "The slot remains unavailable even though no successful booking exists.",
      screenshotNote: "Slot incorrectly unavailable",
    },
  ],

  testCases: [
    {
      id: "TC-001",
      scenario: "Verify login with valid credentials",
      precondition: "Registered and active user exists.",
      steps: "Enter valid email and password, then click Login.",
      expected: "User is redirected to the dashboard.",
      status: "Passed",
    },
    {
      id: "TC-002",
      scenario: "Verify invalid password validation",
      precondition: "Registered user email is available.",
      steps: "Enter valid email with incorrect password and submit.",
      expected: "Login is rejected with a clear error message.",
      status: "Passed",
    },
    {
      id: "TC-003",
      scenario: "Verify mandatory fields in booking form",
      precondition: "User is logged in and booking page is open.",
      steps: "Keep required fields empty and click Continue.",
      expected: "Inline validation appears and booking is not submitted.",
      status: "Passed",
    },
    {
      id: "TC-004",
      scenario: "Verify unavailable slot cannot be selected",
      precondition: "A confirmed booking already exists for the slot.",
      steps: "Open availability calendar and attempt to select booked slot.",
      expected: "Booked slot is disabled and cannot be selected.",
      status: "Passed",
    },
    {
      id: "TC-005",
      scenario: "Verify API returns unauthorized response",
      precondition: "Protected API endpoint is available.",
      steps: "Send request without access token.",
      expected: "API returns 401 with standardized error body.",
      status: "Passed",
    },
    {
      id: "TC-006",
      scenario: "Verify profile image file validation",
      precondition: "Profile edit page is open.",
      steps: "Upload unsupported executable file.",
      expected: "Upload is blocked with supported-format message.",
      status: "Passed",
    },
  ],

  certificates: [
    {
      name: "Software Testing Fundamentals",
      issuer: "Professional Learning Platform",
      year: "2025",
      credential: "Credential ID: SAMPLE-001",
      icon: "badge-check",
      accent: "#8b5cf6",
    },
    {
      name: "Postman API Fundamentals",
      issuer: "API Learning Program",
      year: "2025",
      credential: "Credential ID: SAMPLE-002",
      icon: "braces",
      accent: "#22d3ee",
    },
    {
      name: "Agile Project Management",
      issuer: "Professional Learning Platform",
      year: "2024",
      credential: "Credential ID: SAMPLE-003",
      icon: "workflow",
      accent: "#34d399",
    },
  ],
};

/* =========================================================
   WEBSITE LOGIC
   You normally do not need to edit anything below this line.
   ========================================================= */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const icon = (name, className = "") =>
  `<i data-lucide="${name}"${className ? ` class="${className}"` : ""}></i>`;

const escapeHTML = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function initializeIdentity() {
  const { identity, about } = PORTFOLIO_DATA;
  const initials = identity.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  document.title = `${identity.name} | ${identity.title}`;

  setText("#brandName", identity.shortBrand);
  setText("#availabilityText", identity.availability);
  setText("#heroName", identity.name);
  setText("#heroTitle", identity.title);
  setText("#cardName", identity.name);
  setText("#cardRole", identity.title);
  setText("#profileInitials", initials || "QA");
  setText("#aboutSummary", about.summary);
  setText("#professionalSummary", about.professionalSummary);
  setText("#careerObjective", about.careerObjective);
  setText("#qaPhilosophy", about.philosophy);
  setText("#footerName", identity.name);
  setText("#currentYear", new Date().getFullYear());


  // Resume and profile photo can be added later without breaking the website.
  const resumeAvailable = true;
  if (!resumeAvailable) {
    document.body.classList.add("resume-unavailable");
    $$('a[href="assets/resume.pdf"]').forEach((link) => {
      link.removeAttribute("href");
      link.removeAttribute("download");
      link.setAttribute("aria-disabled", "true");
      link.title = "Resume will be added soon";
    });
  }

  const avatar = $("#profileAvatar");
  if (identity.profileImage && avatar) {
    avatar.innerHTML = `<img src="${escapeHTML(identity.profileImage)}" alt="${escapeHTML(identity.name)} profile photo" />`;
  }
}

function renderMarquee() {
  const labels = [
    "Manual Testing",
    "Functional Validation",
    "API Quality",
    "Regression Coverage",
    "Clear Bug Reports",
    "User-Centered QA",
    "Release Confidence",
    "Risk-Based Testing",
  ];
  const doubled = [...labels, ...labels];
  $("#marqueeTrack").innerHTML = doubled
    .map((label) => `<span class="marquee-item">${escapeHTML(label)}</span>`)
    .join("");
}

function renderStats() {
  $("#statsGrid").innerHTML = PORTFOLIO_DATA.stats
    .map(
      (stat) => `
        <article class="stat-card reveal">
          <span class="stat-icon">${icon(stat.icon)}</span>
          <strong data-counter="${escapeHTML(stat.value)}">${escapeHTML(stat.value)}</strong>
          <span>${escapeHTML(stat.label)}</span>
        </article>
      `
    )
    .join("");
}

function getSkillColor(category) {
  const colors = {
    Testing: "#a78bfa",
    API: "#22d3ee",
    Tools: "#fbbf24",
    Technical: "#34d399",
    Process: "#fb7185",
  };
  return colors[category] || "#8b5cf6";
}

function renderSkillFilters() {
  const categories = ["All", ...new Set(PORTFOLIO_DATA.skills.map((skill) => skill.category))];
  $("#skillFilters").innerHTML = categories
    .map(
      (category, index) => `
        <button class="filter-button ${index === 0 ? "active" : ""}" data-category="${escapeHTML(category)}">
          ${escapeHTML(category)}
        </button>
      `
    )
    .join("");

  $$(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderSkills(button.dataset.category);
    });
  });
}

function renderSkills(category = "All") {
  const skills =
    category === "All"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((skill) => skill.category === category);

  $("#visibleSkillCount").textContent = skills.length;

  $("#skillsGrid").innerHTML = skills
    .map((skill) => {
      const levelBars = Array.from(
        { length: 5 },
        (_, index) => `<span class="${index < skill.level ? "filled" : ""}"></span>`
      ).join("");

      return `
        <article class="skill-card reveal visible" style="--skill-color:${getSkillColor(skill.category)}">
          <span class="skill-icon">${icon(skill.icon)}</span>
          <h3>${escapeHTML(skill.name)}</h3>
          <p>${escapeHTML(skill.description)}</p>
          <div class="skill-level" aria-label="${escapeHTML(String(skill.level))} out of 5 proficiency">
            ${levelBars}
          </div>
        </article>
      `;
    })
    .join("");

  if (window.lucide) lucide.createIcons();
}

function renderExperience() {
  $("#experienceTimeline").innerHTML = PORTFOLIO_DATA.experience
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <span class="timeline-dot" aria-hidden="true"></span>
          <div class="timeline-card glass-card">
            <span class="timeline-period">${icon("calendar-days")} ${escapeHTML(item.period)}</span>
            <h3>${escapeHTML(item.role)}</h3>
            <span class="timeline-company">${escapeHTML(item.company)}</span>
            <p>${escapeHTML(item.summary)}</p>
            <ul class="achievement-list">
              ${item.achievements.map((achievement) => `<li>${escapeHTML(achievement)}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  $("#projectsGrid").innerHTML = PORTFOLIO_DATA.projects
    .map(
      (project, index) => `
        <article class="project-card glass-card reveal" style="--project-accent:${escapeHTML(project.accent)}">
          <div class="project-visual" aria-hidden="true">
            <div class="project-browser">
              <div class="browser-top">
                <span></span><span></span><span></span><div class="browser-url"></div>
              </div>
              <div class="browser-body">
                <div class="mock-sidebar">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
                <div class="mock-content">
                  <span class="mock-title"></span>
                  <div class="mock-grid"><span></span><span></span><span></span><span></span><span></span><span></span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-number">PROJECT / 0${index + 1}</span>
              <span class="project-status">${escapeHTML(project.status)}</span>
            </div>
            <h3>${escapeHTML(project.name)}</h3>
            <span class="project-role">${escapeHTML(project.role)}</span>
            <p>${escapeHTML(project.description)}</p>
            <div class="project-details">
              <div class="project-detail">
                <strong>Responsibilities</strong>
                <span>${escapeHTML(project.responsibilities)}</span>
              </div>
              <div class="project-detail">
                <strong>Testing Performed</strong>
                <span>${escapeHTML(project.testing)}</span>
              </div>
            </div>
            <div class="tool-tags">
              ${project.tools.map((tool) => `<span>${escapeHTML(tool)}</span>`).join("")}
            </div>
            <div class="project-links">
              <a class="project-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener">
                ${icon("github")} GitHub
              </a>
              <a class="project-link" href="${escapeHTML(project.demo)}" target="_blank" rel="noopener">
                ${icon("external-link")} Live Demo
              </a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderWorkflow() {
  const steps = PORTFOLIO_DATA.workflow;
  $("#workflowSteps").innerHTML = steps
    .map(
      (step, index) => `
        <button class="workflow-step ${index === 0 ? "active" : ""}" data-workflow-index="${index}">
          <span>${icon(step.icon)}</span>
          <strong>${escapeHTML(step.name)}</strong>
        </button>
      `
    )
    .join("");

  const activateWorkflow = (index) => {
    const selected = steps[index];
    $$(".workflow-step").forEach((step, stepIndex) => {
      step.classList.toggle("active", stepIndex === index);
    });

    $("#workflowLineProgress").style.width = `${(index / (steps.length - 1)) * 100}%`;
    $("#workflowDetail").innerHTML = `
      <span class="workflow-detail-icon">${icon(selected.icon)}</span>
      <div>
        <h3>${escapeHTML(selected.name)}</h3>
        <p>${escapeHTML(selected.description)}</p>
      </div>
      <span class="workflow-detail-number">0${index + 1}</span>
    `;

    if (window.lucide) lucide.createIcons();
  };

  $$(".workflow-step").forEach((step) => {
    step.addEventListener("click", () => activateWorkflow(Number(step.dataset.workflowIndex)));
  });

  activateWorkflow(0);
}

function badgeClass(value) {
  return `badge-${String(value).toLowerCase().replace(/\s+/g, "-")}`;
}

function renderBugs() {
  $("#bugGrid").innerHTML = PORTFOLIO_DATA.bugs
    .map(
      (bug) => `
        <article class="bug-card glass-card reveal">
          <div class="bug-card-head">
            <span class="bug-id">${icon("bug")} ${escapeHTML(bug.id)}</span>
            <div class="bug-badges">
              <span class="badge ${badgeClass(bug.severity)}">${escapeHTML(bug.severity)}</span>
              <span class="badge ${badgeClass(bug.status)}">${escapeHTML(bug.status)}</span>
            </div>
          </div>
          <div class="bug-card-body">
            <h3>${escapeHTML(bug.title)}</h3>
            <div class="bug-fields">
              <div class="bug-field">
                <strong>Priority</strong>
                <span>${escapeHTML(bug.priority)}</span>
              </div>
              <div class="bug-field">
                <strong>Steps</strong>
                <ol>${bug.steps.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
              </div>
              <div class="bug-field">
                <strong>Expected</strong>
                <span>${escapeHTML(bug.expected)}</span>
              </div>
              <div class="bug-field">
                <strong>Actual</strong>
                <span>${escapeHTML(bug.actual)}</span>
              </div>
            </div>
            <div class="bug-screenshot" aria-label="Sample bug screenshot">
              <div class="screenshot-header"></div>
              <div class="screenshot-content">
                <div><span></span><span></span><span></span><span></span></div>
                <div class="screenshot-error">Unexpected result</div>
              </div>
              <span class="screenshot-callout">${escapeHTML(bug.screenshotNote)}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTestCases(searchTerm = "") {
  const normalized = searchTerm.trim().toLowerCase();
  const filtered = PORTFOLIO_DATA.testCases.filter((testCase) =>
    Object.values(testCase).some((value) => String(value).toLowerCase().includes(normalized))
  );

  $("#testCaseCount").textContent = `${filtered.length} test cases`;
  $("#testCaseTableBody").innerHTML = filtered
    .map(
      (testCase) => `
        <tr>
          <td>${escapeHTML(testCase.id)}</td>
          <td>${escapeHTML(testCase.scenario)}</td>
          <td>${escapeHTML(testCase.precondition)}</td>
          <td>${escapeHTML(testCase.steps)}</td>
          <td>${escapeHTML(testCase.expected)}</td>
          <td><span class="status-pill">${escapeHTML(testCase.status)}</span></td>
        </tr>
      `
    )
    .join("");
}

function renderCertificates() {
  $("#certificatesGrid").innerHTML = PORTFOLIO_DATA.certificates
    .map(
      (certificate) => `
        <article class="certificate-card reveal" style="--certificate-accent:${escapeHTML(certificate.accent)}">
          <span class="certificate-icon">${icon(certificate.icon)}</span>
          <h3>${escapeHTML(certificate.name)}</h3>
          <p>${escapeHTML(certificate.issuer)}</p>
          <div class="certificate-meta">
            <strong>${escapeHTML(certificate.year)}</strong>
            <span>${escapeHTML(certificate.credential)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderContactLinks() {
  const { identity, social } = PORTFOLIO_DATA;
  const links = [
    { label: "Email", value: identity.email, href: `mailto:${identity.email}`, icon: "mail" },
    { label: "LinkedIn", value: "Professional profile", href: social.linkedin, icon: "linkedin" },
    { label: "GitHub", value: "Projects and case studies", href: social.github, icon: "github" },
    { label: "WhatsApp", value: identity.phone, href: social.whatsapp, icon: "message-circle" },
  ];

  $("#contactLinks").innerHTML = links
    .map(
      (link) => `
        <a class="contact-link" href="${escapeHTML(link.href)}" target="${link.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">
          <span class="contact-link-icon">${icon(link.icon)}</span>
          <span>
            <strong>${escapeHTML(link.label)}</strong>
            <span>${escapeHTML(link.value)}</span>
          </span>
        </a>
      `
    )
    .join("");
}

function setupTypingEffect() {
  const target = $("#typingText");
  const words = PORTFOLIO_DATA.heroTyping;
  if (!target || !words.length) return;

  let wordIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  const type = () => {
    const word = words[wordIndex];
    characterIndex += deleting ? -1 : 1;
    target.textContent = word.slice(0, characterIndex);

    let delay = deleting ? 45 : 72;

    if (!deleting && characterIndex === word.length) {
      deleting = true;
      delay = 1250;
    } else if (deleting && characterIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 280;
    }

    window.setTimeout(type, delay);
  };

  type();
}

function setupTheme() {
  const storedTheme = localStorage.getItem("qa-theme");
  const preferredLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = storedTheme || (preferredLight ? "light" : "dark");
  document.documentElement.dataset.theme = initialTheme;

  $("#themeToggle")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("qa-theme", nextTheme);
    drawParticles(true);
  });
}

function setupNavigation() {
  const menuButton = $("#mobileMenuButton");
  const navLinks = $("#navLinks");

  menuButton?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.innerHTML = icon(isOpen ? "x" : "menu");
    if (window.lucide) lucide.createIcons();
  });

  $$("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton?.setAttribute("aria-expanded", "false");
      if (menuButton) menuButton.innerHTML = icon("menu");
      if (window.lucide) lucide.createIcons();
    });
  });

  const sections = $$("main section[id]");
  const links = $$("#navLinks a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-38% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupHeaderAndProgress() {
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");

  const update = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    header?.classList.toggle("scrolled", scrollTop > 18);
    if (progress) progress.style.width = `${scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupShowcaseTabs() {
  $$(".showcase-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const type = tab.dataset.showcase;

      $$(".showcase-tab").forEach((item) => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });

      $("#bugsPanel").classList.toggle("active", type === "bugs");
      $("#testcasesPanel").classList.toggle("active", type === "testcases");
    });
  });

  $("#testCaseSearch")?.addEventListener("input", (event) => {
    renderTestCases(event.target.value);
  });
}

function setupContactForm() {
  $("#contactForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const senderName = form.get("name");
    const senderEmail = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");
    const destination = PORTFOLIO_DATA.identity.email;

    const emailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`
    );

    $("#formStatus").textContent = "Opening your email application...";
    window.location.href = `mailto:${destination}?subject=${emailSubject}&body=${emailBody}`;

    window.setTimeout(() => {
      $("#formStatus").textContent = "Your message is ready to send.";
    }, 1000);
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  $$(".reveal").forEach((element) => observer.observe(element));
}

function setupCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener(
    "mousemove",
    (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      glow.style.opacity = "1";
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}

function setupMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  $$(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
}

function setupSmoothScroll() {
  if (!window.Lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lenis = new Lenis({
    duration: 1.05,
    smoothWheel: true,
    wheelMultiplier: 0.92,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  if (window.gsap) {
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

let particleState = null;

function drawParticles(forceReset = false) {
  const canvas = $("#particleCanvas");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  if (!particleState || forceReset) {
    const count = Math.min(75, Math.floor((width * height) / 18000));
    particleState = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.35,
      speedX: (Math.random() - 0.5) * 0.12,
      speedY: (Math.random() - 0.5) * 0.16,
      opacity: Math.random() * 0.5 + 0.15,
    }));
  }

  const lightTheme = document.documentElement.dataset.theme === "light";

  const animate = () => {
    context.clearRect(0, 0, width, height);

    particleState.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < -10) particle.x = width + 10;
      if (particle.x > width + 10) particle.x = -10;
      if (particle.y < -10) particle.y = height + 10;
      if (particle.y > height + 10) particle.y = -10;

      context.beginPath();
      context.fillStyle = lightTheme
        ? `rgba(91, 33, 182, ${particle.opacity * 0.44})`
        : `rgba(167, 139, 250, ${particle.opacity})`;
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    requestAnimationFrame(animate);
  };

  if (!canvas.dataset.running) {
    canvas.dataset.running = "true";
    animate();
  }
}

function setup404Fallback() {
  const cleanPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const allowedPaths = ["/", "/index.html"];

  if (!allowedPaths.includes(cleanPath)) {
    $("#portfolioPage").hidden = true;
    $(".site-header").hidden = true;
    $(".footer").hidden = true;
    $("#notFoundPage").hidden = false;
  }
}

function hideLoader() {
  const loader = $("#loader");
  window.setTimeout(() => loader?.classList.add("hidden"), 650);
}

function initializePortfolio() {
  initializeIdentity();
  renderMarquee();
  renderStats();
  renderSkillFilters();
  renderSkills();
  renderExperience();
  renderProjects();
  renderWorkflow();
  renderBugs();
  renderTestCases();
  renderCertificates();
  renderContactLinks();

  if (window.lucide) lucide.createIcons();

  setupTheme();
  setupNavigation();
  setupHeaderAndProgress();
  setupShowcaseTabs();
  setupContactForm();
  setupTypingEffect();
  setupCursorGlow();
  setupMagneticButtons();
  setupSmoothScroll();
  setup404Fallback();

  drawParticles();
  setupRevealAnimations();
  hideLoader();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => drawParticles(true), 180);
  });
}

window.addEventListener("DOMContentLoaded", initializePortfolio);
