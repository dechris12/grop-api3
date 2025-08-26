const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Example API route
app.get("/", (req, res) => {
  res.json({ message: "Hello from your API!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
