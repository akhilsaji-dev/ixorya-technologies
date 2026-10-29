# Ixoria Technologies Website

A modern, high-performance web platform for **Ixoria Technologies** built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root by copying the provided `.env.example`:

```bash
cp .env.example .env.local
```

> **Note:** `.env.local` is ignored by Git and should never be committed to source control.

---

## ⚙️ Environment Configuration Guide

Open `.env.local` and configure the following variables:

```env
# -----------------------------------------------------------------------------
# Ixoria Technologies Branding
# -----------------------------------------------------------------------------
NEXT_PUBLIC_SITE_NAME=Ixoria Technologies
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/ixorya.codes/

# -----------------------------------------------------------------------------
# Contact Information
# -----------------------------------------------------------------------------
# Business phone number (10+ digits for click-to-call)
NEXT_PUBLIC_CONTACT_PHONE=7909202767

# Business recipient email for contact form enquiries (server-only)
CONTACT_EMAIL=ixoryatechnologies@gmail.com

# -----------------------------------------------------------------------------
# WhatsApp Integration
# -----------------------------------------------------------------------------
# Complete international phone number without +, spaces, or dashes.
# Example for India (+91): 917909202767 or 10-digit 7909202767
NEXT_PUBLIC_WHATSAPP_NUMBER=7909202767

# -----------------------------------------------------------------------------
# Resend Email Service (Server-Side Only)
# -----------------------------------------------------------------------------
# Resend API Key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Verified sender email address configured in Resend (e.g. notifications@yourdomain.com).
# For testing without a custom domain, you can use: onboarding@resend.dev
CONTACT_FROM_EMAIL=
```

### Detailed Setup Instructions

#### 1. Configuring the Business Email (`CONTACT_EMAIL`)
- Set `CONTACT_EMAIL` to the inbox where you want to receive visitor enquiries submitted through the contact form (e.g., `ixoryatechnologies@gmail.com`).
- This variable is kept server-only to protect your email from scrapers and spam bots.

#### 2. Obtaining & Configuring the Resend API Key (`RESEND_API_KEY`)
1. Create a free account at [Resend](https://resend.com).
2. Go to the [API Keys](https://resend.com/api-keys) dashboard.
3. Click **Create API Key**, give it a name (e.g., `Ixoria Contact Form`), and grant it "Sending access".
4. Copy the generated key (starts with `re_...`) and paste it as `RESEND_API_KEY` in `.env.local`.

#### 3. Configuring the Verified Sender Email (`CONTACT_FROM_EMAIL`)
- In production, add and verify your custom domain in the [Resend Domains Dashboard](https://resend.com/domains).
- Once verified, set `CONTACT_FROM_EMAIL` to an address on your domain (e.g., `Ixoria Technologies <contact@ixoriatechnologies.com>`).
- If left empty during initial development, the system automatically falls back to `Ixoria Technologies <onboarding@resend.dev>` for testing with your registered Resend account.

#### 4. Configuring the WhatsApp Number (`NEXT_PUBLIC_WHATSAPP_NUMBER`)
- Enter the complete phone number for your WhatsApp business account.
- The system automatically removes spaces, hyphens, and brackets.
- A pre-filled enquiry message is automatically encoded into the generated `https://wa.me/...` URL so visitors can chat immediately.
- If the number is incomplete or missing, WhatsApp contact links are safely hidden from the UI.

#### 5. Restarting the Development Server
Next.js loads environment variables when the server boots. If you modify `.env.local`:
1. Stop the running dev server in your terminal (`Ctrl + C`).
2. Run `npm run dev` to restart with the updated variables.

---

## 🛠️ Development & Production Scripts

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run ESLint validation
npm run lint

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🔒 Security Best Practices

- **Never prefix server secrets** (such as `RESEND_API_KEY`) with `NEXT_PUBLIC_`.
- Always verify `.env.local` remains in `.gitignore`.
- If `.env.local` was ever tracked by accident in Git, remove it from git tracking without deleting the local file:
  ```bash
  git rm --cached .env.local
  git commit -m "chore: untrack .env.local"
  ```
