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
filtered_data = d3.select("#filter_table")

function runEnter() {
    d3.event.preventDefault();
    var inputValue = form.property("value");
    var sighting_date = rows.filter(row => row.datetime == inputValue);
    var test = new Date(inputValue);
    var month = test.getUTCMonth()+1;
    var day = test.getUTCDate();
    var year = test.getUTCFullYear();
    date_combined = (`${month}/${day}/${year}`);
    var big_test = rows.filter(row => row.datetime === date_combined)
    var new_body = d3.select("body")
    big_test.forEach(
        function(y) {

            var test1 = filtered_data.append("tr");
            var row2 = test1.append("td").text(Object.values(y)[0]);
            var row3 = test1.append("td").text(Object.values(y)[1]);
            var row4 = test1.append("td").text(Object.values(y)[2]);
            var row5 = test1.append("td").text(Object.values(y)[3]);
            var row6 = test1.append("td").text(Object.values(y)[4]);
            var row7 = test1.append("td").text(Object.values(y)[5]);
            var row8 = test1.append("td").text(Object.values(y)[6]);
            var row8 = test1.append("td").text(Object.values(y)[7]);

        }
    
    )
    
}

//var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
//.toISOString()
//.split("T")[0];
//console.log(Date.now())
//console.log(new Date("2010-01-02"))
