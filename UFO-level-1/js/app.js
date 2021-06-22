// from data.js
var tableData = data
var rows = tableData.map(sighting => sighting )
var row1 = rows[0]
indexes = Object.keys(row1);
html_table = d3.select("#main_table")   

indexes.forEach(function(i) {
    var header = html_table.append("th").text(i)
})
rows.forEach(function(x) {
    var row = html_table.append("tr");
    var date = row.append("td").text(Object.values(x)[0]);
    var place = row.append("td").text(Object.values(x)[1]);
    var state = row.append("td").text(Object.values(x)[2]);
    var fourth = row.append("td").text(Object.values(x)[3]);
    var fifth = row.append("td").text(Object.values(x)[4]);
    var sixth = row.append("td").text(Object.values(x)[5]);
    var seveneth = row.append("td").text(Object.values(x)[6]);
    var eight = row.append("td").text(Object.values(x)[7]);
});

var form = d3.select("#search");
var button = d3.select("#button");
form.on("change",runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputValue = form.property("value");
    var sighting_date = rows.filter(row => Date.parse(row.date) === inputValue)
}

