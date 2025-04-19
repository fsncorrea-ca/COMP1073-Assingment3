document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.load-beach');
    const section = document.querySelector('.results');
  
    // API key do Unsplash
    const accessKey = 'ELFxdKyY7ohGjdjadQ3I-eR0cg2WkCx1uTBv26B712Y'; //
  
    button.addEventListener('click', fetchBeachImage);
  
    function fetchBeachImage() {
      const url = `https://api.unsplash.com/photos/random?query=beach&orientation=landscape&client_id=${accessKey}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
  
          // Clear the content
          section.innerHTML = '';
  
          // To create and show the image
          const img = document.createElement('img');
          img.src = data.urls.regular;
          img.alt = data.alt_description || 'Beach image';
  
          // To create and show the photographer name
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
  