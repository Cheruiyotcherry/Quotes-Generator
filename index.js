// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const apiUrl = "https://api.quotable.io/random"



// async function getquote(url){
//   const response = await fetch(url);
//   const data = await response.json();
  

//   quote.innerHTML = data.content;
//   author.innerHTML = data.author;
// }

// getquote(apiUrl)

fetchData();
async function fetchData(){
  try{
  const response = await fetch("https://api.quotable.io/random");
     if (!response.ok){
      throw new Error("Failed to fetch data");
     }
     const data = await response.json();
     console.log(data);
  }
  catch(error){
    console.log("error");

  }
}