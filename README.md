# IDB Invest - Career Management Framework Widget
This repository contains the necessary code files to implement the CMF Widget in any webpage. 


## Dependencies
**Libraries:**
For this to work make sure to have loaded jQuery (Version 1.11.2) before loading the main JS file, cmf.js


**Other technologies:**
The current application logic (on `cmf.js`) makes use of eZshare's document ID codes to fetch the proper document. If the document management repository were to be changed to another platform in the future, make sure to edit the script accordingly.

## Updating and making changes
If you want to make changes to the overall structure and style of the widget you may of course tweak the HTML and CSS files. However, the logic that controls the model of the application relies on two components: data attributes in the HTML and the JSON object in the javascript file with the document ID's. 

### Data attributes
The HTML view "communicates" with the data stored in the javascript file via data attributes. Namely the `data-path=[value]` attribute. This value is set to a string that matches one of the keys in the JSON object declared in `cmf.js`. For example, take a look at the simplified markup below:

```html
<div data-type="path" data-path="budget">Accounting & Budget</div>
```
The `data-path` is set to "budget". This value matches an object's key in the JSON located in `cmf.js`

```JSON
"budget": { "foo" : "bar" }
```
**Note:** It is super important that these data attribute values match *exactly* with the key's in the JSON. 

### JSON object
In `cmf.js` there is a JSON object assigned to `var pathLevelDocs;`. It contains a set of object literals with the following structure:

```JSON
  "businessLeader": {
     "A": "EZSHARE-268124817-1141",
     "B": "EZSHARE-268124817-1139",
     "C": "EZSHARE-268124817-1140"
},
```

In the above example, the "businessLeader" has a value of another object literal which contains the identifiers of documents in EZSHARE related to the Business Leader career path. The `"A"` , for instance, in the object referes to the **level** of the Staff person. So, If there is a Staff with the who is a buissines leader and is a level A, the document with the identifier `EZSHARE-268124817-1141` will be the most relevant for her/his position. 

### How documents are fetched from the ezShare service
When the user clicks a particular "career path", the "level" column appears with a series of boxes-- each corresponding to a level (A, B, C, and son on...). Each of these "level" boxes is wrapped with a unique hyperlink that points to a unique document, relevant to a specific career path AND to a specific LEVEL from that path. 

The URL values of each `href` property in each box are generated dynamically by concatenating the unique EZshare ID set in the JSON object (See above) with the URL structure employed by the ezShare application to fetch documents from its web services. 

So, in the javascript we have the following base URL:

```javascript
 var baseURL = "https://idbg.sharepoint.com/teams/IICCorporate/administrative management/_layouts/15/DocIdRedir.aspx?ID=";
```
**WARNING:** if the documents that are relevant to this application where to be moved to another folder or to another system entirely, the application will become obsolete. Make sure the `baseURL` and document ID's in `var pathLevelDocs` are updated accordingly. 

This variable is then used to set the `href` value of the boxes dynamically with the following code:

```javascript
    
  //loop over visible buttons and set their href values
    $.each(level, function (index, value) {
       
        level[index].href = baseURL + docIDs[index];

});

```

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
## Recommendations
You might want to link the minified `cmf-min.js` as it reduces the script's file size 50%. 
