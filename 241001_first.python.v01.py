# import libraries
from worldcloud import WordCloud
import matplotlib.pyplot as plt

# text for word cloud based on a definition of "data"
text = """
information, parameter, translation, transcribe, facts, observations, 
numbers, values, collection, iteration, patterns, trends, forecasting,
prediction, structures, categories
"""

# create a word cloud (a function with a method.)
wordcloud = WordCloud(width=800, height=400, background_color="white").generate(text)

# use pyplot to create a "figure"
plt.figure(figsize=(10, 5))
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.savefig("wordcloud_data_definition.png", format="png")
plt.show()