const icon = document.getElementsByClassName("icon");
const bold = document.getElementsByClassName("bold");
const title = document.getElementsByClassName("span_flex");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for (let key in myObj) {
      icon[key].src = myObj[key].icon;
      title[key].innerHTML += myObj[key].category;
      bold[key].innerHTML += myObj[key].score;
    }
  }
};
xmlhttp.open("GET", "./fem-files/data.json", true);
xmlhttp.send();
