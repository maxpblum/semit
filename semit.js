(function() {
  var headings = document.getElementsByClassName("story-heading");

  Array.prototype.forEach.call(headings, function (heading) {
    var nytnow = heading.innerText.indexOf("NYT Now") != -1;
    var tmp = nytnow ? heading.innerText.slice(null, -7) : heading.innerText;
    tmp = tmp.split("").reverse().join("");
    heading.innerText = nytnow ? tmp + "NYT Now" : tmp;
  });
}());
