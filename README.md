# Bank Balance Microservice - Technical Challenge

## 🎯 Your Mission

You'll be building a **bank balance microservice** that handles:

- **Account creation and balance inquiries**
- **Credit and debit operations**
- **Concurrency handling and data integrity**

You'll demonstrate your skills with **Node.js + TypeScript + Express** and **Knex.js + MySQL**.

**Estimated duration:** 35-45 minutes

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MySQL server running locally
- Basic knowledge of TypeScript and Express

### Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create MySQL database:**
   ```sql
   CREATE DATABASE bank_interview;
   ```

3. **Update database configuration:**
   Edit `src/knexfile.ts` with your MySQL credentials

4. **Run migrations:**
   ```bash
   npm run migrate
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:3000`

---

## 📋 What You'll Build

### Step 1: Get Started (5-8 min)
✅ Project structure is ready
✅ Dependencies are configured
- **Your task:** Verify the setup works and test the health endpoint: `GET /health`

### Step 2: Basic Account Operations (8-10 min)
**Build these endpoints:**
- `POST /accounts` → create a new account with zero balance
- `GET /accounts/:id` → retrieve account details and current balance

### Step 3: Money Operations (10-12 min)
**Add these endpoints:**
- `POST /accounts/:id/credit` → add money to account
- `POST /accounts/:id/debit` → remove money from account

**Important rules:**
- Never allow negative balances
- Use Knex transactions for data integrity

### Step 4: Expose the Problem (8-10 min)
**Create a race condition demonstration:**
- Build an endpoint `/simulate-race` that shows what happens with concurrent operations
- Use multiple simultaneous debit requests on the same account
- Demonstrate the data inconsistency issue

### Step 5: Fix the Problem (8-10 min)
**Implement proper concurrency control:**
- Use `SELECT ... FOR UPDATE` to prevent race conditions
- Ensure operations are properly serialized
- Verify your fix works with the race simulation

---

## 🏗️ Project Structure

```
src/
├── index.ts              # Express server entry point
├── knexfile.ts          # Knex database configuration
├── database/
│   └── connection.ts    # Database connection
├── types/
│   └── index.ts         # TypeScript interfaces
migrations/
└── 001_create_accounts_table.ts
```

---

## 🧪 Testing Your Work

Test your endpoints manually or run the provided test suite:
```bash
npm test
```

You can also test your API endpoints using:
- **cURL commands**
- **Postman/Insomnia**  
- **Your browser** (for GET requests)

Example test: `curl http://localhost:3000/health`

---

## 📊 Database Schema

```sql
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  balance DECIMAL(10, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production build
- `npm run migrate` - Run database migrations
- `npm run rollback` - Rollback last migration
- `npm test` - Run tests

---

## ✅ What We're Looking For

| Key Areas | What This Means |
|-----------|-----------------|
| **Database Transactions** | Proper use of Knex transactions to ensure data consistency |
| **Concurrency Handling** | Understanding and solving race condition problems |
| **Code Organization** | Clean, readable, and well-structured code |
| **Problem-Solving** | Clear thinking and explanation of your approach |

---

## 💡 Code Examples & Hints

### Using Knex Transactions:
```typescript
await db.transaction(async trx => {
  // All your database operations here
  // If anything fails, the entire transaction rolls back
});
```

### Preventing Race Conditions:
```typescript
// Lock the row while reading and updating
const account = await trx('accounts')
  .where('id', accountId)
  .forUpdate()  // This prevents other transactions from modifying this row
  .first();
```

### Simulating Concurrent Requests:
```typescript
// Create multiple simultaneous requests to test race conditions
const promises = Array(10).fill(null).map(() => 
  fetch(`http://localhost:3000/accounts/${accountId}/debit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: 10 })
  })
);

const results = await Promise.all(promises);
```

---

## 🎯 You'll Know You're Successful When...

- [ ] All your endpoints respond correctly and handle errors gracefully
- [ ] You can demonstrate the race condition problem with your simulation
- [ ] Your transaction implementation prevents data inconsistencies
- [ ] Your code is organized and easy to follow
- [ ] You can explain your design decisions and trade-offs

---

## 💬 Questions & Discussion

Feel free to:
- **Ask questions** about requirements or clarify expectations
- **Explain your thought process** as you work through the problems
- **Discuss alternative approaches** and their trade-offs
- **Share any challenges** you encounter along the way

---

**Let's build something great! 🚀** 