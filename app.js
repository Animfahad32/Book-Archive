let searchInput = document.getElementById("searchInput") ;
const searchBtn = document.getElementById("search-btn");
const container = document.getElementById("country-container");



searchBtn.addEventListener("click", () => {
    const search =  searchInput.value;
    searchInput.value = '';
    container.innerHTML= '';
    
    // Api Url 
    const url = `https://openlibrary.org/search.json?q=${search}`; 
    fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data));
   
    
 
});



// Display books Function 

const displayBooks = books => {
    const searchTotal = document.getElementById("search-total");

    // Error Handling 
    searchTotal.classList.add('bg-success');
    searchTotal.classList.remove('d-none');
    searchTotal.innerText = `${books.numFound} Search Result Found
        ${books.docs.length} Showing Results
    `;
 
    if(books.numFound === 0){
       
        searchTotal.classList.add('bg-danger');
    }else{
        searchTotal.classList.remove('bg-danger');
    }
  
//    Getting a book result from data 
    books.docs.forEach(book => {
      
      const div =  document.createElement('div');
      div.classList.add('col-lg-3');

      let cover_i = book.cover_i;
      let img = `http://covers.openlibrary.org/b/id/${book.cover_i }-M.jpg`;
      if (cover_i === undefined){
          img = "img.png"
      }
       
       div.innerHTML = `
      
     
       <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${book.text[1]}</h5>
                <p class="card-text">Author Name : ${book.author_name}</p>
                <p class="card-text">Publisher Name : ${book.publisher[0]}</p>
                <p class="card-text">Publish Date : ${book.first_publish_year}</p>

                
            </div>
        </div>
       
       `;

        container.appendChild(div);

    
    })
}



