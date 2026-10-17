# Tarayana Information System (TIS)

Deployed link- https://tarayanaorganization.onrender.com

## Project Overview

The **Tarayana Information System (TIS)** is a centralized web-based platform developed for the Tarayana Foundation to improve programme management, beneficiary tracking, monitoring & evaluation, reporting, and organizational data management.

The system is designed to replace the existing inefficient dashboard system with a modern, secure, scalable, and user-friendly platform that supports data-driven decision-making and transparent donor reporting.

---

# Purpose of the System

The main purpose of TIS is to:

* Centralize beneficiary and project information
* Reduce manual paperwork and repetitive processes
* Improve programme monitoring and reporting
* Provide real-time dashboards and analytics
* Ensure secure role-based access control
* Support long-term scalability and maintainability

---

# System Architecture

The system follows the **MVC (Model-View-Controller)** architecture and uses a **Three-Tier Architecture**:

## 1. Presentation Layer (Frontend)

Responsible for user interaction and interface.

### Technologies

* React.js
* Vite
* Tailwindcss
* JavaScript

---

## 2. Application Layer (Backend)

Handles business logic, APIs, validation, and system operations.

### Technologies

* Node.js
* Express.js

---

## 3. Data Layer (Database)

Stores and manages all beneficiary, project, and reporting data.

### Technologies

* MongoDB

---

# Core Functionalities

## Beneficiary Management

* Register beneficiaries and households
* Update and manage beneficiary records
* Search beneficiaries by:

  * Dzongkhag
  * Programme
  * Project

---

## Programme & Project Management

* Create and manage programmes
* Assign projects to officers
* Track project progress
* View project summaries

---

## Monitoring & Evaluation (M&E)

* Validate intervention quantities
* Track programme performance
* Generate monitoring reports
* Support evidence-based evaluation

---

## Reporting System

* Automated quarterly and annual reports
* Export reports in:

  * PDF
  * Excel
* Dashboard analytics for management and donors

---

## Event Management

* Create annual organizational events
* Customize event data collection forms
* Manage event submissions

Example Events:

* Tarayana Fair
* Green Tech Challenge
* Annual Pilgrimage

---

## Knowledge Management

* Upload and organize documents/resources
* Categorize files by:

  * Programme
  * Dzongkhag
  * Year
  * Project

---

## Validation & Notification System

* M&R and C&D officers validate submitted quantities
* Email notifications sent when discrepancies are detected

---

## User Management & RBAC

### Roles Supported

* Administrator
* Programme Officer
* Field Officer
* M&R Officer
* C&D Officer
* Management

### Features

* Secure authentication
* Role-based access control
* User and permission management

---

# Non-Functional Features

## Security

* Secure authentication
* Role-based authorization
* Data protection and validation

## Scalability

* Modular architecture for future expansion

## Reliability

* Daily backups
* High system availability

## Usability

* Simple and user-friendly interface
* Responsive design for desktop/tablet/mobile

## Maintainability

* Clean modular codebase
* Easy future enhancements

---

# Tech Stack

| Layer          | Technology           |
| -------------- | -------------------- |
| Frontend       | React.js + Vite      |
| Backend        | Node.js + Express.js |
| Database       | MongoDB              |
| Authentication | JWT / Session-based  |
| Deployment     | Cloud / Linux Server |

---

# System Users

| User Role         | Responsibilities                            |
| ----------------- | ------------------------------------------- |
| Admin             | Manage users, programmes, and system access |
| Programme Officer | Manage programmes and projects              |
| Field Officer     | Update beneficiary and activity data        |
| M&R Officer       | Validate reports and interventions          |
| C&D Officer       | Documentation and validation                |
| Management        | Monitor dashboards and reports              |

---

# Development Methodology

The project follows the **Agile Scrum Methodology**.

## Agile Stages

1. Requirement Analysis
2. Sprint Planning
3. Design & Collaboration
4. Development & Testing
5. Review & Monitoring

---

# Installation Guide

## Prerequisites

Make sure the following are installed:

* Node.js
* MongoDB
* Git

---

## Clone Repository

```bash
git clone <repository-url>
cd tarayana-information-system
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

# Future Enhancements

* Mobile application integration
* Offline synchronization for field officers
* GIS and map-based analytics
* AI-powered reporting insights
* SMS notification integration

---

# Team Members

| Name             | Role                              |
| ---------------- | --------------------------------- |
| Tempel Gyeltshen | Backend Developer                 |
| Phuntsho Wangmo  | Backend Developer & Operations    |
| Sangay Choden    | Frontend Developer & Scrum Master |
| Pema Tshoki      | Team Leader & UI/UX Designer      |

---

# Academic Information

**Institution:** Royal University of Bhutan
**College:** Gyalpozhing College of Information Technology
**Course:** Bachelor of Computer Science
**Module:** PRJ404 Final Year Capstone Project
**Supervisor:** Ms. Tshering Lhamo

---

# License

This project is developed for academic and organizational use under the Tarayana Foundation.