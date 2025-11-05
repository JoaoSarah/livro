import './App.css'

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="header">
        <h1 className="logo">📚 Biblioteca de Histórias</h1>
        <nav>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Livros</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Estante de livros"
        />
      </section>

      {/* Introdução */}
      <section className="intro">
        <h2>Bem-vindo(a) ao nosso site!</h2>
        <p>
          Este é um espaço dedicado à paixão por livros, histórias e imaginação.
          Criado por <strong>João Setubal</strong> e <strong>Sarah Victoria</strong>,
          o site compartilha resenhas, recomendações e reflexões sobre o universo literário.
        </p>
      </section>
    </div>
  )
}

export default App
