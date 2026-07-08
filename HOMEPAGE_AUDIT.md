# UX Audit Report: JobSkillShare Homepage
**Date:** July 7, 2026  
**Auditor:** Faizian Ahmed Yousuf  
**Target Viewport:** Mobile (Emulated Pixel 8 / 9 (Chrome) Android 14)

---

### Issue 1: Above-the-Fold Visual Clutter & Value Proposition
* **Analysis Area:** 5-Second Clarity & Hero Section
* **Screenshot:** ![Above the Fold](./assets/homepage-hero-mobile.png)
* **Problem Description:** The primary hero headline is surrounded by multiple lines of secondary descriptive text on small mobile displays. This layout creates visual noise that competes for the user's attention and delays clear understanding of the site's primary purpose.
* **Recommended Fix:** Consolidate the text elements above the fold. Use a single bold value proposition headline paired with immediate action buttons to keep the initial viewport clear and direct.

---

### Issue 2: Mobile Navigation Menu Density
* **Analysis Area:** Navigation Clarity & Responsiveness
* **Screenshot:** ![Mobile Menu](./assets/mobile-nav-menu.png)
* **Problem Description:** When opening the hamburger menu, users face a long list of specific certification tracks. Scrolling through this extensive menu on a mobile screen causes layout friction and makes it difficult to find top-level categories.
* **Recommended Fix:** Replace the flat text list with an interactive accordion menu structure. Hide specific training paths until a user explicitly expands a main category header.

---

### Issue 3: Heavy Asset Payload & Missing Optimization
* **Analysis Area:** Performance Optimization (Network Tab)
* **Screenshot:** ![Network Metrics](./assets/network-performance-audit.png)
* **Problem Description:** While the page successfully finishes initialization in 2.18 seconds, the overall transferred payload size is a massive 7.13 MB. DevTools reveals that two core theme assets (`JSSBlack.png` at 2.17 MB and `logo.png` at 2.22 MB) are being served completely uncompressed to mobile viewports.
* **Recommended Fix:** Compress these images and convert them to modern web formats like `.webp` or `.avif`. This architectural switch will drop the asset sizes from megabytes down to kilobytes, significantly cutting data usage for mobile users.