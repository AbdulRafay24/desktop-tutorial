// ---------------------- Fetching Data from Url --------------------------------------------------------------------//
async function gene() {
  let check = JSON.parse(localStorage.getItem("myMovies"));
  if (!check) {
    const a = await fetch("https://ghibliapi.herokuapp.com/films");
    const response = await a.json();
    localStorage.setItem("myMovies", JSON.stringify(response));
    generateMovieTable(response);
  } else {
    generateMovieTable(check);
  }
}
gene();
// ---------------------- Generate Movie Table Funtion Start--------------------------------------------------------------------//
function generateMovieTable(movies) {
  let noOfMovies = movies.length;

  if (noOfMovies > 0) {
    const table = document.getElementById("table");
    table.setAttribute("class", "tableStyle");

    let col = [];
    for (let i = 0; i < noOfMovies; i++) {
      for (let key in movies[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    const tHead = document.createElement("thead");

    const hRow = document.createElement("tr");

    table.appendChild(tHead);

    // CREATE TABLE BODY .
    const tBody = document.getElementById("tBody");

    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (let i = 0; i < noOfMovies; i++) {
      const bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
      bRow.setAttribute("id", "myRow");

      for (let j = 0; j < col.length; j++) {
        const td = document.createElement("td");
        td.innerHTML = movies[i][col[j]];
        bRow.appendChild(td);
      }

      // making rows for Edit & Delete Button
      const rowED = document.createElement("td");
      bRow.appendChild(rowED);

      const buttonEdit = document.createElement("button");
      buttonEdit.setAttribute("class", "Edit");
      buttonEdit.innerHTML = "Edit";
      buttonEdit.setAttribute("onclick", "redirectEditPage(this)");
      rowED.appendChild(buttonEdit);

      const buttonDel = document.createElement("button");
      buttonDel.setAttribute("class", "Delete");
      buttonDel.innerHTML = "Delete";
      buttonDel.setAttribute("onclick", "delRow(this)");
      rowED.appendChild(buttonDel);

      tBody.appendChild(bRow);
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    const divContainer = document.getElementById("movieDetails");

    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
}
// ---------------------- Generate Movie Table Funtion End--------------------------------------------------------------------//

// ---------------------- Redirections Start--------------------------------------------------------------------//
function redirectAddPage() {
  window.location = "update.html";

  let choice = "3";
  localStorage.setItem("choice", choice);
}

function redirectEditPage(obj) {
  let index = obj.parentNode.parentNode.rowIndex;
  let ssa = table.rows[index].cells[0].innerHTML;
  window.location.href = "update.html?id=" + ssa;
  localStorage.setItem("index", index);
  let choice = "2";
  localStorage.setItem("choice", choice);
}

// ---------------------- Redirections End --------------------------------------------------------------------//

// ---------------------- Delete Row Function Start--------------------------------------------------------------------//
function delRow(obj) {
  const index = obj.parentNode.parentNode.rowIndex;
  const retrievedData = localStorage.getItem("myMovies");
  const delMovies = JSON.parse(retrievedData);

  delMovies.splice(index - 1, 1);
  localStorage.setItem("myMovies", JSON.stringify(delMovies));
  const table = document.getElementById("table");
  table.deleteRow(index);
}

// ---------------------- Delete Row Function End--------------------------------------------------------------------//
