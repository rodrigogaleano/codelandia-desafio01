import React from "react"; //Importa o React
import { BiHeart } from "react-icons/bi"; //Importa o ícone de coração

function Post() {
    return (
        <div className="card"> {/*Div que contem o card */}
            <div className="card-header"> {/*Div que contem o cabeçalho do post */}
                <p>08 de mai, 2022</p>
                <BiHeart size={24} color='#574AEB' /> {/*Ícone de coração */}
            </div>
            <div className="card-body">
                <h2>Título do post</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
    );
}

export default Post; //Exporta o componente Post