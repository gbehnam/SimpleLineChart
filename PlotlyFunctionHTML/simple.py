import plotly.graph_objects as go
import numpy as np

x = np.arange(-2, 3, 1)

fig = go.Figure(data=go.Scatter(x=x, y=2 * x**1 + 1))


fig.show()

fig.write_html("simpleLineChart.html")