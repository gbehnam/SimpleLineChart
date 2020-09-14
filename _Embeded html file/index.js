// set the dimensions and margins of the graph
var margin = {top: 50, right: 30, bottom: 60, left: 260},
    width = 1160 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


// generating the data
var X = Array.from({ length: 5}, (_, i) => i-2);
var Y = Array.from({ length: 5}, (_, i) => 2*(i-2)+1);
var data_raw=[];
for (var i = 0; i < X.length; i++) {
    data_raw.push({x:X[i], y:Y[i]})
}

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//load the data

// d3.csv("data.csv",function(data) {
//     console.log(data);
//     console.log("data was loaded!");


//Read the data
data_raw.forEach(function(data) {
    data.x = +data.x;
    data.y = +data.y;
});





// Add X axis --> it is a date format
var x = d3.scaleLinear()
.domain([-2.5,2.5])
.range([ 0, width ]);
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
.domain([-3.5, 5.5])
.range([ height, 0 ]);
svg.append("g")
.call(d3.axisLeft(y));

// This allows to find the closest X index of the mouse:
var bisect = d3.bisector(function(d) { return d.x; }).left;

// Create the circle that travels along the curve of chart
var focus = svg
.append('g')
.append('circle')
    .style("fill", "green")
    .attr("stroke", "black")
    .attr('r', 10.5)
    .style("opacity", 0)

// Create the text that travels along the curve of chart
var focusText = svg
.append('g')
.append('text')
    .style("opacity", 0)
    .attr("text-anchor", "left")
    .attr("alignment-baseline", "middle")

// Add the line
svg
.append("path")
.datum(data)
.attr("fill", "none")
.attr("stroke", "steelblue")
.attr("stroke-width", 3)
.attr("d", d3.line()
    .x(function(d) { return x(d.x) })
    .y(function(d) { return y(d.y) })
    )

// add points
svg.selectAll("myCircles")
.data(data)
.enter()
.append("circle")
    .attr("fill", "lime")
    .attr("stroke", "none")
    .attr("cx", function(d) { return x(d.x) })
    .attr("cy", function(d) { return y(d.y) })
    .attr("r", 5)


// add a title
svg
.append("text")
.attr("x", (width / 2))
.attr("y", 0 - (margin.top / 2))
.attr("text-anchor", "middle")
.style("font-size", "22px")
.style("text-decoration", "bold")
.text("A line chart for a simple function in D3.js");


// text label for the x axis
svg
.append("text")
.attr("transform", "translate(" + (width/2) + " ," + (height + 40) + ")")
.style("text-anchor", "middle")
.style("font-size", "18px")
.text("x");


// text label for the y axis
svg
.append("text")
.attr("transform", "rotate(-90)")
// .attr("y", 0 - margin.left)
.attr("y", 0 - 50)
.attr("x",0 - (height / 2))
.attr("dy", "1em")
.style("text-anchor", "middle")
.style("font-size", "18px")
.text("y = 2 *(x) + 1");

// Create a rect on top of the svg area: this rectangle recovers mouse position
svg
.append('rect')
.style("fill", "none")
.style("pointer-events", "all")
.attr('width', width)
.attr('height', height)
.on('mouseover', mouseover)
.on('mousemove', mousemove)
.on('mouseout', mouseout);


// What happens when the mouse move -> show the annotations at the right positions.
function mouseover() {
focus.style("opacity", 1)
focusText.style("opacity",1)
}

function mousemove() {
// recover coordinate we need
// console.log(d3.mouse(this)[0]);
// console.log(x.invert(d3.mouse(this)[0]));
var x0 = x.invert(d3.mouse(this)[0]);
var i = bisect(data, x0-.5, 0);
// console.log(i);
selectedData = data[i]
focus
    .attr("cx", x(selectedData.x))
    .attr("cy", y(selectedData.y))
focusText
    .html("x:" + selectedData.x + "  ,<br>  " + "y = 2*(" + selectedData.x + ") + 1 = " + selectedData.y)
    .attr("x", x(selectedData.x) + 12)
    .attr("y", y(selectedData.y))
}
function mouseout() {
focus.style("opacity", 0)
focusText.style("opacity", 0)
}
