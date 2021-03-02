# Flipbook processing plugin for QGIS

## Brief summary

This can be used for example to create an HTML animation of changes in sea level over several dates.

## Dependencies

This plugin uses the following Python modules :  pandas, PIL, webbrower and shutil.

## More details

### Input data

#### single band input raster

For example a Digital Elevation Model (DEM) where each pixel has a value corresponding to elevation.

#### CSV with categories

one line per date. First column is for description, and the next ones define categories whose limits are changing over the time. For example, this file could look like this :

| date | min_alt | changing_level | max_alt |
| ---- | ------- | -------------- | ------- |
| 1970 | -101    | -4             | 88      |
| 1980 | -101    | -3             | 88      |
| 1990 | -101    | -1             | 88      |
| 2000 | -101    | 2              | 88      |

First column for the date, and the 3 next ones define 2 categories whose limits are changing over the time.

#### CSV with html colors

2 colors for one category defined in the CSV described above. For example, for the above example defining 2 categories, there should be 4 colors : 

* one color for the lowest elevation in first category,
* one color for the highest elevation in first category,
* one color for the lowest elevation in second category
* one color for the highest elevation in second category

For example : 

"#1818d7","#7fdbff","#cd9d53","#37742e"

A color ramp gets created for each category between its 2 colors. If you don't want a color ramp, just choose twice the same color.

#### Width and height in pixels of output images (optional)
If not set, the output images will be roughly 800 pixels wide

#### Shaded relief input raster (optional)

If set, the corresponding image will be visible under the DEM with a transparency.

### Output :
The plugin generates 2 output folders :
* in PNG folder, you'll get one PNG per line in your input CSV file, with the corresponding QML style

* in the animation folder, you'll get an html, javascript and css file. The HTML file can be opened in your browser and is a simple animation with a slider and a play/pause button. In this folder, there's also an img folder with the images used for the animation.
  

## A problem ?

Do not hesitate to message me or create an issue if there is any problem, or if you have any ideas to make it better ! It is experimental work.

