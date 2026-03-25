console.log("script.js loaded");

 const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=VBSOnqSX8c0Gd09ipgGZlNbiD1QeZTDu&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

 async function fetchGifs() {
    let response = await fetch(endpoint);
    let data = await response.json();

    let images = data.data.map(gif => gif.images.original.url);

    console.log(images);
 }

fetchGifs();
