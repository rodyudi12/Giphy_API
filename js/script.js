console.log("script.js loaded");


 const gifContainer = document.querySelector("#gif-container");
 const button = document.querySelector("#fetch-gif-btn");
 const searchInput = document.querySelector("#search-input");

 button.addEventListener("click", async function () {
   
   gifContainer.innerHTML = "";
   
   let searchTerm = searchInput.value.trim();
   const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=VBSOnqSX8c0Gd09ipgGZlNbiD1QeZTDu&q=${searchTerm}&limit=25`;
   let response = await fetch(endpoint);
   let data = await response.json();

   let images = data.data.map(gif => gif.images.original.url);

    console.log(images);

 for (let i = 0; i < images.length; i++) {
   gifContainer.innerHTML += `<img src=${images[i]} class = "col-3 mb-3">`;
 }
});

