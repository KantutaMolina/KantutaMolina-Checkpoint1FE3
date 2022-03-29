import "./style.css";

import {SiStarship} from "react-icons/si";

export default function Header(){

    function scrollToComponent(id){
        document.getElementById(id).scrollIntoView();
    }

    return (
        <header>

            <div className="container d-flex justify-content-between">

                <div><SiStarship size={60} color="whitesmoke"/></div>

                <ul className = "menu">

                <li className = "item-menu" onClick={()=>scrollToComponent('home')}>Home</li>
                <li className = "item-menu"onClick={() =>scrollToComponent('about')}>Sobre</li>
                <li className = "item-menu" onClick={()=>scrollToComponent('project')}>Projetos</li>
                <li className = "item-menu"onClick={() =>scrollToComponent('social')}>Contato</li>
                
                </ul>
            </div>
        </header>
    );
}