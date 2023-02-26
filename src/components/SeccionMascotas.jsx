import React from 'react';
import perro1 from '../images/perro1.jpg';
import perro2 from '../images/perro2.jpg';
import perro3 from '../images/perro3.jpg';
const SeccionMascotas = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="mb-4">Nuestras Mascotas</h2>
            <p className="lead mb-0">
              ¡Aquí puedes ver a algunas de las mascotas que actualmente se encuentran en adopción! Si estás interesado en
              adoptar, no dudes en ponerte en contacto con nosotros.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="card">
              <img src={perro1} alt="Mascota" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title mb-0">Firulais</h5>
                <p className="card-text text-muted">Perro raza Beagle</p>
                <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="card">
              <img src={perro2} alt="Mascota" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title mb-0">Marta</h5>
                <p className="card-text text-muted">Perro raza Mestiza</p>
                <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div className="card">
              <img src={perro3} alt="Mascota" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title mb-0">Lulu</h5>
                <p className="card-text text-muted">Perro raza Mestiza</p>
                <a href="#" className="btn btn-primary">Más información</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionMascotas;
