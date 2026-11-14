# Just Fitness - Premium Gym Management System

A complete, production-quality gym management system with a premium website and admin dashboard.

## 🏋️ Features

### Public Website
- Premium dark theme with gold accents
- Responsive design (mobile-first)
- Smooth animations with Framer Motion
- Hero section, about, plans, trainers, facilities, gallery, contact
- Floating WhatsApp button
- SEO optimized

### Admin/Receptionist System
- Role-based access (Admin/Receptionist)
- Member management with search, filters, pagination
- Membership plans and renewal
- Payment tracking with PDF receipts
- Attendance system (manual + QR code)
- Inactive member tracking
- Automated reminders (expiry, inactive, payment pending)
- Dashboard with charts and analytics
- Lead management from website enquiries

### Technical Features
- React (Vite) + Bootstrap 5 + Custom CSS
- Node.js + Express.js backend
- MySQL database
- JWT authentication
- QR code generation and scanning
- PDF receipt generation
- IST timezone handling
- Automated cron jobs

## 📁 Project Structure

```
gym/
├── client/              # React frontend (Phase 2+)
├── server/              # Node.js backend (Phase 1 ✅)
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── jobs/
│   ├── utils/
│   └── index.js
└── README.md
```

## 🚀 Setup Instructions

### Backend (Phase 1 - Complete)

1. **Install dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database credentials.

3. **Create MySQL database**
   ```bash
   mysql -u root -p
   ```
   ```sql
   CREATE DATABASE just_fitness_gym;
   EXIT;
   ```

4. **Run schema and seed**
   ```bash
   mysql -u root -p just_fitness_gym < db/schema.sql
   npm run seed
   ```

5. **Start server**
   ```bash
   npm run dev
   ```

Server runs on `http://localhost:5000`

### Frontend (Phase 2 - Complete)

1. **Install dependencies**
   ```bash
   cd client
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

Frontend runs on `http://localhost:5173`

### Demo Credentials

- **Admin**: username: `admin`, password: `admin123`
- **Receptionist**: username: `reception`, password: `reception123`

## 📊 Phase Progress

- ✅ **Phase 1**: Project setup, DB schema + seed, backend auth, members, plans, memberships APIs + date logic tests
- ✅ **Phase 2**: Public premium website (all pages, animations, responsive)
- ⏳ **Phase 3**: Admin dashboard UI (login, members, renewal, payments + PDF)
- ⏳ **Phase 4**: Attendance (manual + QR), monthly register, inactive tracking
- ⏳ **Phase 5**: Cron reminders, notifications, WhatsApp/SMS, dashboard charts, leads, settings
- ⏳ **Phase 6**: Full QA pass, bug fixes, cleanup, final README

## 🔐 Security

- JWT authentication with bcrypt password hashing
- Rate limiting on all endpoints
- SQL injection prevention (parameterized queries)
- Helmet security headers
- CORS configuration
- Role-based access control

## 📱 Configuration

Edit `server/config/gymConfig.js` to customize:
- Gym name, address, contact details
- Social media links
- Plan prices and features
- Business hours
- Reminder settings
- Message templates

## 🧪 Testing

Run date utility tests:
```bash
cd server
npm test
```

## 📄 License

ISC

---

**Built with ❤️ for premium gyms**
