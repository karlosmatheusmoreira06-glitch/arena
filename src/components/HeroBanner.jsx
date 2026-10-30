import './HeroBanner.css'; // Importação do CSS do HeroBanner
// src/components/HeroBanner.jsx/ Adicione 'export' aqui no início
export const HeroBanner = ({ tag, titulo, descricao, textoBotao, imagemUrl, onCliqueBotao }) => {
  return (
    <main className="hero-content">
      <div className="hero-text-section">
        <span className="tagline">{tag}</span>
        <h1 className="hero-title">{titulo}</h1>
        <p className="hero-description">{descricao}</p>
        <button className="btn-cta" onClick={onCliqueBotao}>
          {textoBotao}
        </button>
      </div>

      <div className="hero-image-section">
        <img 
          src={imagemUrl} 
          alt="Arena de esportes de praia" 
          className="hero-image"
        />
      </div>
    </main>
  );
};