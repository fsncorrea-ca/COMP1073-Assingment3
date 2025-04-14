document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.load-beach');
    const section = document.querySelector('.results');
  
    // Coloque aqui sua chave da API do Unsplash
    const accessKey = '8GWyIrOU3traMKukBGzHnnBRxTG2VAYi'; // 👈 substitua por sua própria chave
  
    button.addEventListener('click', fetchBeachImage);
  
    function fetchBeachImage() {
      const url = `https://api.unsplash.com/photos/random?query=beach&orientation=landscape&client_id=${accessKey}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
  
          // Limpar conteúdo anterior
          section.innerHTML = '';
  
          // Criar e mostrar imagem
          const img = document.createElement('img');
          img.src = data.urls.regular;
          img.alt = data.alt_description || 'Beach image';
  
          // Criar e mostrar nome do fotógrafo
          const photographer = document.createElement('p');
          photographer.textContent = `Photo by ${data.user.name}`;
          photographer.classList.add('photographer-info');
  
          section.appendChild(img);
          section.appendChild(photographer);
        })
        .catch(error => {
          console.error('Erro ao buscar imagem de praia:', error);
        });
    }
  });
  