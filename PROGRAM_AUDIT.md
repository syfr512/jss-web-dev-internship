# UX Audit Report: JSS Program & Catalog Pages
**Date:** July 8, 2026  
**Auditor:** Faizian Ahmed Yousuf  
**Target Viewport:** Mobile (Emulated Pixel 8 / 9)

---

### Issue 1: Course Catalog Filter Visual Hierarchy
* **Analysis Area:** Catalog Layout & Navigation Clarity
* **Screenshot:** ![Catalog Mobile](./assets/homepage-catalog-mobile.jpg)
* **Problem Description:** The mobile catalog displays certification paths vertically with large cards. While information density is good, there is a lack of quick-filtering options (e.g., filtering by "Entry-Level" vs "Advanced") at the top of the mobile viewport, forcing users to scroll past irrelevant programs to find their track.
* **Recommended Fix:** Implement a sticky horizontal pill-filter component at the top of the mobile catalog page (`flex-direction: row; overflow-x: auto;`) allowing instant filtering by career tier.

---

### Issue 2: Deep-Dive Program Page Content Density
* **Analysis Area:** Content Completeness & Program Descriptions
* **Screenshot:** ![Cybersecurity Program](./assets/program-page-cybersecurity.png)
* **Problem Description:** The individual program page provides excellent technical depth (e.g., hours of training, explicit topics like Linux/Security+). However, on mobile viewports, the text block describing the target audience is highly dense, making it difficult for a user to scan quickly.
* **Recommended Fix:** Refactor long text paragraphs into high-contrast bulleted layout grids or icon-driven callouts to improve mobile readability.

---

### Issue 3: Enrollment Flow Multi-Step Friction
* **Analysis Area:** Enrollment Flow & Primary CTAs
* **Problem Description:** Clicking "Start Learning" or "Open Program" initiates an enrollment loop that routes users through multi-tier membership selection rather than a direct, single-click enrollment path for that specific certification track.
* **Recommended Fix:** Implement a direct checkout/enrollment modal or bypass route that binds the specific course selection directly to the registration payload.