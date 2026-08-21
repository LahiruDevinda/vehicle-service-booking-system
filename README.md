# Vehicle Service Center Booking System

A web-based **Vehicle Service Center Booking System** developed as a practical assignment for **SENG 21253 - Web Application Development (Practical)** at the Faculty of Science, University of Kelaniya.

---

## 🚀 Project Overview
The system enables vehicle owners to browse available service packages, check details, and book appointment dates by paying a deposit through a secure payment gateway. It also includes an administrator dashboard for managers to handle service catalogs and monitor incoming customer bookings.

---

## 🛠️ Technology Stack & Constraints
In accordance with the project rules, the application is built from scratch without heavy external frameworks:
* **Front-End:** HTML, CSS, and Vanilla JavaScript (No front-end frameworks like React, Bootstrap, or Tailwind used).
* **Back-End:** PHP (No back-end frameworks like Laravel used).
* **Database:** MySQL.

---

## ✨ Core Features & Functionalities

### 👤 For Customers:
* **Service Catalog Viewing:** Homepage showcasing available services (e.g., Full Engine Service, Wheel Alignment, AC Repair) with descriptions, estimated times, prices, and images.
* **Search & Filter:** Search services by name or filter them by categories (e.g., Routine Maintenance, Repairs, Cleaning).
* **Booking & Payment (Checkout):** Select services, enter vehicle details (Vehicle Model, License Plate), choose a preferred date, and make a deposit payment to secure the reservation.

### 🔐 For Administrators (Managers):
* **Authentication:** Secure login mechanism to access the management dashboard.
* **Service Management (CRUD):** Ability to Create new packages, Read the service list, Update details/pricing, and Delete services from the database.
* **Booking Management:** Dedicated dashboard view to track all incoming customer appointments, associated vehicle details, selected dates, and payment statuses.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/LahiruDevinda/vehicle-service-booking-system.git](https://github.com/LahiruDevinda/vehicle-service-booking-system.git)
