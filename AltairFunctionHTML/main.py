import pandas as pd
import numpy as np
import altair as alt

x = np.arange(-2, 3, 1)
y = [2*x_val+1 for x_val in x]
d = {"x":x, "y":y}
df = pd.DataFrame(d)
print(df)


# chart = alt.Chart(df).mark_line(point=True).encode(
#     alt.X("x"),
#     alt.Y("y")
# ).properties(
#     title='A line chart for a simple function in altair'
# ).interactive()

# chart.configure_title(
#     fontSize=20,
#     font='Courier',
#     anchor='start',
#     color='gray'
# )


# chart.save("test.html")




x = np.arange(-2, 3, 1)
source = pd.DataFrame({
  'x': x,
  'y': 2*x + 1
})

line = alt.Chart(source).mark_line(
    point=True,
    radius=100,
    color="lime",
    strokeWidth=3,
).encode(
    x='x',
    y=alt.Y('y' + ':Q', title='y = 2*x + 1')
)


# Create a selection that chooses the nearest point & selects based on x-value
nearest = alt.selection(type='single', nearest=True, on='mouseover',
                        fields=['x'], empty='none')


# Transparent selectors across the chart. This is what tells us
# the x-value of the cursor
selectors = alt.Chart(source).mark_point().encode(
    x='x',
    opacity=alt.value(0),
).add_selection(
    nearest
)


# Draw points on the line, and highlight based on selection
points = line.mark_point(
    point=True,
    filled=True,
    color="green",
    radius=500,
    size=300,
    strokeWidth=50
).encode(
    opacity=alt.condition(nearest, alt.value(1), alt.value(0)),
)

# Draw text labels near the points, and highlight based on selection
text = line.mark_text(align='left', dx=10, dy=5, fontSize=16).encode(
    text=alt.condition(nearest, 'label' + ":N", alt.value(' '))
).transform_calculate(label='datum.y + "= 2 * (" + datum.x + ") + 1"')

# Draw a rule at the location of the selection
rules = alt.Chart(source).mark_rule(
    color='gray',
    size=1
).encode(
    x='x',
).transform_filter(
    nearest
)

# Put the five layers into a chart and bind the data
chart = alt.layer(
    line, selectors, points, rules, text
).properties(
    width=900, height=500
).properties(
    title='A line chart for a simple function in altair'
).interactive().configure_axis(
    labelFontSize=20,
    titleFontSize=20
).configure_legend(
    orient="right"
).configure_point(
    size=100,
    color="black"
).configure_title(
    fontSize=28,
    font='Courier',
    anchor='middle',
    color='gray'
)

chart.save("lineChart.html")