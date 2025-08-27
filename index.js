const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON body
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello from your API!" });
});

// AI endpoint
app.post("/ask", (req, res) => {
  const question = req.body.question; // Read question from JSON body
  if (!question) return res.status(400).json({ error: "No question provided" });

  // Here you can link your AI logic
  const answer = `Answer to: ${question}`;
  res.json({ answer });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
