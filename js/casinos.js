// Set default starting values of sliders
var tax = .12;
var revenue = 1000 // Total 2015 revenue of Maryland casinos
var funding = d3.round(tax * revenue)

// Set width of sliders
var sliderWidth = 200;

// Define scales
var taxScale = d3.scale.linear()
    .domain([0, .4])
    .range([0, sliderWidth])
    .clamp(true); // Prevent scale from returning value outside output range

var revenueScale = d3.scale.linear()
    .domain([200, 1500])
    .range([0, sliderWidth])
    .clamp(true);

// Create span with total $ for education
var fundingSpan = d3.select('.funding')
    .html('SCHOOLS GET<br/>$' + funding + ' mil')

// Create tax slider
var taxSlider = d3.select('.taxSlider')
    .style('width', sliderWidth + 'px');

var taxSliderTray = taxSlider.append('div')
    .attr('class', 'slider-tray');

var taxSliderHandle = taxSlider.append('div')
    .attr('class', 'slider-handle')
  .append('div')
    .attr('class', 'slider-handle-icon')
    .style('left', taxScale(tax) + 'px');

var taxTitle = d3.select('.tax')
  .append('h1')
    .html('Tax rate<br/>' + d3.format('%')(tax));

// Create revenue slider
var revenueSlider = d3.select('.revenueSlider')
    .style('width', sliderWidth + 'px');

var revenueSliderTray = revenueSlider.append('div')
    .attr('class', 'slider-tray');

var revenueSliderHandle = revenueSlider.append('div')
    .attr('class', 'slider-handle')
  .append('div')
    .attr('class', 'slider-handle-icon')
    .style('left', revenueScale(revenue) + 'px');

var revenueTitle = d3.select('.revenue')
  .append('h1')
    .html('Casino revenue</br>' 
        + '$' + d3.format('.0d')(revenue) + ' million');

// Define event listeners for sliders
var dispatch = d3.dispatch('taxSliderChange', 'revenueSliderChange');

dispatch.on('taxSliderChange', function(value) {
    tax = value;
    fundingSpan.html('SCHOOLS GET<br/>$' + d3.round(revenue * tax) + ' mil');
    taxSliderHandle.style('left', taxScale(value) + 'px');
    taxTitle.html('Tax rate<br/>' + d3.format('%')(value));
});

dispatch.on('revenueSliderChange', function(value) {
    revenue = value;
    fundingSpan.html('SCHOOLS GET<br/>$' + d3.round(revenue * tax) + ' mil');
    revenueSliderHandle.style('left', revenueScale(value) + 'px');
    revenueTitle.html('Casino revenue<br/>' 
        + '$' + d3.format('.0d')(d3.round(value)) + ' million');
});

// Define drag behavior
var taxDrag = d3.behavior.drag()
    .on('dragstart', function() {
      dispatch.taxSliderChange(taxScale.invert(
        d3.mouse(taxSliderTray.node())[0]));
      d3.event.sourceEvent.preventDefault();
    })
    .on('drag', function() {
      dispatch.taxSliderChange(taxScale.invert(
        d3.mouse(taxSliderTray.node())[0]));
    });

var revenueDrag = d3.behavior.drag()
    .on('dragstart', function() {
      dispatch.revenueSliderChange(revenueScale.invert(
        d3.mouse(revenueSliderTray.node())[0]));
      d3.event.sourceEvent.preventDefault();
    })
    .on('drag', function() {
      dispatch.revenueSliderChange(revenueScale.invert(
        d3.mouse(revenueSliderTray.node())[0]));
    });

taxSlider.call(taxDrag)
revenueSlider.call(revenueDrag)
