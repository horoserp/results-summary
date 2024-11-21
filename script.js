const subset = document.getElementsByClassName("title");
const continueButton = document.getElementsByClassName("continue_button");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for (let key in myObj) {
      // Create elements
      newImage = document.createElement("img");
      newDiv = document.createElement("section");
      newSpan = document.createElement("span");

      // Populate elements
      newImage.src = myObj[key].icon;
      newDiv.classList.add("subset");
      newDiv.innerHTML += myObj[key].category;
      newSpan.innerHTML = myObj[key].score + " / 100";

      // Add elements to DOM
      newDiv.appendChild(newImage);
      newDiv.appendChild(newSpan);
      subset[0].parentNode.insertBefore(
        newDiv,
        continueButton[0].previousSibling
      );
    }
  }
};
xmlhttp.open("GET", "./fem-files/data.json", true);
xmlhttp.send();
