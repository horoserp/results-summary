const subset = document.getElementsByClassName("title");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for (let key in myObj) {
      newImage = document.createElement("img");
      newImage.src = myObj[key].icon;
      newDiv = document.createElement("section");
      newDiv.classList.add("subset");
      newDiv.appendChild(newImage);
      newDiv.innerHTML += myObj[key].category;
      newSpan = document.createElement("span");
      newSpan.innerHTML = myObj[key].score + " / 100";
      newDiv.appendChild(newSpan);
      //   subset[0].appendChild(newDiv);
      subset[0].parentNode.insertBefore(newDiv, subset[0].nextSibling);
    }
  }
};
xmlhttp.open("GET", "./fem-files/data.json", true);
xmlhttp.send();
