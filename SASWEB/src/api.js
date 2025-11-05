// src/api.js
const API_URL = "https://backend.com";

// Guardar token
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// Obtener token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Borrar token
export const removeToken = () => {
  localStorage.removeItem("token");
};

// Función para verificar token
export const verifyToken = async () => {
  const token = getToken();
  if (!token) return false;

  try {
    const res = await fetch(`${API_URL}/verify-token`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data.valid; // backend devuelve { valid: true/false }
  } catch (err) {
    console.error("Error verificando token:", err);
    return false;
  }
};

// Función para login
export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Login fallido");
  return res.json(); // { token, user }
};

// Función para registro
export const registerUser = async (name, email, password) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error("Registro fallido");
  return res.json(); // { token, user }
};

// Guardar sesión
export const saveSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

// Obtener sesión
export const getSession = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return { token, user };
};

// Limpiar sesión
export const clearSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
