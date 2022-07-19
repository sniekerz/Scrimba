const search = document.getElementById("searchInput");
let searchQuery = "";
let allNamesDOMCollection = document.getElementsByClassName("name");

search.addEventListener("keyup", function (event) {
  searchQuery = event.target.value.toLowerCase();
  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    const currentName =
      allNamesDOMCollection[counter].textContent.toLocaleLowerCase();
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[counter].style.display = "block";
    } else {
      allNamesDOMCollection[counter].style.display = "none";
    }
  }
});
