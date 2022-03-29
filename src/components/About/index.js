import "./style.css";

export default function About() {
  return (
    <section className="container" id="about">

      <h1 className="title-about">Sobre</h1>
      
      <div className="content-about">
        <div className="box-about">
          <h3 className="subtitle-about">Código</h3>
          <p id="description">
            Estou me desenvolvendo em HTML, CSS, JavaScript, MySQL, NodeJS, Java e React. Atualmente estou
            aprendendo UX Design, com o objetivo de gerar rapidamente interfaces
            amigáveis e visualmente atraentes.
          </p>
          
          
          <div className="ferramentas">
            <i class="devicon-html5-plain-wordmark colored"></i>
            
            <i class="devicon-css3-plain-wordmark colored"></i>

            <i class="devicon-mysql-plain-wordmark colored"></i>

            <i class="devicon-javascript-plain"></i>
            
            <i class="devicon-nodejs-plain-wordmark"></i>
        
            <i class="devicon-java-plain-wordmark colored"></i>
          
            <i class="devicon-react-original-wordmark"></i>        
          
          </div>
            

          
                    
        </div>
      
        <div className="box-about">
          <h3 className="subtitle-about">Interesses</h3>
          <p id="description">
          Tecnologia, desenvolvimento web, viagens, música, games, pets e principalmente ajudar pessoas!
          </p>
        </div>
      </div>
    </section>
  );
}
