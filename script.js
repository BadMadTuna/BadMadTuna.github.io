window.addEventListener('load', function() {
    const imageContainer = document.getElementById('image-container');
    const imageFolder = 'images/'; // Folder with images in the same directory

    displayImages(imageFolder);

    function displayImages(folderPath) {
        const imgExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        for (let i = 1; ; i++) {
            let found = false;
            for (const ext of imgExtensions) {
                const imageSrc = `${folderPath}image${i}.${ext}`;
                const imgElement = document.createElement('img');
                imgElement.src = imageSrc;

                imgElement.onerror = function() {
                    // If the image doesn't exist, move to the next extension
                    if (ext === imgExtensions[imgExtensions.length - 1]) {
                        found = true;
                    }
                };

                imgElement.onload = function() {
                    // If the image exists, display it
                    imageContainer.appendChild(imgElement);
                    found = true;
                };

                if (found) {
                    break;
                }
            }

            if (!found) {
                // No more images found, exit the loop
                break;
            }
        }
    }
});

