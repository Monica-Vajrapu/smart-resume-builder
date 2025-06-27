import express from "express";
import cors from "cors";
app.use(cors());
import path from "path";
import { fileURLToPath  } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve fronten
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
  origin: "https://basic-resume.onrender.com", // your frontend link
  methods: ["POST"],
}));
app.use(express.json());

// Test summary generator (for now)
app.post("/api/ai-summary", (req, res) => {
  const { role, experience, skills } = req.body;
  console.log("✅ Received:", req.body);
  res.json({
    summary: `Experienced ${role} with ${experience} years in ${skills.join(', ')}.`
  });
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
