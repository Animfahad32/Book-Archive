const searchInput = document.getElementById("searchInput") ;
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    const search =  searchInput.value;
    // Api Url 
    const url = `http://openlibrary.org/search.json?q=${search}`; 
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs));
    
 
});


const displayBooks = books => {
    const container = document.getElementById("books");
    books.forEach(book => {
        
      const div =  document.createElement('div');
       
       div.innerHTML = `
       <h1>${book.first_publish_year}</h1>
       
       `;

        container.appendChild(div);
    })
}

