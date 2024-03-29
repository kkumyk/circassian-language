# [Circassian / Адыгабзэ](https://kkumyk.github.io/circassian-language/)

Circassian / Адыгабзэ is a site dedicated to the Cirassian languages and is created for two main purposes:
<ol>
<li>to raise awareness about the challenges this language is currently facing, and</li>
<li>to introduce an interactive alphabet as an alternative to the static alphabet pages available online for this language.</li>
</ol>
This project was created using HTML, CSS and JavaScript.

![Circassian Language - different devices view](doc/testing/circassian-on-different-devices.webp)


## Table of Contents
<ol>
<li><a href="#user-experience">User Experience</a></li>
    <ul>
    <li><a href="#user-stories">User Stories</a></li>
    </ul>
<li><a href="#design">Design</a></li>
<ul>
<li><a href="#colours">Colours</a></li>
<li><a href="#wireframes">Wireframes</a></li>
</ul>
<li><a href="#features">Features</a></li>
<li><a href="#testing">Testing</a></li>
<ul>
<li><a href="#html-validation">HTML Validation</a></li>
<li><a href="#css-validation">CSS Validation</a></li>
<li><a href="#lighthouse-reports">Lighthouse Reports</a></li>
<li><a href="#further-testing">Further Testing</a></li>
<li><a href="#accessibility">Accessibility</a></li>
<li><a href="#bugs">Bugs</a></li>
</ul>
<li><a href="#technologies">Technologies</a></li>
<li><a href="#credits">Credits</a></li>
<li><a href="#future-features">Future Features</a></li>
<li><a href="#further-improvements">Further Improvements</a></li>
</ol>

## User Experience

### User Stories

#### I. User that is familiar with the Circassian language

These are native speakers that for different reasons stopped speaking the language and are looking for an online material to get re-engaged with it.
<ul>
<li>As a user, I want to quickly get an overview of the material the site is offering.</li>
<li>As a user, I want to understand how this site can help me to re-engage with the language and how exactly it can be used for this purpose.</li>
</ul>

#### II. User that is unaware of the existence of the Circassian language
The user did most likely land on the site by accident as this was not a result of an intentional search.
<ul>
<li>As a user, I want easily understand the main purpose of the website.</li>
</ul>


## Design

### Colours
The main colour if the site is green as it is the colour of the <a href="https://en.wikipedia.org/wiki/Circassian_flag#:~:text=It%20consists%20of%20a%20green,the%20designer%20of%20the%20flag.">Circassian flag</a>. It also represents Circassians' connection to nature and the role it is playing in their culture. For this purpose, many words chosen for the alphabet are related to nature, such as animal names. 

<img src="doc/doc-colours.jpg" style="width:798px;"/>

### Wireframes


### Hub page mockup
<img src="doc/hub-mockup.jpg" style="width:798px;"/>

### About page mockup
<img src="doc/about-mockup.jpg" style="width:798px;"/>

### Alphabet page mockup
<img src="doc/alphabet-mockup.jpg" style="width:798px;"/>

### Contact page mockup
<img src="doc/contact-mockup.jpg" style="width:798px;"/>

## Features

### Hub page
The purpose of the Hub page is to give an overview of the site's contents.
<img src="doc/features/doc-hub.jpg" style="width:798px;"/>

### About page
The About page is created in a newspaper style featuring the main challenges the Circassian language is currently facing. 
<img src="doc/features/doc-about.jpg" style="width:798px;"/>

### Alphabet page
The Kabardian Alphabet page introduces one of the standards used for the Circassian language - the Kabardian - and lists the letters and word examples in both, Cyrillic and Latin, accompanied by their sounds.
<img src="doc/features/doc-alphabet.jpg" style="width:798px;"/>

### Contact page
The Contact page provides an option to connect with people concerned about the challenged the Circassian language is facing and share feedback and ideas.
<img src="doc/features/doc-contact.jpg" style="width:798px;"/>


## Testing

### HTML Validation
<img src="doc/testing/hub-page-html-validation.jpg" alt="Hub page HTML Validation" style="width:800px;"/>
</br>
<img src="doc/testing//about-html-validation.jpg" alt="About HTML Validation" style="width:800px;"/>
</br>
<img src="doc/testing//alphabet-html-validation.jpg" alt="Alphabet HTML Validation" style="width:800px;"/>
</br>
<img src="doc/testing//contact-html-validation.jpg" alt="Contact HTML Validation" style="width:800px;"/>

#### Comments
The warnings on the [Kabardian Alphabet page](https://kkumyk.github.io/circassian-language/kabardian-alphabet.html) about special characters needing to be replaced with the Unicode are taken notes of and will be added at the later stage. 

### CSS Validation

<img src="doc/testing//hub-page-css-validation.jpg" alt="Hub page CSS Validation" style="width:798px;"/>
</br>
<img src="doc/testing//about-css-validation.jpg" alt="About CSS Validation" style="width:800px;"/>
</br>
<img src="doc/testing//alphabet-css-validation.jpg" alt="Alphabet CSS Validation" style="width:800px;"/>
</br>
<img src="doc/testing//contact-css-validation.jpg" alt="Contact CSS Validation" style="width:800px;"/>

#### Comments
The CSS error on the alphabet page is coming from the imported <strong><italic>css/all.min.css</italic></strong> file that is used to load the sound icons. 

### Lighthouse Reports

<img src="doc/testing//lighthouse-hub.jpg" alt="Hub page CSS Validation" style="width:798px;"/>
</br>
<img src="doc/testing//lighthouse-about.jpg" alt="About CSS Validation" style="width:800px;"/>
</br>
<img src="doc/testing//lighthouse-alphabet.jpg" alt="Contact CSS Validation" style="width:800px;"/>
</br>
<img src="doc/testing//lighthouse-contact.jpg" alt="Alphabet CSS Validation" style="width:800px;"/>

#### Comments
The score of 70 is given for the [Kabardian Alphabet page](https://kkumyk.github.io/circassian-language/kabardian-alphabet.html). The tool recommends to reduce the use of the imported CSS files and resize images used on the site. This had been noted and will be done at the next stages. There is currently only one image on the Alphabet page. When more images are added, the image sizing will be addressed for all of them in one go.



### Further Testing

- The Website was tested on Google Chrome and Firefox.
- The website was viewed on a variety of devices such as Desktop, Laptop and Android phones.

### Accessibility

- The one image on the [Kabardian Alphabet](https://kkumyk.github.io/circassian-language/kabardian-alphabet.html) contains an alt tag. Images for the remaining letters are currently being worked on. Once these are added to the site, they will be supplied with the alt tags.

- [WEBP](https://developers.google.com/speed/webp) is used for images on the site.
- The site is responsive to different screen sizes.
- Semantic elements used throughout the site.

### Bugs

- There is an extra space on the right site on the [About page](https://kkumyk.github.io/circassian-language/about.html) which should be removed in the later versions.
- Responsiveness for smaller devices needs further adjustments for the [About page](https://kkumyk.github.io/circassian-language/about.html) as the subheading is partly covered by the menu dropdown. Alternatively, the main text can be made fully invisible with JS when the dropdown menu is clicked and re-appear back again after the user clicked on the menu link, see [example on mobile](https://meduza.io/).

## Technologies

- [HTML](https://web.dev/learn/html/overview/) was used to provide structure for this project and highlight the semantic elements of tits content.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) was used to style the HTML elements.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) was used to add sounds to the site.
- [GitHub](https://github.com/) is the hosting site used to store the code for the website.
- [Git](https://git-scm.com/) was used as a version control software to commit and push the code to the GitHub repository.
- [Google Fonts](https://fonts.google.com/) was used to import fonts.
- [GIMP](https://www.gimp.org/) was used to create favicon for the site.
- [WEBP Converter](https://convertio.co/webp-converter/) used to convert images to webp format.
- [Google Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used during the testing of the website.
- [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/overview/) was used during testing, debugging and making the website responsive.
- [W3C HTML Validator](https://validator.w3.org/nu/) was used to check for errors in the HTML code.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to check for errors in the CSS code.
- [FabForm](https://fabform.io/) used for backend on the contact form.
- [balsamiq](https://balsamiq.com/) used to create wireframes.

## Credits

### Media

- [Father Drawing](https://www.timesnownews.com/web-stories/viral/8-easy-yet-captivating-fathers-day-drawing-ideas-for-kids-to-try-in-2023/photostory/101048907.cms) for the alphabet page.

### Content
The content on the About page is based on the sources below:
- Open Caucasus Media, [Activists mark Circassian Language Day in Russia and Georgia](https://oc-media.org/activists-mark-circassian-language-day-in-russia-and-georgia/)
- Open Caucasus Media, [Vulnerable and divided: the uncertain state of the Circassian language](https://oc-media.org/features/vulnerable-and-divided-the-uncertain-state-of-the-circassian-language/)
- [A sad story about how the Kabardian language is forgotten](https://www.youtube.com/watch?v=emIvYbCygKM&t=24s)
- [A Grammar of the Kabardian Language by J Colarusso](https://library.oapen.org/bitstream/id/eb3cef03-30c0-4571-b5b3-11be2cd4f9e3/9781552386682.pdf)

### Code
- Parts of the HTML and CSS was borrowed from the Code Institute's [Love Running](https://code-institute-org.github.io/love-running-2.0/index.html) main page.
- [Newspaper Style Design by Silke V](https://codepen.io/silkine/pen/QWBxVX) was used on the About page.

## Future Features
Two features are planned for the site:
<ol>
  <li>an option to navigate through the letters groups starting with the same latin letter on the Alphabet page with the keyboard</li>
  <li>an interactive page with a poem in Kabardian that will allow to take user's voice input and compare it with the recording done by a native speaker; the result of this interaction will be a calculated score that will represent the pronunciation accuracy.</li>
</ol>

## Further Improvements
<ul>
<li>style nav bar so that it is clear where you are - on which page</li>
<li>add favicons for sises below:

```
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">

<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
```
</li>

<li>add 404 page</li>
<li>add animation to the hub: the logo text and the text in the circle will be switching to indicate that this is the same text</li>

<li>create and add the remaining images to the alphabet letters</li>

<li>replace special characters with their corresponding unicodes</li>
</ul>