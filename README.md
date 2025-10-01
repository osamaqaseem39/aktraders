# A.K. Traders® - Freight Forwarding & Customs Clearance Website

A comprehensive Next.js application for A.K. Traders, a leading freight forwarding and customs clearance company in Pakistan since 1974.

## 🚀 Features

### Public Website
- **Modern Homepage** with hero section, services overview, and company information
- **Service Pages** for Sea Freight, Air Freight, Road Transport, Warehousing, Customs Clearance, and Transit Trade
- **About Us** page with company history, mission, vision, and team
- **Track Shipment** functionality for real-time shipment tracking
- **Request Quote** form for instant quote requests
- **Contact Page** with office locations and contact form
- **Blog/News** section for industry updates and insights

### Dashboard System
- **Admin Panel** for complete system management
- **Staff Dashboard** for operational tasks
- **Client Dashboard** for shipment tracking and management
- **Role-based Access Control** (Admin, Staff, Client)

### Core Functionality
- **Shipment Management** with real-time status updates
- **Quote Management** system
- **Invoice Generation** and payment tracking
- **User Management** with authentication
- **Blog CMS** for content management
- **Analytics Dashboard** with key metrics

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aktrader
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update the `.env.local` file with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/aktraders"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   EMAIL_FROM="noreply@aktraders.pk"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The application uses the following main entities:

- **Users** - Admin, Staff, and Client accounts
- **Shipments** - Freight forwarding records with tracking
- **Quotes** - Customer quote requests
- **Invoices** - Billing and payment tracking
- **Blog Posts** - Content management
- **Contact Messages** - Customer inquiries

## 🎨 Design System

- **Color Palette**: Blue (#2563eb) primary, with professional grays and whites
- **Typography**: Inter font family for modern, clean appearance
- **Components**: Custom UI components built with Radix UI and Tailwind CSS
- **Responsive**: Mobile-first design with responsive breakpoints
- **Animations**: Smooth transitions and micro-interactions with Framer Motion

## 📱 Pages Structure

### Public Pages
- `/` - Homepage
- `/about` - About Us
- `/services` - Services overview
- `/services/[service]` - Individual service pages
- `/track` - Shipment tracking
- `/quote` - Quote request form
- `/contact` - Contact information and form
- `/blog` - News and updates
- `/careers` - Job postings

### Dashboard Pages
- `/dashboard` - Main dashboard (role-based)
- `/dashboard/shipments` - Shipment management
- `/dashboard/quotes` - Quote management
- `/dashboard/clients` - Client management
- `/dashboard/blog` - Content management
- `/dashboard/analytics` - Analytics and reports

### Authentication
- `/auth/signin` - Sign in page
- `/auth/signup` - Sign up page

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Commands

- `npx prisma studio` - Open Prisma Studio
- `npx prisma db push` - Push schema changes
- `npx prisma generate` - Generate Prisma client

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. **Database**: Set up PostgreSQL (Supabase, PlanetScale, or RDS)
2. **Environment Variables**: Configure all required environment variables
3. **Deploy**: Connect your repository to Vercel and deploy

## 📄 License

This project is proprietary software owned by A.K. Traders.

## 🤝 Support

For technical support or questions, please contact the development team.

---

**A.K. Traders®** - Your trusted freight forwarding and customs clearance partner since 1974.