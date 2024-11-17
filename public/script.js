// Fetch the movies data from the API
async function fetchMovies() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/all-movies'); // Ensure the URL includes the protocol
        let data = await response.json();
        //console.log('my movies:', data); // Check the fetched data in console
        displayMovies(data);
    } catch (err) {
        console.log("An error occurred:", err);
    }
}

let container = document.getElementById('container');
let button = document.getElementById('myButton');
// Display the movies on the page
function displayMovies(data) {
    
    // Clear any existing content in the container before appending new data
    container.innerHTML = '';

    data.forEach(element => {
        let { title, price, runtime, releaseYear } = element;

        // Create main div for each movie
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('child')

        
        // Create title element
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        mainDiv.appendChild(titleElement);

        // Create price element
        const priceElement = document.createElement('h4');
        priceElement.textContent = `Price: $${price}`;
        mainDiv.appendChild(priceElement);

        // Create runtime element
        const runtimeElement = document.createElement('h4');
        runtimeElement.textContent = `Runtime: ${runtime} mins`;
        mainDiv.appendChild(runtimeElement);

        // Create release year element
        const releaseYearElement = document.createElement('h5');
        releaseYearElement.textContent = `Release Year: ${releaseYear}`;
        mainDiv.appendChild(releaseYearElement);

        // Append the movie div to the container
        container.appendChild(mainDiv);
    });
}


container.addEventListener('click', (event)=>{
//let movieDiv = event.target.closest('.movie');
    if(event.target && event.target.classList.contains('child')){
 // Get text values of children elements (h3, h4, h5) inside the clicked movie div
        const title = event.target.querySelector('h3').textContent;
        const price = event.target.querySelector('h4').textContent;
        const runtime = event.target.querySelectorAll('h4')[1].textContent; // Second h4 for runtime
        const releaseYear = event.target.querySelector('h5').textContent;
        // Log the values (or use them for other purposes)
        console.log(title);
        console.log(price);
        console.log(runtime);
        console.log(releaseYear);}
})

// Wait for the window to load before running fetchMovies
window.onload = fetchMovies;

// const movieDiv = event.target.closest('.movie');
//     if (movieDiv) {
//         // Get text values of children elements (h3, h4, h5) inside the clicked movie div
//         const title = movieDiv.querySelector('h3').textContent;
//         const price = movieDiv.querySelector('h4').textContent;
//         const runtime = movieDiv.querySelectorAll('h4')[1].textContent; // Second h4 for runtime
//         const releaseYear = movieDiv.querySelector('h5').textContent;

//         // Log the values (or use them for other purposes)
//         console.log('Movie Title:', title);
//         console.log('Price:', price);
//         console.log('Runtime:', runtime);
//         console.log('Release Year:', releaseYear);
//     }