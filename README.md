# [Circassian / Адыгабзэ](https://kkumyk.github.io/circassian-language/)

Circassian / Адыгабзэ is a site dedicated to the Cirassian languages and it is created for two main purposes:
<ol>
<li>to raise awareness about an endangered language of Circassian, and
 </li>
<li>to create an interactive alphabet as an alternative to the static alphabet pages available online.</li>
</ol>
This project was created using HTML, CSS and JavaScript.


![Circassian Language - different devices view](doc/testing//circassian-on-different-devices.webp)


## Table of Contents


## User Experience

### User Stories

#### User that is familiar with the Circassian language

These are native speakers that for different reasons stopped speaking the language and are looking for an online material to get re-engaged with it.
<hr>
<ul>
<li>As a user, I want to quickly get an overview of the material the site is offering.</li>
<li>As a user, I want to understand how this site can help me to re-engage with the language and how exactly it can be used for this purpose.</li>
</ul>

#### User that is unaware of the existence of the Circassian language
These are users that most likely landed on the site by accidentally as they were not intentionally searching for it.
<hr>
<ul>
<li>As a user, I want easily understand the main purpose of the website.</li>
</ul>


## Design

### Main Colours
The colours chosen for this project are related to the colours characteristic for Circassian people. E.g.: green is the colour of the <a href="https://en.wikipedia.org/wiki/Circassian_flag#:~:text=It%20consists%20of%20a%20green,the%20designer%20of%20the%20flag.">Circassian flag</a>. It also represents these peoples' connection to nature and the role it is playing in their culture. For this purpose, many words chosen for the alphabet are related to nature, such as animal names.

<img src="doc/doc-colours.jpg" style="width:798px;"/>


## Features

### Hub Page
The purpose of the Hub page is to give an overview of the site's contents.
<img src="doc/features/doc-hub.jpg" style="width:798px;"/>

The About page is created in a newspaper style featuring the main challenges the Circassian language is currently facing. 
<img src="doc/features/doc-about.jpg" style="width:798px;"/>

The Kabardian Alphabet page introduces one of the standards used for the Circassian language - the Kabardian - and lists the letters and word examples in both, Cyrillic and Latin, accompanied by their sounds.

<img src="doc/features/doc-alphabet.jpg" style="width:798px;"/>

The Contact page provides an option to to connect with people concerned with the challenged the Circassian language is facing and share feedback and ideas.
<img src="doc/features/doc-contact.jpg" style="width:798px;"/>

## Future Features
Two features are planned for the site:
<ol>
  <li>an option to navigate through the letters groups starting with the same latin letter on the Alphabet page with the keyboard</li>
  <li>an interactive page with a poem in Kabardian that will allow to take user's voice input and compare it with the recording done by a native speaker; the result of this interaction will be a calculated score that will represent the pronunciation accuracy.</li>
</ol>


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
The CSS error on the alphabet page is coming from the imported <strong><italic>css/all.min.css</italic></strong> file that is used to load the sound favicon. 

## Lighthouse Reports

<img src="doc/testing//lighthouse-hub.jpg" alt="Hub page CSS Validation" style="width:798px;"/>
</br>
<img src="doc/testing//lighthouse-about.jpg" alt="About CSS Validation" style="width:800px;"/>
</br>
<img src="doc/testing//lighthouse-alphabet.jpg" alt="Contact CSS Validation" style="width:800px;"/>
</br>
<img src="doc/testing//lighthouse-contact.jpg" alt="Alphabet CSS Validation" style="width:800px;"/>

### Further Testing

- The Website was tested on Google Chrome and Firefox.
- The website was viewed on a variety of devices such as Desktop, Laptop and Android phones.

### Accessibility

- The one image on the [Kabardian Alphabet](https://kkumyk.github.io/circassian-language/kabardian-alphabet.html) contains an alt tag. Images for the remaining letters are currently being worked on. Once these are added to the site, they will be supplied with the alt tags.

- All images were (converted)[(https://convertio.co/webp-converter/)] into WEBP format.
- The site is responsive to different screen sizes
- Semantic elements used throughout the site.

### Bugs

- There is an extra space on the right site on the [About page](https://kkumyk.github.io/circassian-language/about.html) which should be removed in the later versions.
- Responsiveness for smaller devices needs further adjustments for the [About page](https://kkumyk.github.io/circassian-language/about.html) as the subheading is partly covered by the menu dropdown. Alternatively, the main text can make fully invisible with JS when the dropdown menu is clicked and re-appear back agin after the user has chosen and clicked on the menu link, see [example on mobile](https://meduza.io/).

## Technologies Used

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

## Credits






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
<!-- <li></li>
<li></li> -->

</ul>