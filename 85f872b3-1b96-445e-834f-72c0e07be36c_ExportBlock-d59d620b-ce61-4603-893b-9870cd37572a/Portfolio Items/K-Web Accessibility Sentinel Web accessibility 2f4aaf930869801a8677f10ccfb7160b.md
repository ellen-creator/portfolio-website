# K-Web Accessibility Sentinel
Web accessibility

## *An Automated Diagnostic Tool for KWCAG 2.2 Compliance*

**GitHub Repository:** [ellen-creator/Korean_webaccessibility](https://github.com/ellen-creator/Korean_webaccessibility)

---

## **0. Project Background & Motivation**

In the rapidly evolving digital landscape of South Korea, **Web Accessibility (WA)** remains an underserved domain. Despite the legal mandates of the *Anti-Discrimination Against Persons with Disabilities Act*, the practical implementation of these standards is often neglected due to a lack of fundamental education and accessible auditing tools.

As a professional at **Google**, I observed a troubling trend: many consulting firms leverage the complexity of accessibility standards to induce high-cost contracts without providing transparent, actionable data. Users and developers often feel overwhelmed, not knowing what content they are missing or how to improve their digital inclusivity.

**K-Web Accessibility Sentinel** was developed with a clear mission:

- **Democratization of Auditing:** To provide a free, automated tool that empowers any user or developer to diagnose accessibility issues instantly.
- **Actionable Insights:** To move beyond binary "pass/fail" results by offering detailed remediation guides and PDF reports.
- **Cultural Shift:** To encourage developers to adopt a "continuous monitoring" mindset, fostering a more inclusive Korean web ecosystem where assistive technologies (like screen readers) are treated as a core requirement, not a luxury.

---

## **1. Technical Architecture (Entire Code Overview)**

The application is built on a modern Python stack, prioritizing scalability and ease of use.

[Here is the entire code](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/Here%20is%20the%20entire%20code%20317aaf93086980b6b56ff657585e3399.md)

- **Frontend Framework:** **Streamlit** (for a responsive, interactive web interface).
- **Analysis Engine:** **BeautifulSoup4** & **Requests** (for DOM parsing and accessibility attribute extraction).
- **Data Management:** **SQLite3** (storing user-specific diagnostic history).
- **Security:** **Streamlit-Authenticator** (JWT-based secure login and registration).
- **Visualization & Reporting:** **Plotly** (time-series performance tracking) and **FPDF2** (automated PDF generation with Unicode/Korean font support).

---

## **2. Core Functions & Features**

![스크린샷 2026-03-02 오후 12.43.07.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_12.43.07.png)

### **A. Secure Authentication & User Management**

Provides a personalized experience where users can securely register and log in. The system maintains a private database of diagnostic history, allowing for long-term accessibility tracking.

![스크린샷 2026-03-02 오후 1.14.50.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.14.50.png)

### **B. Real-Time Precision Diagnosis**

Users simply input a URL to trigger an automated crawl. The engine evaluates the site against **KWCAG 2.2** (Korean Web Content Accessibility Guidelines) core principles:

- **Text Alternatives:** Checking for `alt` attributes in `<img>` tags.
- **Heading Hierarchy:** Ensuring logical nesting of `<h1>` through `<h6>`.
- **Form Labels:** Verifying that input fields are correctly associated with labels for screen readers.
- **Language Attributes:** Checking for the `lang` attribute to ensure correct TTS (Text-to-Speech) engine selection.

### **C. Detailed Analysis & Remediation Reports**

![스크린샷 2026-03-02 오후 1.17.26.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.17.26.png)

This module breaks down raw data into human-readable feedback. It explains *why* a specific error hinders accessibility and provides the exact code-level solution. Users can export these findings into a **Professional PDF Report** for stakeholders or development teams.

![스크린샷 2026-03-02 오후 1.24.28.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.24.28.png)

### **D. User History & Trend Analytics**

![스크린샷 2026-03-02 오후 1.26.02.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.26.02.png)

A dedicated dashboard that allows users to toggle between different tracked websites. It visualizes the **Score Trend** over time, enabling teams to monitor if their accessibility fixes are effectively improving their compliance score across multiple versions of the site.

## **E. Standard Compliance & Strategic Best Practices**

Beyond simple diagnostics, the platform serves as a **Knowledge Hub** to bridge the gap between legal theory and technical practice. It integrates the four core principles of **KWCAG 2.2** into a systematic workflow.

### **I. Understanding the "Why": The Pillars of Compliance**

The project explicitly educates users on why accessibility is a non-negotiable standard:

- **Legal Mandate:** Compliance with the *Anti-Discrimination Against Persons with Disabilities Act*, avoiding potential legal risks and administrative sanctions.
- **Business Inclusivity:** Expanding the user base to include 2.5 million+ people with disabilities and the rapidly growing elderly population in Korea.
- **SEO & UX Synergy:** Accessibility best practices (like semantic HTML) directly improve Search Engine Optimization and mobile usability for all users.

![스크린샷 2026-03-02 오후 1.26.08.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.26.08.png)

### **III. Implementing KWCAG 2.2 Design Principles**

The tool guides developers through the **POUR** framework:

1. **Perceivable:** Ensuring information is not invisible to all senses (e.g., High color contrast, text alternatives).
2. **Operable:** Guaranteeing that all UI components are functional via keyboard-only navigation.
3. **Understandable:** Making the content and operation of the interface clear and predictable.
4. **Robust:** Using clean, standardized markup to remain compatible with various assistive technologies (Screen Readers, Braille displays).

---

![스크린샷 2026-03-02 오후 1.26.14.png](K-Web%20Accessibility%20Sentinel%20Web%20accessibility/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2026-03-02_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.26.14.png)

**3. Roadmap for Further Development**

While the current version provides a robust baseline, the following enhancements are planned to align with advanced HCI research goals:

1. **Dynamic JavaScript Rendering (Headless Browsing):** Integrating **Selenium** or **Playwright** to analyze modern Single Page Applications (SPAs) built with React or Vue, which often hide content behind client-side rendering.
2. **Color Contrast API Integration:** Automated checking of foreground/background color ratios (WCAG 2.1 Level AA requires 4.5:1) to support users with low vision or color blindness.
3. **AI-Powered Remediation Suggestions:** Utilizing LLMs (Large Language Models) to suggest context-aware alternative text for images based on computer vision analysis.
4. **A11Y CI/CD Plugin:** Developing a CLI version that can be integrated into GitHub Actions, allowing developers to catch accessibility regressions automatically before code is even deployed.

---

## **4. Key Learnings & Technical Challenges**

### **Key Learnings: Beyond the Code**

- **Empathy-Driven Engineering:** I realized that Web Accessibility is not a "check-box" task but a profound exercise in digital empathy. Developing this tool required me to view the web through the lens of users who rely on screen readers or keyboard-only navigation.
- **The Power of Data Democratization:** By providing a free, transparent auditing tool, I learned how automated systems can lower the entry barrier for small-scale developers and NGOs to join the inclusive design movement.
- **Bridging Strategy and HCI:** My background at BCG and Google helped me identify the "information asymmetry" in the accessibility market. This project taught me how to translate complex legal standards into actionable technical requirements for developers.

### **⚠️ Technical Challenges & Solutions**

- **The "Type Mismatch" in PDF Generation:** * *Challenge:* Encountered an `AttributeError` and `StreamlitAPIException` when handling `bytearray` outputs from the PDF engine.
    - *Solution:* Implemented a robust data-type validation layer using Python’s `isinstance()` checks to ensure seamless conversion between `bytearray`, `str`, and `bytes` before triggering the Streamlit download buffer.
- **Unicode/CJK Font Rendering in FPDF2:**
    - *Challenge:* Standard PDF libraries often fail to render Korean characters (CJK), resulting in broken text ("???").
    - *Solution:* Researched and integrated external `.ttf` (TrueType Font) support into the FPDF class, mapping custom font families to ensure 100% readability of technical remediation guides in Korean.
- **Asynchronous User State Management:**
    - *Challenge:* Passing real-time diagnostic results across different menu tabs (Diagnosis → Detailed Report) without losing data during Streamlit's re-run cycle.
    - *Solution:* Leveraged `st.session_state` as a persistent data store, creating a seamless "Product Journey" from initial scan to historical analytics.