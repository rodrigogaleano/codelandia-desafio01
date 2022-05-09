import React from "react"; //Importa o React
import { BiSearch } from 'react-icons/bi'; //Importa o ícone de pesquisa

function Header() {
  return (
    <header>
      <div className="container">
        <div className='topo'> {/*Div que contem o topo do cabeçalho, logo e texto */}
          <h1>Codelândia</h1>
          <h1>blog</h1>
        </div>
        <div className='pesquisa'> {/*Div que contem o input e o botão de pesquisa */}
          <BiSearch size={24} color='white' /> {/*Icone de pesquisa */}
          <form> {/*Formulário de pesquisa */}
            <input type='text' placeholder='Pesquisar no blog' />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header; //Exporta o componente Header