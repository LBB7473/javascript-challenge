// from data.js
// var tableData = data;
var tbody = d3.select("tbody");
// // YOUR CODE HERE!
// console.log(tableData);

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    

    var rowCount = document.getElementById("ufo-table").rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        document.getElementById("ufo-table").deleteRow(i);}


    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(data => data.datetime === inputValue);

    console.log(filteredData);
    
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}
