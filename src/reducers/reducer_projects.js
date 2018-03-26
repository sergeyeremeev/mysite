import vipoutletLogo from '../assets/images/vip-logo-blue.png';
import mpactLogo from '../assets/images/mpact_logo.png';
import hulqLogo from '../assets/images/hulq_logo.png';
import dlLogo from '../assets/images/dl_logo.png';
import goTRGLogo from '../assets/images/gotrg_logo.svg';
import aamLogo from '../assets/images/aam_logo.png';
import htmlGlasses from '../assets/images/html_glasses_final.svg';
import mapImage from '../assets/images/map_project.png';

export default () => [
    {
        shortName: 'ThisWebsite',
        name: 'Your Next Developer',
        url: 'http://sergeyeremeev.github.io/resume-site/',
        image: htmlGlasses,
        role: 'Project owner and creator',
        type: 'One-man project',
        description: 'A resume/portfolio website built with React (plus Redux) JavaScript library.',
        tasks_features: [
            'React and Redux to efficiently manage the state of the application and efficiently update the views in ' +
            'response to certain actions',
            'Styled components are used to style the application in a more "reactive" way',
            'A completely custom self-created website design',
            'Project laid out as a single page application',
        ],
        repository: 'https://github.com/sergeyeremeev/mysite',
    },
    {
        shortName: 'Hulq',
        name: 'Hulq landing page',
        url: 'https://hulq.com/',
        image: hulqLogo,
        role: 'Creation of a landing page for an upcoming car leasing service.',
        type: 'One-man project',
        description: 'A landing page for a project to revolutionize the leasing process and make it much easier for ' +
        'people by turning the roles and making car dealers compete for customer\'s business. This landing page is ' +
        'dedicated to attract customers while the development of the main website is taking place.',
        tasks_features: [
            'Technologies used: HTML, Webpack, PostCSS, es6',
            'Converting inVision/Zeplin design to web page',
            'Back and forth communication with the designer to go through multiple versions of animations to find ' +
            'the best one',
            'Optimizing performance to avoid negative impact of animating elements, especially on mobile devices',
            'Creating a WordPress blog located at - https://hulq.com/blog/ - in a similar design to the main landing ' +
            'page',
            'Testing animations on all possible resolutions to ensure they do not interfere with page text',
        ],
        repository: 'Private repository, all code belongs to goTRG.',
    },
    {
        shortName: 'Mpact',
        name: 'Mpact Digital',
        url: 'http://www.mpactdigital.com/',
        image: mpactLogo,
        role: 'Creation of a single page digital advertising website highly filled with stylistic features',
        type: 'One-man project',
        description: 'A tight-deadline project aimed at digital advertising. A full-page design and a large number ' +
        'of animations based on user actions provide a feel of high interactivity.',
        tasks_features: [
            'Technologies used: HTML, SCSS, Gulp, vanilla JS',
            'Self-written full-page scroll implementation using vanilla JS and CSS transforms and transitions',
            'Self-written navigation between full-page sections and inner elements',
            'A large amount of CSS transitions and animations on user scroll, hovers, clicks, etc',
            'A lot of performance optimizations to make sure the animations run smoothly on mobile devices',
            'Self-written cards carousel in the how it works section',
            'Object oriented approach to organize the whole application',
        ],
        repository: 'Private repository, all code belongs to goTRG.',
    },
    {
        shortName: 'VipOutlet',
        name: 'VipOutlet',
        url: 'https://vipoutlet.com',
        image: vipoutletLogo,
        role: 'Continuous frontend developments and updates on a large e-commerce project',
        type: 'Team project',
        description: 'A development on this website is going on for over 3 years. It has undergone massive design ' +
        'and structure changes, gained a lot of new features, which eventually led to signing a contract with ' +
        'Walmart and creating a "Walmart Associate" version of the website dedicated to providing exclusive prices ' +
        'for Walmart employees.',
        tasks_features: [
            'Technologies used: HTML, PHP, WordPress, WooCommerce, Grunt, Scss, vanilla JS, jQuery',
            'Implementing new designs on a regular basis to provide an up-to-date look of the website',
            'Ensuring that no visual or functional bugs appear as new features are developed by the backend team',
            'Creation of a very complex checkout page using OOP principles',
            'Being responsible for creation of a complex user area',
            'Frequently examining the entire website to check for potential bugs and suggesting possible design ' +
            'improvements',
            'Getting a strong familiarity with the Foundation CSS framework',
            'Setting up Grunt tasks to speed up the development process',
            'Writing a fair amount of PHP and WordPress related code',
        ],
        repository: 'Private repository, all code belongs to goTRG.',
    },
    {
        shortName: 'DirectLiquidation',
        name: 'DirectLiquidation',
        url: 'https://directliquidation.com',
        image: dlLogo,
        role: 'Continuous frontend developments and updates on an industry leading e-commerce project',
        type: 'Team project',
        description: 'A real-time bidding platform for one of the largest customer returns, refurbished and ' +
        'overstock product markets. Every day this website connects thousands of customers to the world\'s biggest ' +
        'retailers. Every little piece in this huge system must run smoothly in order to provide top quality service ' +
        'and make the bidding and buying process smooth and pleasant for all customers.',
        tasks_features: [
            'Technologies used: HTML, PHP, WordPress, WooCommerce, Grunt, Scss, vanilla JS, jQuery',
            'Implementing new designs on a regular basis to provide an up-to-date look of the website',
            'Constantly working on adding new features, to make the platform more appealing to businesses around the ' +
            'globe',
            'Ensuring that no visual or functional bugs appear as new features are developed by the backend team',
            'Frequently examining the entire website to check for potential bugs and suggesting possible design ' +
            'improvements',
            'Replacing old CSS with the new more organized structure, implementing new pages using Foundation CSS ' +
            'framework',
            'Setting up Grunt tasks to speed up the development process',
            'Writing a fair amount of php and WordPress related code',
        ],
        repository: 'Private repository, all code belongs to goTRG.',
    },
    {
        shortName: 'goTRG',
        name: 'goTRG',
        url: 'https://gotrg.com',
        image: goTRGLogo,
        role: 'Reworking the majority of the pages to create a more modern look of the website',
        type: 'One-man project',
        description: 'The face of the goTRG company, meaning that this is arguably their most important project in ' +
        'terms of aesthetics. ',
        tasks_features: [
            'Technologies used: HTML, PHP, WordPress, Grunt, Scss, vanilla JS, jQuery',
            'Reworking majority of the pages to have full-height sections using fullpage.js',
            'Adding a lot of CSS animations to create a highly modern and interactive appearance of the website',
            'Creating custom popups and overlays to satisfy ambitious designs',
            'Working with images to create beautiful animations depending on the user actions',
            'Creating custom filter system for the \'careers\' page',
            'Heavily testing the entire website to make sure that new changes don\'t interfere with the rest of the ' +
            'website',
        ],
        repository: 'Private repository, all code belongs to goTRG.',
    },
    {
        shortName: 'aam',
        name: 'AutoAuctionMall',
        url: 'https://autoauctionmall.com',
        image: aamLogo,
        role: 'Creating separate components for the online vehicle auction marketplace',
        type: 'Team project',
        description: 'A large online marketplace aimed at connecting major auction houses across the North America. ' +
        'Such ambitious project requires top quality of code to provide customers with the greatest user experience. ' +
        'The most modern technologies were used to make sure that the quality of the website and performance of ' +
        'every action match world\'s very best online projects.',
        tasks_features: [
            'Technologies used: HTML, JavaScript, MeteorJS, Scss',
            'Creating various components and widgets for the website',
            'Experimenting with CSS animations and transitions to achieve an appealing look and interactive feel for ' +
            'the applications',
            'Replacing old CSS with the new more organized structure, implementing new pages using Foundation CSS ' +
            'framework',
            'Continuous testing and fixing of existing and new visual and functional bugs',
            'Getting a strong familiarity with the MeteorJS framework',
        ],
        repository: 'Private repository, all code belongs to goTRG.',
    },
    {
        shortName: 'neighborMap',
        name: 'Neighborhood Map',
        url: 'http://sergeyeremeev.github.io/map/build/',
        image: mapImage,
        role: 'Udacity student project assignment',
        type: 'One-man project',
        description: 'A project for the Frontend Udacity Nanodegree course, aimed at getting experience in writing ' +
        'OOP JavaScript using one of the popular MVC frameworks (KnockoutJS). The goal of the project is to use ' +
        'Google Map API to create an interactive map application, which would allow user to see nearby places of ' +
        'interest with additional information.',
        tasks_features: [
            'Getting comfortable with advance usage of Google Maps API',
            'Studying and using KnockoutJS framework in great depth',
            'Writing Object Oriented Javascript following the best practices',
            'Familiarizing yourself with RESTful API',
            'Showing a great degree of creativity by coming up with your own design and additional features to get ' +
            'additional credits for the assignment',
            'Getting used to writing a clear and detailed readme for the project on github',
        ],
        repository: 'https://github.com/sergeyeremeev/nanodegree-p5',
    },
];
