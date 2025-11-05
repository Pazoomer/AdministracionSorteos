import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "24rem" }}>
        <h1 className="text-center fw-bold mb-2">Register Page</h1>
        <p className="text-center text-muted mb-4">Esta es la página de registro</p>

        {/* Formulario simple */}
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nombre completo" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Correo" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Contraseña" required />
          </div>
          <button type="submit" className="btn btn-success w-100 mb-2">Registrarse</button>
        </form>

        <p className="text-center small mt-3">
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="btn btn-link p-0 fw-bold text-decoration-none">
            Ir a Login
          </Link>
        </p>
      </div>
    </div>
  );
}
