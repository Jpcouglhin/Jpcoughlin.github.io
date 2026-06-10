// Example gallery.js
const galleryImages = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg'
];

const galleryContainer = document.querySelector('.gallery-wrapper');

galleryImages.forEach(src => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = 'Gallery Image';
    imgElement.classList.add('gallery-item');
    galleryContainer.appendChild(imgElement);
});

