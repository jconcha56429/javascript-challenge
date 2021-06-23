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
    var city = row.append("td").text(Object.values(x)[1]);
    var state = row.append("td").text(Object.values(x)[2]);
    var country = row.append("td").text(Object.values(x)[3]);
    var shape = row.append("td").text(Object.values(x)[4]);
    var durationMinutes = row.append("td").text(Object.values(x)[5]);
    var comments = row.append("td").text(Object.values(x)[6]);
});

var form = d3.select("#search");
var button = d3.select("#button");
form.on("change",runEnter);
filtered_data = d3.select("#filter_table")
button.on("click",reset)
function runEnter() {
    d3.event.preventDefault();
    var inputValue = form.property("value");
    var sighting_date = rows.filter(row => row.datetime == inputValue);
    var test = new Date(inputValue);
    var month = test.getUTCMonth()+1;
    var day = test.getUTCDate();
    var year = test.getUTCFullYear();
    var date_combined = (`${month}/${day}/${year}`);
    var big_test = rows.filter(row => row.datetime === date_combined)
    document.getElementById("filter_table").innerHTML = ""
    
    indexes.forEach(function(i) {
        var header = filtered_data.append("th").text(i)
    })
    big_test.forEach(
        function(tds) {
            var row = filtered_data.append("tr");
            var date = row.append("td").text(Object.values(tds)[0]);
            var city = row.append("td").text(Object.values(tds)[1]);
            var state = row.append("td").text(Object.values(tds)[2]);
            var country = row.append("td").text(Object.values(tds)[3]);
            var shape = row.append("td").text(Object.values(tds)[4]);
            var durationMinutes = row.append("td").text(Object.values(tds)[5]);
            var comments = row.append("td").text(Object.values(tds)[6]);
        }
    
    )
    
}
function reset() {
    document.getElementById("filter_table").innerHTML = ""
}