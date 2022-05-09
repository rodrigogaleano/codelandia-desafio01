import React from "react"; // Importa o React
import Post from "./Post"; //Importa o componente Post

function Posts() { //Cria o componente Posts
    return (
        <div>
            <ul> {/*Cria uma lista para exibir o componente post varias vezes */}
                <li><Post /></li> 
                <li><Post /></li>
                <li><Post /></li>
                <li><Post /></li>
            </ul>
        </div>
    );
}

export default Posts; ///Exporta o componente Posts