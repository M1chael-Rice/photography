fetch('images.json')
  .then(response => response.json())
  .then(images => {

    const gallery = document.getElementById('gallery');

    images.forEach(image => {

      const img = document.createElement('img');

      img.src = `img/bicester-scramble-apr26/gallery/${image}`;

      img.loading = 'lazy';

      gallery.appendChild(img);

    });

  });