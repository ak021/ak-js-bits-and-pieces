# Regex

### Flags

- `g`: means get all the matches, without g we will only get the first match
- `i`: i means case sensitive

---

### Quantifiers

- `+`: 1 or more

```js
// mathches e or more than 1 e

/e+/g;
```

- `?`: 0 or 1 (optional)

```js
// mathches all the e, and if there is ea, it will match ea
/ea?/g;
```

- `*`: 0 or more

// mathches all the e, and if there is e along with any number of a, it will match
/ea?/g;

```

```

- `.`: matches anything

```js
// matchest cart, hart, part
/.art/g;
```

---

### escape character \

```js
/\./;
```

---

### `\w` = match any alphanumeric or underscore

### `\W` = anything that is not a alphanumeric or underscore

---

### Min and Max length

```js
   // match alphanumeric characters with 4 or more characters
    /\w{4,}/

    // match alphanumeric characters with 4 to 5 characters
    /\w{4,5}/
```

---

### character sets

```js
// anything that is cat, fat
/[cf]at/g

// anything that will ends with ate
/[a-zA-Z]ate/g
```

---

### Grouping

```js
// lets say if we want to match anything that is uppercase or lowercase within a group

/(t|T)ate/g;
```

### What is the difference between () and []

- `()` is grouping
- `[]` is character set

```js
// we can say that

/(c|f)at/ === /[cf]at/;
```

---

### Matching the first line ^

```
// ^ matches the first line
/^The/


// matches lowercase "the" or uppercase "The"
/^[Tt]he/
```

---

### Matching the end

```
// matches the period in the end of the line
/\.$/
```

## Lookbehinds and Lookaheads

### Lookbehind
