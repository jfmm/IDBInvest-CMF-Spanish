# IDB Invest - Career Management Framework Widget
This repository contains the necessary code files to implement the CMF Widget in any webpage. 


## Dependencies
**Libraries:**
For this to work make sure to have loaded jQuery (Version 1.11.2) before cmf.js


**Other technologies:**
The current application logic (on `cmf.js`) makes use of eZshare's document ID codes to fetch the proper document. If the document management repository were to be changed to another platform in the future, make sure to edit the script accordingly.

## Adding the widget to a webpage
Follow these 3 easy steps:

**1. Make sure the CSS file (`cmf-style.css`) is linked in the page.** The path to this resource will of course depend on the directory structure of your site. 

```html
 <link rel="stylesheet" type="text/css" href="yourSiteCSSFolder/cmf-style.css">
```

**2. Make sure the JavaScript is loaded**, preferably before the closing `</body>` tag. You will have to load jQuery **before** `cmf.js`


```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script type="text/javascript" src="cmf.js"></script>
```

**3. Copy the HTML snippet into your webpage.** Basically copy and paste the entire `<section id="cmf-wrap">` into a container. Changing ID's and classes in the markup is not recommended as it will break the styles and functionality.
```html
<main id="yourContainer">
 
  <!-- copy and paste from here..-->
  <section id="cmf-wrap">
  <!-- the main markup is here-->
  </section>
  <!-- ... to here-->

</main>
```
##Recommendations
You might want to link the minified `cmf-min.js` as it reduces the script's file size 50%. 
