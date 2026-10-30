import './Navbar.css'; // Importação do CSS do Navbar
export function Navbar({ logoInicio, logoDestaque, abaAtiva, setAbaAtiva }) {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-dark">{logoInicio} </span>
        <span className="logo-teal">{logoDestaque}</span>
      </div>
      
      <nav className="nav-links">
        <button 
          className={`nav-item ${abaAtiva === 'home' ? 'ativo' : ''}`}
          onClick={() => setAbaAtiva('home')}
        >
          Home
        </button>
        <button 
          className={`nav-item ${abaAtiva === 'sobre' ? 'ativo' : ''}`}
          onClick={() => setAbaAtiva('sobre')}
        >
          Sobre
        </button>
        <button 
          className="btn-cadastro-nav"
          onClick={() => setAbaAtiva('cadastro')}
        >
          Cadastro
        </button>
      </nav>
    </header>
  );
}

// Garante compatibilidade caso seja importado como default
export default Navbar;