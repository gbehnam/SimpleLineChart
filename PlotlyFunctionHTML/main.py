import plotly.graph_objects as go
import plotly.express as px
import numpy as np
import pandas as pd
import plotly

x = np.arange(-2, 3, 1)

def someFunction(args):
    output = [2 * (x ** 1) + 1 for x in args]
    return output

d = {"x": x, "y": someFunction(x)}
data_df = pd.DataFrame(d)
hover_text=[f'x: {xval}<br>y = 2 * ({xval}) + 1 = {yval}' for xval, yval in zip(data_df.x, data_df.y)]
print(data_df)

fig = px.line(data_df, 
                x="x", 
                y="y", 
                title="A line chart for a simple function in Plotly", 
                hover_name=hover_text,
                color=pd.Series(data=['line'] * 5),
                color_discrete_map=dict((i, k) for i, k in zip(list(range(-2, 3)),['#00FF00'] * 5))
)


fig.update_traces(mode="markers+lines", hovertemplate=None)
fig.update_traces(marker=dict(size=20,
                              line=dict(width=2,
                                        color='DarkSlateGrey')))
# fig.update_layout(hovermode="x unified")

fig.update_layout(
    hoverlabel=dict(
        bgcolor="white", 
        font_size=16, 
        font_family="Rockwell"
    ),
    autosize=False,
    width=1400,
    height=700,
    title_text='A line chart for a simple function in Plotly',
    yaxis_title="y = 2*(x) + 1",
    xaxis_title="x",
    title={
        'y': 0.92,
        'x': 0.5,
        'xanchor': 'center',
        'yanchor': 'top'},
)




# scatter = fig.data[0]
# colors = ['#a3a7e4'] * 5
# scatter.marker.color = colors
# scatter.marker.size = [10] * 5
# # fig.layout.hovermode = 'closest'


# # create our callback function
# def update_point(trace, points, selector):
#     c = list(scatter.marker.color)
#     s = list(scatter.marker.size)
#     for i in points.point_inds:
#         c[i] = '#bae2be'
#         s[i] = 20
#         with f.batch_update():
#             scatter.marker.color = c
#             scatter.marker.size = s


# scatter.on_click(update_point)



# dev_script = plotly.io.to_html(fig, include_plotlyjs=False, full_html=False)
fig.show()
# print(dev_script)


fig.write_html("lineChart.html")

