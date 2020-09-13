from bokeh.plotting import figure, output_file, show, save, ColumnDataSource
from bokeh.models.tools import HoverTool
from bokeh.transform import factor_cmap
from bokeh.palettes import Blues8
from bokeh.embed import components
from bokeh.models import SingleIntervalTicker, LinearAxis
import pandas as pd

#pylint: disable=too-many-arguments

x = list(range(-2,3))

print(x)

def simpleFunction(args):
    calculatedValues = [2 * (x ** 1) + 1 for x in args]
    return calculatedValues


y = simpleFunction(x)

print(y)

TOOLTIPS = [
    ("index", "$index"),
    ("(x,y)", "($x, $y)"),
    ("point_x", "@x"),
    ("point_y", "2 * (@x) + 1 = @y"),
]

# add plot
p = figure(
    title = "A line chart for a simple function in Bokeh",
    x_axis_label="x",
    y_axis_label="y = 2*(x) + 1",
    tools="pan,box_select,zoom_in,zoom_out,save,reset,poly_select, tap, undo, redo, hover",
    y_axis_type=None,
    tooltips=TOOLTIPS,
    height=600,
    width=900
)
p.x_range.range_padding = p.y_range.range_padding = .5
p.title.text_font_size = '22pt'
p.title.align='center'

ticker = SingleIntervalTicker(interval=1, num_minor_ticks=7)
yaxis = LinearAxis(ticker=ticker)
p.add_layout(yaxis, 'left')
p.yaxis.axis_label = "y = 2*(x) + 1"
p.yaxis.axis_label_text_font_size='16pt'
p.xaxis.axis_label_text_font_size='16pt'

# adding the glyph
p.line(x, y, legend_label="the legend", line_width=3)
p.circle(x, y, size=20, color="navy", alpha=0.5)



# displaying the plot
# show(p)
save(p)

# Print out div and script
# script, div = components(p)
# print(div)
# print(script)
