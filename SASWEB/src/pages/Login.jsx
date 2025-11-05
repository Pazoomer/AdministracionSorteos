import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "24rem" }}>
        <h1 className="text-center fw-bold mb-2">Login Page</h1>
        <p className="text-center text-muted mb-4">Esta es la página de inicio de sesión</p>

        {/* Formulario simple */}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Correo</label>
            <input type="email" className="form-control" placeholder="Correo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
            <input type="password" className="form-control" placeholder="Contraseña" required />
          </div>
          <button type="submit" className="btn btn-dark w-100 mb-2">Iniciar sesión</button>
        </form>

        <p className="text-center small mt-3">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="btn btn-link p-0 fw-bold text-decoration-none">
            Ir a Register
          </Link>
        </p>
      </div>
    </div>
  );
}
