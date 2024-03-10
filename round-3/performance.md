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
