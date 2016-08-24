# Step 2

Add CSS.


## Objectives

* Layout: given the target devices and viewports, what needs changing from Step 1?

* Usability: does everything work? (This is an event site!)

* Image and media files: what needs to change? Look for anomalies. How low can you go? Reduce image quality as far as possible. Compare [rob_dodson.jpg](images/speakers/rob_dodson.jpg) with [tal_oppeneimer.jpg](images/speakers/tal_oppeneimer.jpg).

* Testing in all target browsers and viewports.


## Things to check

* Is text readable on all target devices?

* Does any content overflow page width?

* Are images all the same file size and resolution? Are images optimized? (I saved 1.5MB/17% just running the images through ImageOptim.)

* Is all code valid according to editor tools: HTMLHint, CSSLint.

* Keep your CSS as specific and as broad as possible.

* Standardize margins: right/below. Add padding to container, not margins. Use padding for padding, margins for margins.

* Is the navigation OK? What if there were more items? Would a hamburger menu be better? How would you implement that?
