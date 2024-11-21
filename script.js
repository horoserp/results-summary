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
      newSpanTwo = document.createElement("span");
      newSpanBold = document.createElement("strong");
      newCorner2 = document.createElement("div");
      newCorner1 = document.createElement("div");
      newCorner3 = document.createElement("div");
      newCorner4 = document.createElement("div");

      // Add newImage to newDiv
      newSpanTwo.appendChild(newImage);

      // Add classes to elements
      newDiv.classList.add("subset");
      newSpanTwo.classList.add("span_flex");
      newCorner1.classList.add("corner");
      newCorner2.classList.add("corner");
      newCorner3.classList.add("corner");
      newCorner4.classList.add("corner");

      switch (key) {
        case "0":
          newCorner1.classList.add("red");
          newCorner2.classList.add("red");
          newCorner3.classList.add("red");
          newCorner4.classList.add("red");
          break;
        case "1":
          newCorner1.classList.add("yellow");
          newCorner2.classList.add("yellow");
          newCorner3.classList.add("yellow");
          newCorner4.classList.add("yellow");
          break;
        case "2":
          newCorner1.classList.add("green");
          newCorner2.classList.add("green");
          newCorner3.classList.add("green");
          newCorner4.classList.add("green");
          break;
        case "3":
          newCorner1.classList.add("blue");
          newCorner2.classList.add("blue");
          newCorner3.classList.add("blue");
          newCorner4.classList.add("blue");
          break;
      }

      // Populate elements
      newImage.src = myObj[key].icon;
      newSpanTwo.innerHTML += myObj[key].category;
      newSpanBold.innerHTML = myObj[key].score;

      // Add newSpanBold to newSpan
      newSpan.appendChild(newSpanBold);

      // Populate newSpan
      newSpan.innerHTML += " / 100";

      // Add newSpan and newSpanTwo to newDiv
      newDiv.appendChild(newSpanTwo);
      newDiv.appendChild(newSpan);
      newDiv.appendChild(newCorner1);
      newDiv.appendChild(newCorner2);
      newDiv.appendChild(newCorner3);
      newDiv.appendChild(newCorner4);

      // Add element to DOM
      subset[0].parentNode.insertBefore(
        newDiv,
        continueButton[0].previousSibling
      );
    }
  }
};
xmlhttp.open("GET", "./fem-files/data.json", true);
xmlhttp.send();
