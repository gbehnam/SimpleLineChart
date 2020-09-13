(function(vegaEmbed) {
    var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}, "axis": {"labelFontSize": 20, "titleFontSize": 20}, "legend": {"orient": "right"}, "point": {"color": "black", "size": 100}, "title": {"anchor": "middle", "color": "gray", "font": "Courier", "fontSize": 28}}, "layer": [{"mark": {"type": "line", "color": "lime", "point": true, "radius": 100, "strokeWidth": 3}, "encoding": {"x": {"type": "quantitative", "field": "x"}, "y": {"type": "quantitative", "field": "y", "title": "y = 2*x + 1"}}, "selection": {"selector002": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}}, {"mark": "point", "encoding": {"opacity": {"value": 0}, "x": {"type": "quantitative", "field": "x"}}, "selection": {"selector001": {"type": "single", "nearest": true, "on": "mouseover", "fields": ["x"], "empty": "none"}}}, {"mark": {"type": "point", "color": "green", "filled": true, "point": true, "radius": 500, "size": 300, "strokeWidth": 50}, "encoding": {"opacity": {"condition": {"value": 1, "selection": "selector001"}, "value": 0}, "x": {"type": "quantitative", "field": "x"}, "y": {"type": "quantitative", "field": "y", "title": "y = 2*x + 1"}}}, {"mark": {"type": "rule", "color": "gray", "size": 1}, "encoding": {"x": {"type": "quantitative", "field": "x"}}, "transform": [{"filter": {"selection": "selector001"}}]}, {"mark": {"type": "text", "align": "left", "dx": 10, "dy": 5, "fontSize": 16}, "encoding": {"text": {"condition": {"type": "nominal", "field": "label", "selection": "selector001"}, "value": " "}, "x": {"type": "quantitative", "field": "x"}, "y": {"type": "quantitative", "field": "y", "title": "y = 2*x + 1"}}, "transform": [{"calculate": "datum.y + \"= 2 * (\" + datum.x + \") + 1\"", "as": "label"}]}], "data": {"name": "data-7ee66070fa97f832911bab02aa891ba6"}, "height": 500, "title": "A line chart for a simple function in altair", "width": 900, "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json", "datasets": {"data-7ee66070fa97f832911bab02aa891ba6": [{"x": -2, "y": -3}, {"x": -1, "y": -1}, {"x": 0, "y": 1}, {"x": 1, "y": 3}, {"x": 2, "y": 5}]}};
    var embedOpt = {"mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
                        + '<p>JavaScript Error: ' + error.message + '</p>'
                        + "<p>This usually means there's a typo in your chart specification. "
                        + "See the javascript console for the full traceback.</p>"
                        + '</div>');
        throw error;
    }
    const el = document.getElementById('vis');
    vegaEmbed("#vis", spec, embedOpt)
      .catch(error => showError(el, error));
  })(vegaEmbed);