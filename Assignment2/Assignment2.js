let movies = [];
let check = JSON.parse(localStorage.getItem("myMovies"));
if (check === null) {
  let a = fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      movies = data;
    })
    .then(() => generateMovieTable(movies))

    .then(() => localStorage.setItem("myMovies", JSON.stringify(movies)));
} else {
  generateMovieTable(check);
}

function generateMovieTable(movies) {
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
    buttonAdd.innerHTML = "Add";
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
        td.setAttribute("class", "show-read-more");
        bRow.appendChild(td);
      }

      // making rows for Edit & Delete Button
      let rowED = document.createElement("td");
      bRow.appendChild(rowED);

      let buttonEdit = document.createElement("button");
      buttonEdit.setAttribute("class", "Edit");
      buttonEdit.innerHTML = "Edit";
      buttonEdit.setAttribute("onclick", "RedirectE(this)");
      rowED.appendChild(buttonEdit);

      let buttonDel = document.createElement("button");
      buttonDel.setAttribute("class", "Delete");
      buttonDel.innerHTML = "Delete";
      buttonDel.setAttribute("onclick", "delRow(this)");
      rowED.appendChild(buttonDel);

      tBody.appendChild(bRow);
    }

    table.appendChild(tBody);
    console.log(table);

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    let divContainer = document.getElementById("movieDetails");

    divContainer.innerHTML = "";

    divContainer.appendChild(table);
    console.log(movies);
  }
}
console.log(check);
let RedirectA = () => {
  window.location = "Add.html";
};

let RedirectE = (obj) => {
  let index = obj.parentNode.parentNode.rowIndex;
  localStorage.setItem("index", index);
  editRow1();
};
function editRow1() {
  window.location = "Edit.html";
}

function delRow(obj) {
  let index = obj.parentNode.parentNode.rowIndex;
  console.log(index);
  let retrievedData = localStorage.getItem("myMovies");
  let delMovies = JSON.parse(retrievedData);

  delMovies.splice(index - 1, 1);
  localStorage.setItem("myMovies", JSON.stringify(delMovies));
  console.log(delMovies);

  let table = document.getElementById("myTable");
  table.deleteRow(index);
}

let down = document.getElementById("movieDetails");

function addMov() {
  let br = document.createElement("br");
  let form = document.createElement("form");

  form.setAttribute("method", "post");
  form.setAttribute("action", "assignment2.html");

  let ID = document.createElement("input");
  ID.setAttribute("id", "idd");
  ID.setAttribute("type", "text");
  ID.setAttribute("name", "ID");
  ID.setAttribute("placeholder", "ID");

  let title = document.createElement("input");
  title.setAttribute("id", "ttitle");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title");
  title.setAttribute("placeholder", "Title");

  let desc = document.createElement("textarea");
  desc.setAttribute("id", "ddesc");
  desc.setAttribute("type", "text");
  desc.setAttribute("name", "desc");
  desc.setAttribute("placeholder", "Description");
  desc.setAttribute("class", "TA");

  let dir = document.createElement("input");
  dir.setAttribute("id", "ddir");
  dir.setAttribute("type", "text");
  dir.setAttribute("name", "dir");
  dir.setAttribute("placeholder", "Director");

  let prod = document.createElement("input");
  prod.setAttribute("id", "pprod");
  prod.setAttribute("type", "text");
  prod.setAttribute("name", "prod");
  prod.setAttribute("placeholder", "Producer");

  let rsd = document.createElement("input");
  rsd.setAttribute("id", "rrsd");
  rsd.setAttribute("type", "text");
  rsd.setAttribute("name", "rsd");
  rsd.setAttribute("placeholder", "Release Date");

  let rating = document.createElement("input");
  rating.setAttribute("id", "rate");
  rating.setAttribute("type", "text");
  rating.setAttribute("name", "rating");
  rating.setAttribute("placeholder", "Rating");

  let peop = document.createElement("input");
  peop.setAttribute("id", "peopl");
  peop.setAttribute("type", "text");
  peop.setAttribute("name", "peop");
  peop.setAttribute("placeholder", "People");

  let spec = document.createElement("input");
  spec.setAttribute("id", "spe");
  spec.setAttribute("type", "text");
  spec.setAttribute("name", "spec");
  spec.setAttribute("placeholder", "Species");

  let loc = document.createElement("input");
  loc.setAttribute("id", "loca");
  loc.setAttribute("type", "text");
  loc.setAttribute("name", "loc");
  loc.setAttribute("placeholder", "Location");

  let veh = document.createElement("input");
  veh.setAttribute("id", "vehi");
  veh.setAttribute("type", "text");
  veh.setAttribute("name", "veh");
  veh.setAttribute("placeholder", "Vehicles");

  let url = document.createElement("input");
  url.setAttribute("id", "urll");
  url.setAttribute("type", "text");
  url.setAttribute("name", "url");
  url.setAttribute("placeholder", "URL");

  let s = document.createElement("input");
  s.setAttribute("id", "ss");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Save");
  s.setAttribute("class", "BB");
  s.setAttribute("onClick", "movieAdd()");

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
  // console.log(myMovies);
  let myId = document.getElementById("idd").value;
  let myTitle = document.getElementById("ttitle").value;
  let myDesc = document.getElementById("ddesc").value;
  let myDir = document.getElementById("ddir").value;
  let myProd = document.getElementById("pprod").value;
  let myRsd = document.getElementById("rrsd").value;
  let myRate = document.getElementById("rate").value;
  let myPeop = document.getElementById("peopl").value;
  let mySpec = document.getElementById("spe").value;
  let myLoc = document.getElementById("loca").value;
  let myVeh = document.getElementById("vehi").value;
  let myUrl = document.getElementById("urll").value;

  let newDetails = {
    id: myId,
    title: myTitle,
    description: myDesc,
    director: myDir,
    producer: myProd,
    release_date: myRsd,
    rt_score: myRate,
    people: myPeop,
    species: mySpec,
    locations: myLoc,
    vehicles: myVeh,
    url: myUrl,
  };
  let retrievedData = localStorage.getItem("myMovies");
  let movies2 = JSON.parse(retrievedData);
  movies2.push(newDetails);
  localStorage.setItem("myMovies", JSON.stringify(movies2));
  console.log(movies2);
  console.log(newDetails);
}

function editRow() {
  let i = localStorage.getItem("index");
  console.log(i);
  // let movieData = check;
  let myId = document.getElementById("ID").value;
  let myTitle = document.getElementById("title").value;
  let myDesc = document.getElementById("desc").value;
  let myDir = document.getElementById("dir").value;
  let myProd = document.getElementById("prod").value;
  let myRsd = document.getElementById("rsd").value;
  let myRate = document.getElementById("rating").value;
  let myPeop = document.getElementById("peop").value;
  let mySpec = document.getElementById("spec").value;
  let myLoc = document.getElementById("loc").value;
  let myVeh = document.getElementById("veh").value;
  let myUrl = document.getElementById("url").value;

  let editDetails = {
    id: myId,
    title: myTitle,
    description: myDesc,
    director: myDir,
    producer: myProd,
    release_date: myRsd,
    rt_score: myRate,
    people: myPeop,
    species: mySpec,
    locations: myLoc,
    vehicles: myVeh,
    url: myUrl,
  };

  let retrievedData = localStorage.getItem("myMovies");
  let editMovies = JSON.parse(retrievedData);
  let a = editMovies.splice(i - 1, 1);
  console.log(a);

  let myVal = a.valueOf();

  myVal = editDetails.valueOf();
  console.log(myVal);

  a = myVal;
  console.log(a);

  editMovies.push(a);
  localStorage.setItem("myMovies", JSON.stringify(editMovies));
  console.log(a);

  console.log(editDetails);
}

$(document).ready(function () {
  var maxLength = 40;
  $(".show-read-more").each(function () {
    var myStr = $(this).text();
    if ($.trim(myStr).length > maxLength) {
      var newStr = myStr.substring(0, maxLength);
      var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
      $(this).empty().html(newStr);
      $(this).append(
        ' <a href="javascript:void(0);" class="read-more">read more...</a>'
      );
      $(this).append('<span class="more-text">' + removedStr + "</span>");
    }
  });
  $(".read-more").click(function () {
    $(this).siblings(".more-text").contents().unwrap();
    $(this).remove();
  });
});
