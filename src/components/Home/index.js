import "./style.css";

import perfil from "../../assets/foto-perfil.jpg";

export default function Home() {
  return (

    <section id="home">
      <div className="container-home container">
     
      <div className="container-img">
          <img className="foto-perfil" src={perfil} alt="foto perfil" />
        </div>
       
        <div className="texto-home">
          <h3>Hey, it’s me Kantuta!</h3>
          <p>Olá, meu nome é Kantuta Molina! Estou na jornada para me tornar uma futura Full Stack Dev, sou brasileira mas atualmente moro na
            Costa Rica.</p>
        </div>

        
      </div>
    </section>
  );
}
