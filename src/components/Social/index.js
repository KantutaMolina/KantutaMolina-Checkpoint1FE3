import "./style.css";
import { BsInstagram, BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

export default function Social() {
  return (
    <section className="content-sociais" id="social">
        <div className="contato">
            <h4>Conecte-se comigo:</h4>
        </div>
        
        <div className="redes">
        <a className="icons" target="_blank" href="https://www.instagram.com/kantuta_molina/">
          <BsInstagram size={40} color="F54F37" />
        </a>
        <a className="icons" target="_blank" href="https://github.com/KantutaMolina">
          <BsGithub size={40} color="070707" />
        </a>
        <a className="icons" target="_blank" href="https://www.linkedin.com/in/kantuta/">
          <BsLinkedin size={40} color="0a58caad" />
        </a>

        <a className="icons" target="_blank" href="mailto:kantuta23@gmail.com">
          <BsFillEnvelopeFill size={40} color="#e94f07" />
        </a>

        </div>

    
    </section>
  );
}
