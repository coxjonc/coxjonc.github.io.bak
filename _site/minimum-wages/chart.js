var dataset = []
    
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1)

var y = d3.scale.linear()
    .range([height, 0])

var c = d3.scale.linear()
    .range([0,255])

var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left');

var chart= d3.select('#chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

d3.csv('data.csv', function(data) {
    var dataf = data.filter(function(el){return !isNaN(parseFloat(el.wage))});
    dataset = dataf.map(function(d){
        return {
            'state': d.state, 
            'wage': parseFloat(d.wage)
            }
    });
    
    // Scale the domain of the data
    x.domain(dataset.map(function(d){ return d.state }))
    y.domain([4, d3.max(dataset, function(d){return d.wage})])
    c.domain([4, d3.max(dataset, function(d){return d.wage})])

    // Create axes
    chart.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
      .append('text')
        .attr('class', 'label')
        .attr('text-anchor', 'end')
        .attr('x', width-20)
        .attr('y', 30)
        .text('State')

    chart.append('g')
        .attr('class', 'axis')
        .call(yAxis)
      .append('text')
        .attr('class', 'label')
        .attr('transform', 'rotate(-90)')
        .attr('y', -35)
        .style('text-anchor', 'end')
        .text('Minimum wage (USD)')
    
    // Create bars
    var bar = chart.selectAll('.bar')
        .data(dataset)
      .enter().append('rect')
        .attr('class', 'bar')
        .style('fill', function(d) {console.log(c(d.wage));return 'rgb(0,0,' + Math.floor(c(d.wage)) + ')'})
        .attr('x', function(d) {return  x(d.state)})
        .attr('y', function(d) {return y(d.wage)})
        .attr('height', function(d) {return height - y(d.wage)})
        .attr('width', x.rangeBand())

    d3.select('input').on('change', change)

    function change() {
        var x0 = x.domain(dataset.sort(this.checked
            ? function(a,b){return b.wage - a.wage}
            : function(a,b){return d3.ascending(a.state, b.state)})
            .map(function(d) {return d.state}))
            .copy();

        var transition = chart.transition().duration(750)

        transition.selectAll('.bar')
            .attr('x', function(d) {return x0(d.state)})

        transition.select('.x.axis')
            .call(xAxis)
    }
})
