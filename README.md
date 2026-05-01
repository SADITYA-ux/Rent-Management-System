# Rent Management System

A full-stack rent management system built with React and Node.js/Express,
designed for apartment complex managers.

## Screenshots

### Home Page

![Home](public/screenshots/home.png)

### Dashboard

![Dashboard](public/screenshots/dashboard.png)

### Apartments

![Apartments](public/screenshots/apartments.png)

### Tenants

![Tenants](public/screenshots/tenants.png)

### Payments

![Payments](public/screenshots/payments.png)

### Staff

![Staff](public/screenshots/staff.png)

### Registration Form

![Form](public/screenshots/form.png)

## Features

- Dashboard with sidebar navigation
- Apartment management with occupied/vacant status
- Tenant management with lease expiry warnings
- Payment tracking with revenue calculation
- Staff management
- Tenant registration form (apartment + tenant + payment in one flow)
- Pending payments and vacant apartment alerts

## Tech Stack

**Frontend:** React, React Router DOM  
**Backend:** Node.js, Express  
**Storage:** JSON files

## Getting Started

### Backend

```bash
cd backend
npm install
node index.js
```

Server runs on http://localhost:5000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs on http://localhost:5173

## API Routes

| Method   | Route       | Description    |
| -------- | ----------- | -------------- |
| GET/POST | /apartments | All apartments |
| GET/POST | /tenants    | All tenants    |
| GET/POST | /payments   | All payments   |
| GET/POST | /staff      | All staff      |
