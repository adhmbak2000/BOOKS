// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
/**search fooe a book**/
function search() {

    let searcbar = document.querySelector('.search-Input').value.toUpperCase();
    let booklist = document.querySelector('.row');
    let book = document.querySelectorAll('.box');
    let bookName = document.getElementsByTagName('h5');
    for (let i = 0; i < bookName.length; i++) {
        if (bookName[i].innerHTML.toUpperCase().indexOf(searcbar) >= 0) {
            book[i].style.display = "";
        } else {
            book[i].style.display = "none";
        }
    }

}
