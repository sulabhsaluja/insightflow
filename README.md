# Sales Insight Automator

A full-stack React + Node.js application for uploading CSV and Excel files, extracting data insights with AI, and reviewing generated summaries in a dashboard workflow.

This project combines a Vite frontend with an Express API backend, MongoDB persistence, authentication, AI-powered analysis, and email delivery for generated reports.

## Features

- Upload CSV and Excel files from the web app
- Parse spreadsheet data and summarize trends, anomalies, and key insights
- Use AI-generated analysis with Groq
- Save summaries and uploaded files to user history
- User authentication and protected routes
- Email report delivery when an email address is supplied
- Browse previous summaries and open detailed report views
- Responsive React UI with motion-based transitions

## Tech Stack

Frontend
- React 19
- Vite
- React Router
- Framer Motion
- React Markdown
- Axios

Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT authentication
- Multer for file uploads
- Swagger for API docs
- XLSX for spreadsheet parsing

AI and utilities
- Groq SDK
- dotenv
- Nodemailer / Brevo integration

## Project Structure

```text
sales-insight-automater/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── README.md
└── .gitignore
```

## Prerequisites

Before running the app, install:

- Node.js 18+
- npm
- MongoDB connection string
- Groq API key
- Optional: Brevo API key and sender email for email delivery

## Backend Setup

1. Open the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment template:

```bash
cp .env.example .env
```

4. Update the variables in `.env`:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_sender_email
BREVO_SENDER_NAME=InsightFlow
```

5. Start the backend server:

```bash
npm start
```

The API should run on:

```text
http://localhost:8000
```

Swagger docs are available at:

```text
http://localhost:8000/docs
```

## Frontend Setup

1. Open the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will usually run on:

```text
http://localhost:5173
```

## Running Both Together

Open two terminals:

Terminal 1:
```bash
cd backend
npm start
```

Terminal 2:
```bash
cd frontend
npm run dev
```

## Application Flow

1. User signs up or logs in
2. User uploads a CSV or Excel file
3. Backend parses the file and sends the data to the AI service
4. The app generates a markdown summary of trends and insights
5. The result is displayed on the front end and can be saved to history
6. Optional email delivery sends the summary to the specified recipient

## Notes

- Uploaded files are cleaned up after processing completes.
- If a user is not authenticated, file upload processing still works, but history saving is skipped.
- The frontend is configured to hit the backend at `http://localhost:8000/api`.

## Future Enhancements

- Improved charting and visual analytics
- Better file-type validation and schema detection
- Multi-file batch processing
- More detailed dashboard reporting
- Export to PDF/CSV/JSON

## License

This project does not currently declare a license. If needed, add one before publishing or distributing the code.
