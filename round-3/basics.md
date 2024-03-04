## How does the internet works?

Lets say i am senting a photo in an email to a friend, How actually is that photo is being sent to my friend?

- A photo is basically some kind of data, that is divided into small managable packets.
- Imagine each packets is a letter in an envelop
- each envelop will get a header, which contains information such as where it is from , where it is going, what is the order etc
- format of each letter follows set of rules, (you can think about these rules as rules of online postal system, how everything is packaged, sent and received on the internet)
- yeah everything that happens in the computer, or all that the computer can understand is just 1s and 0s (binary)
- so everything that you sent over the internet is also binary
- each 1 or 0 is called a bit and 8 bit is called **1 byte**
- some how we need to pass this 1's and 0's in the radio waves, so that it can be transported to the router.
- inorder to do that, we can utilize different frequencies, lets say if we need to transfer 1, we can use one frequency, for 0 we can use another frequency.
- the receiver can detect this , and this is called frequency modulation.

> **Frequency modulation** is a technique or a process of encoding information on a particular signal (analogue or digital) by varying the carrier wave frequency in accordance with the frequency of the modulating signal. As we know, a modulating signal is nothing but information or message that has to be transmitted after being converted into an electronic signal.

- now lets say the information has reached on router, now that need to be converted to some other form inorder for the information to pass to the next location. This can vary based on the wire which we are using , if it is a copper wire then this can be pulses of electricity, if it is optical fiber cable then it is pulses of lazer. The lazer turns on when it is 1, and the lazer turns off when it is 1.
- now the ISP is responsible for checking the header of the envelop and figuring out the best route to get to the next location for that envelop, which is an **internet hub**
- What if we need to send this to the other part of the world, here comes the **internet backbone**
- fiber optics submarine cable

## What happens when you enter a URL in browser?
