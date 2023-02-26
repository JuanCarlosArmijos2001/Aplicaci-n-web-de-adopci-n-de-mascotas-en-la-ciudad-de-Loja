import React from "react";
import miImagen from '../images/perros.jpg';
const SeccionPresentacion = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold mb-4">Bienvenidos a Adopta-Loja</h1>
            <p className="lead mb-4">
              Nos dedicamos a ayudar a las mascotas sin hogar a encontrar un
              hogar amoroso y cálido.
            </p>
            <button className="btn btn-primary btn-lg px-4">
              Adoptar una mascota
            </button>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img
              className="img-fluid rounded-circle"
              src={miImagen}
              alt="Mascotas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionPresentacion;
