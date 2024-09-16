// grab the body of the HTML document
const htmlBody = document.querySelector('body');

const randomClickFunction = function () {
    // create an array of colors
    const colors = ["#002942", "#0Ca7DB", "red", "blue", "green", "yellow", "orange", "purple"];

    // generate a random number between 0 and the length of the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);

    // grab a random color from the colors array
    const randomColor = colors[randomIndex];

    // change the background color of the body to the random color
    htmlBody.style.backgroundColor = randomColor;

    console.log(randomColor);
};

// add an event listener to the body that listens for a click event
htmlBody.onclick = randomClickFunction;
