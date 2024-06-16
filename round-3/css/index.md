# 1. Selectors

- selects html elements so that we can add styles to that html element

```css
/*universal selector selects all the elements in the html page*/
* {
  margin: 0;
  padding: 0;
}
```

## 1. **Simple selectors:** selecting based on `name`, `id` and `class`

```css
/*element with class center*/
p.center {
  color: red;
}
```

### 2. Combination selectors

A combinator is something that explains the relationship between the selectors.

- **descendant selector (space)**
- **child selector (>)**
- **adjacent sibling selector (+)**
- **general sibling selector (~)**

**descendant selector (space)**  
The following example selects all \<p> elements inside \<div> elements:

```css
div p {
  background-color: yellow;
}
```
