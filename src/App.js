import './App.css'; //Importa o CSS
import Header from './components/Header'; //Importa o componente Header
import Posts from './components/Posts'; //Importa o componente Posts

function App() { //Cria a função App
  return ( 
    <div className="App">
       <Header></Header> {/*Renderiza o componente Header */}
      <Posts></Posts> {/*Renderiza o componente Posts */}
    </div>
  );
}

export default App; //Exporta o componente App