import express from "express";
import cors from "cors";

import notesRouter from "./routes/notes.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

// Notes routes
app.use("/api/notes", notesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Centralized error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});