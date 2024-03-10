# web performance

To build websites and applications people want to use, which attract and retain users, you need to create a good user experience. Part of good user experience is ensuring the content is quick to load and responsive to user interaction. This is known as web performance,

## The "why" of web performance?

Web performance refers to **how quickly site content loads** and renders in a web browser, and **how well it responds to user interaction.**
web performance can be considered as a subset of **web accessibility**

- **Improve conversion rate:** reducing the download and render time of a site improves conversion rate and user retention

> note: A conversion rate is the rate at which site visitors perform a measured or desired action. For example, this might be making a purchase, reading an article, or subscribing to a newsletter. The action being measured as the conversion rate depends on the website's business goals.

## What is web performance?

Web performance is all about making websites fast, including making slow processes seem fast.

1. **Reducing overall load time:** How long does it take to download the website files. This tends to be affected by **latency**, how big your files are , how many files are there and some other factors. To reduce the load time, makes the files as small as possible, reduce the number of requests possible, and do some preloading techniques to make files available sooner.

   > **Latency:** is the time it takes for a packet of data to travel from source to a destination.Latency is generally considered to be the amount of time it takes from when a request is made by the user to the time it takes for the response to get back to that user.

2. **Making the site usable as soon as possible:** This means loadng the website assets in a sensible order so that the user can start to actually use it really quickly.Any other assests can load in the background or we can do a lazy loading.
   > **Time to interactive (TTI):** The measurement of how long it takes the site to get to a usable start after it has started loading is called time to interactive.
3. **Smoothness and interactivity:** Is scrolling smooth? Is animations are smooth? Are buttons clickable? are popups quick to open?. There are lot of best practices we can use inorder to make the website feels smoother, which includes using CSS animations instead of javascript animations. Minimize the number of repaints UI require due to changes in DOM.

4. **Perceived performance:** How fast a website seems to the user has a great impact on UX than how fast the website actually is. How user perceives
   performance is as importance or more important as the other performance metric,but this is subjective. Showing a loading spinner, or giving hints is better than showing a blank screen

- Perceived performance is a measure of how fast, responsive, and reliable a website feels to its users. The perception of how well a site is performing can have more impact on the user experience than the actual load and response times.

  **Performance metric:**  
   There is no single metric or test that can be run on a site to evaluate how a user "feels". However, there are a number of metrics that can be "helpful indicators":

  _the below metrics are googles performance metric for light house score_

  1. **`First contentful paint:`** marks the time at which the first image or text is painted. FCP measures how long it takes the browser to render the first piece of DOM content after a user navigates to your page. (_0–1.8s green_)
  2. **`Largest contentful paint:`** marks the time when the page's main content has likely loaded.LCP reports the render time of the largest image or text block visible in the viewport, relative to when the user first navigated to the page. LCP measures when the largest content element in the viewport is rendered to the screen. This approximates when the main content of the page is visible to users. (_0-2.5s green_ )
  3. **`Speed Index:`** how quickly the contents of a page are visibly populated. (_0–3.4s green_)
  4. **`Time to interactive:`** time taken by the webpage to be fully interactive.
  5. **`Total blocking time:`** sum of time period between FCP and time to interactive. TBT measures the total amount of time that a page is blocked from responding to user input, such as mouse clicks, screen taps, or keyboard presses. The sum is calculated by adding the blocking portion of all long tasks between First Contentful Paint and Time to Interactive.
     0–200ms is Green
  6. **`Cumulative layout shift:`** indicates the movement of visible elements within the viewport . _A good CLS score will be under 0.1_

## Measuring performance

- we can use network tab to analyze the waterfall to get an idea of latency
- You can use tools like google lighthouse or pageSpeedInsights to get the performance score
- You can utilize performance monitoring tools to measure the performance of a web app or site's user interface as you perform different actions. This indicates the features that might slow down your web app or site.

## Optimizing Images

Images and videos account for **70%** of the bytes downloaded for the average website
So it is important that we need to optimize multimedia content. Downloading large number of multimedia will have an impact on users data usage and also on the memory usage.

**Optimizing image delivery**  
Despite being the largest consumer of bandwidth, the impact of image downloading on perceived performance is far lower than many expect (primarily because the page text content is downloaded immediately and users can see the images being rendered as they arrive). However, for a good user experience it's still important that a visitor can see them as soon as possible.

- **Loading Stratergy**  
  Lazy loading can be used to load images

beyond loading there are certain other things that need to be considered

1. Are you loading the most optimal file formats?
2. Have you compressed the images well?
3. Are you loading the correct sizes?

**The most optimal format**

- `SVG` is an apt file format for images which have fewer colors and are not photo realistic.
- Images that is photo realistic we can use`Progressive JPEGs`. In contrast to normal JPEGs, render progressively (hence the name), meaning the user sees a low-resolution version that gains clarity as the image downloads, rather than the image loading at full resolution top-to-bottom or even only rendering once completely downloaded.
- `WebP` Excellent choice for both images and animated images. WebP offers much better compression than PNG or JPEG with support for higher color depths, animated frames, transparency, etc. (but not progressive display.).

**serving the optimal size**
Loading a single resolution image may not be ideal. Say for example in a mobile device you may not require a high resolution image to be loaded

> note: we can use `picture` and `source` element with **media** and **size** attributes or `img` with **srcset** attribute to send the optimized image to the user

**Device pixel ratio usecase**  
There are device with high pixel ratio, for those device we might need to deliver a high resolution image, and for all others we might need to send a normal version

```html
<img srcset="small.jpg 1x, large.jpg 2x" src="small.jpg" alt="A rad wolf" />
```

- here `srcset` attributes takes comma separated list of image URLs, each with an `x` descriptor stating which **device-pixel-ratio** that image is intended for
- `src` is a fallback for browsers that doesnt support `srcset`

**Fluid and variable sized image**

```html
<img
  srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w"
  sizes="(min-width: 36em) 33.3vw,
      100vw"
  src="small.jpg"
  alt="A rad wolf"
/>
```

> in the above approach browser will always shoes the higher resolution image available, it wont swap to the smaller resolution image once it download a higher resolution image.

**Showing different image in different scree sizes**

```html
<picture>
  <source
    media="(min-width: 36em)"
    srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w"
    sizes="33.3vw"
  />
  <source srcset="cropped-large.jpg 2x, cropped-small.jpg 1x" />
  <img src="small.jpg" alt="A rad wolf" />
</picture>
```

> in the case of picture and source, browser will always switch the images based on the media query given ,even if the higher resolution image is downloaded.
> in both the cases order in which media query is written matters,
> the one which matches first will be applied

**type switching**

- if we need to deliver svg images for the browser that supports svg, but need to give a fallback png if not supported. If PNG is also not supported then it will fallback to img

```html
<picture>
  <source type="image/svg" src="logo.svg" />
  <source type="image/png" src="logo.png" />
  <img src="logo.gif" alt="RadWolf, Inc." />
</picture>
```
