let movies = [];
let a = fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json())
.then(data =>{
    movies = data;
})
return movies;
console.log(a);
console.log(movieDetails());
function generateMovieTable(){
        
    var noOfMovies = movies.length;
    
    if(noOfMovies>0){
        
        var table = document.createElement("table");
        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');
        

        var col = []; 
        for (var i = 0; i < noOfMovies; i++) {
            for (var key in movies[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        
        var tHead = document.createElement("thead");	
            

        var hRow = document.createElement("tr");
        
        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);
        
        // CREATE TABLE BODY .
        var tBody = document.createElement("tbody");	
        
        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (var i = 0; i < noOfContacts; i++) {
        
                var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
                
                
                for (var j = 0; j < col.length; j++) {
                    var td = document.createElement("td");
                    td.innerHTML = myContacts[i][col[j]];
                    bRow.appendChild(td);
                }
                tBody.appendChild(bRow)

        }
        table.appendChild(tBody);	
        
        
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("movies");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        
    }	
}

  