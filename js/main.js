import React from 'react';
import ReactDOM from 'reract-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Certifications",
    'image': {
      'desc': "example image of professional certification stamp",
      'src': "images/certifiedstamp.png",
      'comment': ""
    }
  },
  {
    'title': "Online Classes",
    'image': {
      'desc': "example image of a schoolhouse",
      'src': "images/schoolhouse.png",
      'comment': ""
    }
  },
  {
    'title': "Interests",
    'image': {
      'desc': "example screenshot of computer build",
      'src': "images/sidecomputer.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
