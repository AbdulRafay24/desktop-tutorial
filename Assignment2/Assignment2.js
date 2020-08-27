let movies = [];
let a = fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    movies = data;
  })
  .then(() => generateMovieTable(movies))

  .then(() => localStorage.setItem("myMovies", JSON.stringify(movies)));
// let retrievedData = localStorage.getItem("myMovies");
// let movies2 = JSON.parse(retrievedData);
// console.log(myMovies);

function generateMovieTable(movies) {
  console.log(movies);
  let noOfMovies = movies.length;
  if (noOfMovies > 0) {
    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    table.setAttribute("class", "tableStyle");

    let col = [];
    for (let i = 0; i < noOfMovies; i++) {
      for (let key in movies[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }

    let tHead = document.createElement("thead");

    let hRow = document.createElement("tr");

    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (let i = 0; i < col.length; i++) {
      let th = document.createElement("th");
      th.innerHTML = col[i];
      hRow.appendChild(th);
    }

    //Edit Column Header
    let colAdd = document.createElement("th");
    hRow.appendChild(colAdd);

    let buttonAdd = document.createElement("button");
    buttonAdd.setAttribute("class", "Add");
    buttonAdd.innerHTML = "Add New Movie";
    buttonAdd.setAttribute("onClick", "RedirectA()");
    colAdd.appendChild(buttonAdd);

    tHead.appendChild(hRow);
    table.appendChild(tHead);

    // CREATE TABLE BODY .
    let tBody = document.createElement("tbody");

    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (let i = 0; i < noOfMovies; i++) {
      let bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
      bRow.setAttribute("id", "myRow");

      for (let j = 0; j < col.length; j++) {
        let td = document.createElement("td");
        td.innerHTML = movies[i][col[j]];
        td.setAttribute("class", "RR");
        bRow.appendChild(td);
      }

      // making rows for Edit & Delete Button
      let rowED = document.createElement("td");
      bRow.appendChild(rowED);

      let buttonEdit = document.createElement("button");
      buttonEdit.setAttribute("class", "Edit");
      buttonEdit.innerHTML = "Edit";
      buttonEdit.setAttribute("onclick", "RedirectE()");
      rowED.appendChild(buttonEdit);

      let buttonDel = document.createElement("button");
      buttonDel.setAttribute("class", "Delete");
      buttonDel.innerHTML = "Delete";
      buttonDel.setAttribute("onclick", "delRow(this)");
      rowED.appendChild(buttonDel);

      tBody.appendChild(bRow);
    }
    table.appendChild(tBody);

    // for(i=0; i<noOfMovies; i++){
    //     console.log(i + ":" + movies[i][col[2]]);
    // }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("movieDetails");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  }
}

let RedirectA = () => {
  window.location = "Add.html";
};

let RedirectE = () => {
  window.location = "Edit.html";
};

function delRow(btn) {
  if (confirm("Clicking Ok will delete all details of the movie")) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  } else {
    return 0;
  }
}

let down = document.getElementById("movieDetails");

// Create a break line element
let br = document.createElement("br");
function addMov() {
  let bRow = document.createElement("tr");
  let form = document.createElement("form");

  form.setAttribute("method", "post");
  //   form.setAttribute("action", "assignment2.html");
  //   form.setAttribute("target", "assignment2.html");

  //   let headingA = document.createElement("h1");
  //   headingA.setAttribute("text", "ADD NEW MOVIE");

  let ID = document.createElement("input");
  //ID.setAttribute("id", "idd");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "ID");
  ID.setAttribute("placeholder", "ID");

  let title = document.createElement("input");
  // title.setAttribute("id", "ttitle");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "Title");

  let desc = document.createElement("textarea");
  // desc.setAttribute("id", "ddesc");
  desc.setAttribute("type", "text");
  desc.setAttribute("name", "desc");
  desc.setAttribute("placeholder", "Description");
  desc.setAttribute("class", "TA");

  let dir = document.createElement("input");
  // dir.setAttribute("id", "ddir");
  dir.setAttribute("type", "text");
  dir.setAttribute("name", "dir");
  dir.setAttribute("placeholder", "Director");

  let prod = document.createElement("input");
  // prod.setAttribute("id", "pprod");
  prod.setAttribute("type", "text");
  prod.setAttribute("name", "prod");
  prod.setAttribute("placeholder", "Producer");

  let rsd = document.createElement("input");
  // rsd.setAttribute("id", "rrsd");
  rsd.setAttribute("type", "text");
  rsd.setAttribute("name", "rsd");
  rsd.setAttribute("placeholder", "Release Date");

  let rating = document.createElement("input");
  //rating.setAttribute("id", "rate");
  rating.setAttribute("type", "text");
  rating.setAttribute("name", "rating");
  rating.setAttribute("placeholder", "Rating");

  let peop = document.createElement("input");
  // peop.setAttribute("id", "peopl");
  peop.setAttribute("type", "text");
  peop.setAttribute("name", "peop");
  peop.setAttribute("placeholder", "People");

  let spec = document.createElement("input");
  // spec.setAttribute("id", "spe");
  spec.setAttribute("type", "text");
  spec.setAttribute("name", "spec");
  spec.setAttribute("placeholder", "Species");

  let loc = document.createElement("input");
  //loc.setAttribute("id", "loca");
  loc.setAttribute("type", "text");
  loc.setAttribute("name", "loc");
  loc.setAttribute("placeholder", "Location");

  let veh = document.createElement("input");
  //veh.setAttribute("id", "vehi");
  veh.setAttribute("type", "text");
  veh.setAttribute("name", "veh");
  veh.setAttribute("placeholder", "Vehicles");

  let url = document.createElement("input");
  // url.setAttribute("id", "urll");
  url.setAttribute("type", "text");
  url.setAttribute("name", "url");
  url.setAttribute("placeholder", "URL");

  let s = document.createElement("input");
  //s.setAttribute("id", "ss");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Add");
  s.setAttribute("class", "BB");
  s.setAttribute("onClick", "movieAdd()");
  // button.addEventListener("click", function(e) {
  //     changeLng('en');
  // }, false);

  //form.appendChild(headingA);

  form.appendChild(ID);
  form.appendChild(br.cloneNode());

  form.appendChild(title);
  form.appendChild(br.cloneNode());

  form.appendChild(desc);
  form.appendChild(br.cloneNode());

  form.appendChild(dir);
  form.appendChild(br.cloneNode());

  form.appendChild(prod);
  form.appendChild(br.cloneNode());

  form.appendChild(rsd);
  form.appendChild(br.cloneNode());

  form.appendChild(rating);
  form.appendChild(br.cloneNode());

  form.appendChild(peop);
  form.appendChild(br.cloneNode());

  form.appendChild(spec);
  form.appendChild(br.cloneNode());

  form.appendChild(loc);
  form.appendChild(br.cloneNode());

  form.appendChild(veh);
  form.appendChild(br.cloneNode());

  form.appendChild(url);
  form.appendChild(br.cloneNode());

  form.appendChild(s);

  document.getElementsByTagName("body")[0].appendChild(form);
}

function movieAdd(e) {
  //   e.preventDefault();
  //   console.log(e);
  let myId = document.getElementById("idd");
  let myTitle = document.getElementById("ttitle");
  let myDesc = document.getElementById("ddesc");
  let myDir = document.getElementById("ddir");
  let myProd = document.getElementById("pprod");
  let myRsd = document.getElementById("rrsd");
  let myRate = document.getElementById("rate");
  let myPeop = document.getElementById("peopl");
  let mySpec = document.getElementById("spe");
  let myLoc = document.getElementById("loca");
  let myVeh = document.getElementById("vehi");
  let myUrl = document.getElementById("urll");

  let newDetails = {
    myId: myId,
    myTitle: myTitle,
    myDesc: myDesc,
    myDir: myDir,
    myProd: myProd,
    myRsd: myRsd,
    myRate: myRate,
    myPeop: myPeop,
    mySpec: mySpec,
    myLoc: myLoc,
    myVeh: myVeh,
    myUrl: myUrl,
  };

  console.log(newDetails);
  //   let retrievedData = localStorage.getItem("myMovies");
  //   let movies2 = JSON.parse(retrievedData);
  //   let tt = document.getElementById("myTable");

  //   let rrow = document.getElementById("myRow");

  //   let rowCount = tt.rows.length;
  //   let row = tt.insertRow(rowCount);

  //   row.insertCell(0).innerHTML = myId.value;
  //   row.insertCell(1).innerHTML = myTitle.value;
  //   row.insertCell(2).innerHTML = myDesc.value;
  //   row.insertCell(3).innerHTML = myDir.value;
  //   row.insertCell(4).innerHTML = myProd.value;
  //   row.insertCell(5).innerHTML = myRsd.value;
  //   row.insertCell(6).innerHTML = myRate.value;
  //   row.insertCell(7).innerHTML = myPeop.value;
  //   row.insertCell(8).innerHTML = mySpec.value;
  //   row.insertCell(9).innerHTML = myLoc.value;
  //   row.insertCell(10).innerHTML = myVeh.value;
  //   row.insertCell(11).innerHTML = myUrl.value;
}

// let retrievedData = localStorage.getItem("myMovies");
// let movies2 = JSON.parse(retrievedData);
// generateMovieTable(movies2);
