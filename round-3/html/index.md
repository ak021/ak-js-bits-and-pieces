# HTML

## 1. what is !DOCTYPE in html?

- doctype or document type is an instruction which tells the browser about the markup language in which the current page is written.which says how to interpret the content of the webpage.
- This ensures that the web page is parsed the same way by different web browsers
- it is not an element or a tag
- it should be on the top of the webpage, before declaring any tags or element
- DOCTYPE for HTML5 declaration is `case-insensitive`
- during the inital years of HTML, people where not really following any standards as such, because of that there were problems when it comes to cross browser compatibility.
- so W3C wrote a set of standards to be followed by both the developers and the browser, but these were some breaking changes from the current ways.
- inorder to tackle this browser vendors started adding rendering modes, so the one who writes the webpage should instructs the browser to choose which rendering mode to use.

  - full standard mode: renders pages according to the W3C web standards.
  - quirks mode : non standard way
  - almost standard mode

```html
< !DOCTYPE html >
```

## 2. What are block and inline elements?

- A **block-level element** always starts on a new line and takes up the full width available.  
   eg: _div, p, article, nav, main, aside, ul, ol, h1- h6, header, footer, section, form_
- An **inline element** does not start on a new line and it only takes up as much width as necessary.  
  eg: _span, label, i,_

## 3. Tag vs Elements vs Attributes?

- **HTML tags:** are the starting and ending part of an HTML element  
  They begin with < and end with >.  
   eg: _\<p> is starting tag and \</p> is the ending tag_
- **HTML elements:** Elements consist of both closing tag, opening tag and the content inside the tags
- **HTML attributes:** used to define the character of an html element, it provides additional things, such as styling, settings, extra information for an element

## Head and Title tags

- **Head:** head element is a container for metadata, it contains information related to the webpage, such as title, styles , script, meta tags
- **meta:** html meta tag gives metadata or information about the html document. it includes information like
  - characterset
  - keywords
  - viewport settings
    meta tags are not visible on the webpage

```html
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Free Web tutorials" />
  <meta name="keywords" content="HTML, CSS, JavaScript" />
  <meta name="author" content="John Doe" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

## importing style and script

```html
<head>
  <link rel="stylesheet" href="style.css" />
  <script src="app.js"></script>
</head>
```

## table in html
