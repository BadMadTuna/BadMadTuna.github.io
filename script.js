window.addEventListener('load', function() {
    const imageContainer = document.getElementById('image-container');
    const imageFolder = 'images/'; // Replace with the path to your image folder

    fetchImages(imageFolder);

    function fetchImages(folderPath) {
        fetch(folderPath)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDocument = parser.parseFromString(data, 'text/html');
                const images = htmlDocument.querySelectorAll('a');

                images.forEach(image => {
                    const imageSrc = image.getAttribute('href');
                    if (/\.(jpe?g|png|gif)$/i.test(imageSrc)) {
                        const imgElement = document.createElement('img');
                        imgElement.src = folderPath + imageSrc;
                        imgElement.alt = imageSrc;
                        imageContainer.appendChild(imgElement);
                    }
                });
            })
            .catch(error => {
                console.error('Error fetching images:', error);
            });
    }
});
