import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Certifications",
    'href': "https://example.com",
    'desc': "My collection is growing! So far I have obtained two Microsoft Technology Associate certificates and I have completed and passed both CompTIA A+ and CompTIA Network+. Achieving both of those gives me the title of CIOS (CompTIA IT Operations Specialist). Several other certifications are on the horizon. The next three I am looking to achieve are: AWS: Certified Solutions Architect (Associate), ITIL-Foundation, and CompTIA Security+.",
    'image': {
      'desc': "example image of professional certification stamp",
      'src': "images/certifiedstamp.png",
      'comment': ""
    },
    'images': [
       "images/OSfund.png",
       "images/Netfund.png",
       "images/Aplus.png",
       "images/Networkplus.png",
       "images/CIOS.png"
    ]
  },
  {
    'title': "Online Classes",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example image of a schoolhouse",
      'src': "images/schoolhouse.png",
      'comment': ""
    }
  },
  {
    'title': "Interests",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of computer build",
      'src': "images/sidecomputer.png",
      'comment': ""
    }
  }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
