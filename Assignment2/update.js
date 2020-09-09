const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let movieId = urlParams.get("id");

let cc = localStorage.getItem("choice");
function con() {
  if (cc == "2") {
    eee();
  }
}

function condition() {
  if (cc == "2") {
    editRow();
  } else {
    movieAdd();
  }
}
//---------------------------- Edit Functionality Start -----------------------------------------------//
function eee() {
  let table = document.getElementById("table");
  const i = localStorage.getItem("index");
  let retrievedData = localStorage.getItem("myMovies");
  let editMovies = JSON.parse(retrievedData);
  let a = editMovies.splice(i - 1, 1);
  document.getElementById("ID").value = a[0].id;
  document.getElementById("title").value = a[0].title;
  document.getElementById("desc").value = a[0].description;
  document.getElementById("dir").value = a[0].director;
  document.getElementById("prod").value = a[0].producer;
  document.getElementById("rsd").value = a[0].release_date;
  document.getElementById("rating").value = a[0].rt_score;
  document.getElementById("peop").value = a[0].people;
  document.getElementById("spec").value = a[0].species;
  document.getElementById("loc").value = a[0].locations;
  document.getElementById("veh").value = a[0].vehicles;
  document.getElementById("url").value = a[0].url;
}

function editRow() {
  const myId = document.getElementById("ID").value;
  const myTitle = document.getElementById("title").value;
  const myDesc = document.getElementById("desc").value;
  const myDir = document.getElementById("dir").value;
  const myProd = document.getElementById("prod").value;
  const myRsd = document.getElementById("rsd").value;
  const myRate = document.getElementById("rating").value;
  const myPeop = document.getElementById("peop").value;
  const mySpec = document.getElementById("spec").value;
  const myLoc = document.getElementById("loc").value;
  const myVeh = document.getElementById("veh").value;
  const myUrl = document.getElementById("url").value;

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
  retrievedData = localStorage.getItem("myMovies");
  editMovies = JSON.parse(retrievedData);

  const index = editMovies.findIndex((m) => {
    return m.id === movieId;
  });

  editMovies[index] = editDetails;
  localStorage.setItem("myMovies", JSON.stringify(editMovies));
}
//---------------------------- Edit Functionality End -----------------------------------------------//

//---------------------------- Add Functionality Start -----------------------------------------------//
function movieAdd() {
  const myId = document.getElementById("ID").value;
  const myTitle = document.getElementById("title").value;
  const myDesc = document.getElementById("desc").value;
  const myDir = document.getElementById("dir").value;
  const myProd = document.getElementById("prod").value;
  const myRsd = document.getElementById("rsd").value;
  const myRate = document.getElementById("rating").value;
  const myPeop = document.getElementById("peop").value;
  const mySpec = document.getElementById("spec").value;
  const myLoc = document.getElementById("loc").value;
  const myVeh = document.getElementById("veh").value;
  const myUrl = document.getElementById("url").value;

  const newDetails = {
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
  const retrievedData = localStorage.getItem("myMovies");
  const movies2 = JSON.parse(retrievedData);
  movies2.push(newDetails);
  localStorage.setItem("myMovies", JSON.stringify(movies2));
}
//---------------------------- Add Functionality End -----------------------------------------------//
