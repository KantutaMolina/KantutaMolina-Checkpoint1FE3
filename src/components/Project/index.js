import "./style.css";
import { Card, Button } from "react-bootstrap";
import turismo  from "../../assets/img-cidade.png";
import seriesflix  from "../../assets/img-seriesflix.png";
import filmes  from "../../assets/img-filmes.png";


const data = [
  {
    id: "1",
    name: "Turismo Niterói",
    link: "https://github.com/KantutaMolina/Meucheckpoint1FE",
    image: turismo,
    linkSite: "https://kantutamolina.github.io/Meucheckpoint1FE/",
  },
  {
    id: "2",
    name: "Seriesflix",
    link: "https://github.com/KantutaMolina/Checkpoint3FE",
    image: seriesflix,
    linkSite: "https://kantutamolina.github.io/Checkpoint3FE/",
  },
  {
    id: "3",
    name: "Lista de filmes",
    link: "https://github.com/KantutaMolina/Checkpoint1FE2",
    image: filmes,
    linkSite: "https://kantutamolina.github.io/Checkpoint1FE2/",
  },
];

export default function Project() {
  return (
    <section id="project">
      <div className="square-project">
        
        <h1 className="title-project">Projetos</h1>
        
        <ul className="list-project">
          {data.map(({ image, name, link, linkSite }, index) => (
            <Card key={index} style={{ width: "18rem" }}>
              <Card.Img className="img-fluid capa" variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="container-button">
                  <a href={linkSite} target="_blank">
                    <Button variant="outline-warning">Site</Button>
                    
                  </a>
                  <a href={link} target="_blank">
                    <Button variant="outline-warning">GitHub</Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
