import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CadastroForm } from './components/CadastroForm'; // Importação do novo componente
import './App.css';

function App() {
  const [abaAtiva, setAbaAtiva] = useState('home');

  const dadosArena = {
    tag: 'ESPORTES DE AREIA',
    titulo: 'Esporte, diversão e boas energias.',
    descricao: 'Um espaço completo para praticar Beach Tennis, Vôlei de Praia e Futevôlei.',
    textoBotao: 'Quero me cadastrar',
    imagemUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <div className="hero-container">
      <Navbar 
        logoInicio="Arena" 
        logoDestaque="Sand & Sun" 
        abaAtiva={abaAtiva} 
        setAbaAtiva={setAbaAtiva} 
      />

      {abaAtiva === 'home' && (
        <HeroBanner 
          tag={dadosArena.tag}
          titulo={dadosArena.titulo}
          descricao={dadosArena.descricao}
          textoBotao={dadosArena.textoBotao}
          imagemUrl={dadosArena.imagemUrl}
          onCliqueBotao={() => setAbaAtiva('cadastro')}
        />
      )}

      {abaAtiva === 'sobre' && (
        <div className="conteudo-secao">
          <h2>Sobre a Arena</h2>
          <p>Oferecemos estrutura profissional para modalidades de areia.</p>
        </div>
      )}

      {abaAtiva === 'cadastro' && (
        <CadastroForm />
      )}
    </div>
  );
}

export default App;