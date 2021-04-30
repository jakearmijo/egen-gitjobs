<br />
<p align="center">
  <a href='https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/logo.png?raw=true'>
    <img src="https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/logo.png?raw=true" alt="Jake Logo" width="250" height="150">
  </a>

  <h3 align="center">eGen gitJobs</h3>

  <p align="center">
    Hello eGen Team member. Thank you for taking this time to view my application! This is my interview assignment for eGen Solution Full Stack Developer- NodeJS/VueJS/ReactJS position. This project took place over a one-week sprint.
    <br />
    <a href="https://github.com/jakearmijo/egen-gitjobs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://elegant-benz-03a0d6.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/jakearmijo/egen-gitjobs/issues">Report Bug</a>
    ·
    <a href="https://github.com/jakearmijo/egen-gitjobs/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<a href='https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/all-jobs-view-screenshot.png?raw=true'>
    <img src="https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/all-jobs-view-screenshot.png?raw=true" alt="all-jobs-view" width="500" height="400">
</a>
<a href='https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/single-page-view-screenshot.png?raw=true'>
    <img src="https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/single-page-view-screenshot.png?raw=true" alt="single-job-view" width="500" height="400">
</a>

Let’s say you are part of a team that is working on developing a Job Board for the us. The idea is to utilize GitHub Jobs API (https://jobs.github.com/api) for the data needs and develop a clean responsive user interface with features:
1. View all the jobs that are currently live via the GitHub Jobs API.
2. Ability to search jobs based on location, title, company, skill, full-time role.
3. Ability to default the location to the user’s current geocoordinates.
4. Implement simple or infinite scroll for the pagination if there are more jobs and you
cannot fit them on single page.
5. View details of a specific job as provided in the designs.
6. Implement a responsive design that works with desktop and mobile browsers.
7. Implement a light and dark theme mode using a toggle button. Google prefers-color-
scheme in CSS, if you are new to it.
8. Commit your code to a private GitHub repository and deploy the site using the
netlify.com Starter (free) account.

### Built With

* [Nextjs](https://nextjs.org/)
* [NetLify](https://nextjs.org/)
* [Styled-Component](https://styled-components.com/)
* [Cypress](https://cypress.io)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites 

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jakearmijo/egen-gitjobs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
### Running Local Server
1. open a terminal window OR inside VS code hit control + ` (located at the top left under ESC)
   ```sh
   npm run dev
   ```
2. open a new browser window and navigate to 
   ```sh
   http://localhost:3000
   ```
### Testing

1. open a terminal window
   ```sh
   npm run dev
   ```
2. open a second terminal window
   ```sh
   npm run cy:start
   ```

#### A Note on Testing
I used a library called [Cypress](https://docs.cypress.io/). For the most part, it was fun to learn and dive into. I used cypress one time prior at work so I did have some familiarity with it. However, I did not have any experience implementing it into a new project from scratch. I followed the documentation to set it up. I would have and should have started tested earlier. I was a tad nervous and mostly excited so I started diving into creation right away. In the future, I would implement more testing including tests for light and dark themes, pagination (if required), and improved testing of the search and filter functionality. Overall I enjoyed setting it up and I will work with [Cypress](https://docs.cypress.io/) in the future!

The cypress tests by default run during the "postBuild" event. This occurs after Next.js has completed the build and before the deployment of the site. I implemented this utilizing netlify-plugin-cypress. This article came out in March of 2021 so it seems to be very new. For more information on [netlify-plugin-cypress](https://github.com/cypress-io/netlify-plugin-cypress#readme). More helpful information can be found on the [Cypress blog](https://www.cypress.io/blog/2020/03/30/run-cypress-tests-on-netlify-using-a-single-line/). 

<a href='https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/test-passing-from-netlify.png?raw=true'>
    <img src="https://github.com/jakearmijo/egen-gitjobs/blob/main/public/images/test-passing-from-netlify.png?raw=true" alt="single-job-view" width="400" height="400">
</a>

<!-- USAGE EXAMPLES -->
## Usage

This project could be used by anyone searching for a new job using the GitHub Job board. I will inform you though that GitHub Jobs will be deprecated. New jobs will not be posted after May 19, 2021. It will shut down entirely on August 19, 2021. Read more in the [GitHub blog post](https://github.blog/changelog/2021-04-19-deprecation-notice-github-jobs-site/).

_For more examples, please refer to the [GitHub Jobs](https://jobs.github.com/)_

<!-- ROADMAP -->
## Roadmap / Things id work on and imporve

See the [open issues](https://github.com/jakearmijo/egen-gitjobs/issues) for a list of proposed features (and known issues).

After completing this I wanted to say thank you! I truly enjoyed diving into all this and creating something new from the requirements. I am missing a few things from the spec but I did research them and see how I might be able to implement them. I will touch on them here. 

#### GeolocationAPI
The first is the ability to default the location to the user’s current geocoordinates. I found a npm package called [react-geolocated](https://www.npmjs.com/package/react-geolocated). It seems to be "react-geolocated - React.js Higher-Order Component for using Geolocation API" Which when researching the geolocation subject. An interesting piece I found was on Mozilla docs about the geolocation API. So this react component might use that. For that, I would try to find the Long and Lat then convert that to a city or state. Then I could render the correct jobs based upon where the individual was. For example, if they were in Berlin. The app would show Berlin job postings.  

#### Toggle Dark mode
I came close on this but I do think that it might be Nextjs that is messing with me. I have some logic that would toggle that className of the components to light and dark mode. It does switch and I am console logging it out, but the color does not change. My thought is that since Nextjs renders everything to HTML at build time. When the build completes it is set to Light. Then I am toggling the button which switches the theme to Dark but nothing happens. Would Nextjs have to render 2 pages for every page light and a dark page in order to complete this process? I am not sure.

####  Mobile browsers
Mobile browsers are something I am VERY new to. That paired with vanilla CSS and I have 2 things I can defiantly work on and can improve on. I will keep this in mind when I tackle my next side project. 


These are just a few off the top of my head. I am sure there are a few other things as well! Anyway, thank you again for this opportunity!!

- - Jake Armijo
<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please create a GitHub issue prior to making any changes. Follow the naming pattern >> issue/##-amazing-feature >> where ## will be equal to the next issue number.

1. Fork the Project
2. Create GitHub issue
3. Create your Feature Branch (`git checkout -b issue/##-Amazing-Feature`)
4. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
5. Push to the Branch (`git push origin issue/##-Amazing-Feature`)
6. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Jake Armijo - [@jakemij](https://instagram.com/jakemij) - armijojake@yahoo.com

Project Link: [Project Github](https://github.com/jakearmijo/egen-gitjobs)

Portfolio Link:  [https://jakearmijo.com](https://jakearmijo.com) 

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [eGen Solutions](http://egen.solutions)
* [Beth Graham](http://egen.solutions)
* [Alex Armijo](https://rsmus.com/)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jakearmijo/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/jakearmijo/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jakearmijo/repo.svg?style=for-the-badge
[forks-url]: https://github.com/jakearmijo/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/jakearmijo/repo.svg?style=for-the-badge
[stars-url]: https://github.com/jakearmijo/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jakearmijo/repo.svg?style=for-the-badge
[issues-url]: https://github.com/jakearmijo/repo/issues
[license-shield]: https://img.shields.io/github/license/jakearmijo/repo.svg?style=for-the-badge
[license-url]: https://github.com/jakearmijo/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jake-armijo/
