import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const DB_FILE = path.join(process.cwd(), "database.json");

app.use(express.json());

// Initialize and read/write DB
function getLeads() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ leads: [] }, null, 2), "utf8");
    return [];
  }
  try {
    const data = JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
    return data.leads || [];
  } catch (err) {
    console.error("Error reading database:", err);
    return [];
  }
}

function saveLead(lead: any) {
  try {
    const leads = getLeads();
    leads.unshift(lead);
    fs.writeFileSync(DB_FILE, JSON.stringify({ leads }, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error writing database:", err);
    return false;
  }
}

// REST API endpoints
app.post("/api/enroll", (req, res) => {
  const { fullName, email, phone, selectedCourse, notes } = req.body;

  if (!fullName || !email || !phone || !selectedCourse) {
    return res.status(400).json({ 
      success: false, 
      message: "Por favor, preencha todos os campos obrigatórios." 
    });
  }

  const newLead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    fullName,
    email,
    phone,
    selectedCourse,
    notes: notes || "",
    submittedAt: new Date().toISOString(),
    status: "pending"
  };

  const saved = saveLead(newLead);
  if (saved) {
    return res.status(201).json({
      success: true,
      message: "Inscrição recebida com sucesso! Em breve, nosso Concierge entrará em contato para sua entrevista.",
      lead: newLead
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Erro ao processar sua inscrição. Por favor, tente novamente mais tarde."
    });
  }
});

// For demonstration and admin review of candidates
app.get("/api/leads", (req, res) => {
  const leads = getLeads();
  res.json({ success: true, leads });
});

// Mount Vite middleware / static files serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Académie Coiffure Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer().catch(err => {
  console.error("Failed to start Académie Coiffure Server:", err);
});
