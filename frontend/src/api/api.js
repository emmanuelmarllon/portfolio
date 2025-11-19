// src/api/api.js

const BASE_URL = "https://portfolio-1ck9.onrender.com"; // ou o domínio do teu back quando subir

export async function getProjects() {
  try {
    const res = await fetch(`${BASE_URL}/projects`);
    if (!res.ok) throw new Error("Erro ao buscar projetos");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getSkills() {
  try {
    const res = await fetch(`${BASE_URL}/skills`);
    if (!res.ok) throw new Error("Erro ao buscar skills");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getAbout() {
  try {
    const res = await fetch(`${BASE_URL}/about`);
    if (!res.ok) throw new Error("Erro ao buscar about");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
