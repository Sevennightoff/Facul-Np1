async function gerarVersiculo() {
    const livros = ["john", "psalms", "proverbs", "romans", "matthew"];
    const livro = livros[Math.floor(Math.random() * livros.length)];
    const capitulo = Math.floor(Math.random() * 10) + 1;
    const versiculo = Math.floor(Math.random() * 10) + 1;
  
    const url = `https://bible-api.com/${livro}+${capitulo}:${versiculo}?translation=almeida`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      const texto = data.text;
      const ref = data.reference;
  
      document.getElementById('versiculo').innerHTML = `
        <strong>${ref}</strong><br>${texto}
      `;
    } catch (error) {
      document.getElementById('versiculo').innerText = 'Ocorreu um erro ao buscar o versículo 🙁';
      console.error('Erro ao buscar versículo:', error);
    }
  }
  