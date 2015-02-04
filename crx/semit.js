(function() {
  var headings = document.getElementsByClassName("story-heading");

  Array.prototype.forEach.call(headings, function (heading) {
    heading.innerText = heading.innerText.split("").reverse().join("");
  });
}());
