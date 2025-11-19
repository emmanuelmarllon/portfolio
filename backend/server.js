import express from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Helper pra pegar texto seguro
function getText(prop) {
  if (!prop) return "";
  if (prop.type === "title" && prop.title.length > 0)
    return prop.title[0].plain_text;
  if (prop.type === "rich_text" && prop.rich_text.length > 0)
    return prop.rich_text[0].plain_text;
  return "";
}

// -------------------- Projects --------------------
app.get("/projects", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_DB_ID,
    });

    const projects = response.results.map((page) => {
      const p = page.properties;
      return {
        title: getText(p.Title),
        description_EN: getText(p.Description_EN),
        description_PT: getText(p.Description_PT),
        tech: getText(p.Tech),
        github: p.Github?.url || "",
        demo: p.Demo?.url || "",
        status: p.Status?.select?.name || "",
      };
    });

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------- Skills --------------------
app.get("/skills", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_SKILLS_DB_ID,
    });

    const skills = response.results.map((page) => {
      const s = page.properties;
      return {
        name: getText(s.Name),
        icon: getText(s.Icon),
      };
    });

    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------- About --------------------
app.get("/about", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_ABOUT_DB_ID,
    });

    const about = response.results.map((page) => {
      const a = page.properties;
      return {
        about_PT: getText(a.about_PT),
        about_EN: getText(a.about_EN),
        highlight1_pt: getText(a.highlight1_pt),
        highlight2_pt: getText(a.highlight2_pt),
        highlight3_pt: getText(a.highlight3_pt),
        highlight1_en: getText(a.highlight1_en),
        highlight2_en: getText(a.highlight2_en),
        highlight3_en: getText(a.highlight3_en),
      };
    });

    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
