# Flipbook processing plugin for QGIS

## Brief summary

This can be used for example to create an HTML animation of changes in sea level over several dates.

### Input data :

* Digital Elevation Model (DEM) as input raster : each pixels has a value corresponding to elevation or altitude

* a CSV with elevation categories, one line per date. First column is for description. For example, this file could look like this :

    date,min_alt,changing_level,max_alt
    1900,-101,-4,88
    1920,-101,-3,88
    1940,-101,-1,88
    1960,-101,2,88

    There are 4 columns in this file, the first one for the date, and the 3 next ones define 2 categories whose altitudes are changing over the time.

* a CSV with html colors, 2 colors for one category defined in the CSV described above. For example, for the above example defining 2 categories, there should be 4 colors : one color for the lowest elevation in first category, one color for the highest elevation in first category, one color for the lowest elevation in second category and  one color for the highest elevation in second category, for example :

    "#1818d7","#7fdbff","#fffbb7","#cd9d53"

A color ramp gets created for each category between its 2 colors. If you don't want a color ramp, just choose twice the same color.
    
* optionally, you can set the width and height in pixels of output images. If not set, it will be roughly 800 pixels wide

* you can also specify a shaded relief input raster : if set, the corresponding image will be visible under the DEM with a transparency.

### Output :
The plugin generates 2 output folders :
* in PNG folder, you'll get one PNG per line in your input CSV file, with the corresponding QML style

* in the animation folder, you'll get an html, javascript and css file. The HTML file can be opened in your browser and is a simple animation with a slider and a play/pause button.
  

## Dependencies

This plugin uses the following Python modules :  pandas, PIL, webbrower and shutil.

## More details

Do not hesitate to message me if there is any problem, or if you have any ideas to make it better ! It is experimental work.

