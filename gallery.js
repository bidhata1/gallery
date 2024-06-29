
/*const images=[
    'images/heello.jpg',
    'images/hi.jpg',
    'images/hii.jpg',
    'images/hiii.jpg'
];

let currentIndex= 0;

const photoElement=document.getElementById('current-photo');
const previousButton=document.getElementById('previous');
const nextButton=document.getElementById('next');

function updateImage(){
    photoElement.src=images[currentIndex];
}

//Eventlistener for button

previousButton.addEventListener('click', ()=>{
    currentIndex=(currentIndex>0)? currentIndex-1 :images.length-1;
    updateImage();
});

nextButton.addEventListener('click', ()=>{
    currentIndex=(currentIndex<images.length-1) ? currentIndex+1 : 0;
    updateImage();
});

updateImage();
*/
document.addEventListener('DOMContentLoaded', () => {
    // Array of image paths
    const images = [
       'images/flower1.jpg',
        'images/flower2.jpg',
        'images/flower3.jpg',
        'images/flower4.jpg',
        'images/flower5.jpg',
        'images/flower6.jpg',
        'images/flower7.jpg',
        'images/flower8.jpg'
    ];

    // Initialize current image index
    let currentIndex = 0;

    // Get references to DOM elements
    const photoElement = document.getElementById('current-photo');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');

    // Check if the elements are found
    if (!photoElement) {
        console.error('Current photo element not found');
        return;
    }
    if (!previousButton) {
        console.error('Previous button not found');
        return;
    }
    if (!nextButton) {
        console.error('Next button not found');
        return;
    }

    // Function to update the image source
    function updateImage() {
        if (photoElement) {
            photoElement.src = images[currentIndex];
        }
    }

    // Event listeners for buttons
    previousButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });

    // Initial update of the image
    updateImage();
});
