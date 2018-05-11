import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Certifications",
    'href': "Michael-R-Luongo-resume.pdf",
    'desc': "My collection is growing! So far I have obtained two Microsoft Technology Associate certificates and I have completed and passed both CompTIA A+ and CompTIA Network+. Achieving both of those gives me the title of CIOS (CompTIA IT Operations Specialist). Several other certifications are on the horizon. The next three I am looking to achieve are: AWS: Certified Solutions Architect (Associate), ITIL-Foundation, and CompTIA Security+.",
    'image': {
      'desc': "example image of professional certification stamp",
      'src': "images/certifiedstamp.png",
      'comment': ""
    },
    'descriptionImages': ['images/OSfund.png',
    'images/Netfund.png', 'images/Aplus.png',
    'images/Networkplus.png', 'images/CIOS.png']
  },
  {
    'title': "Education & Work Experience",
    'href': "Michael-R-Luongo-resume.pdf",
    'desc': [`I received a BS degree in Education from Virginia Tech.
Shortly after graduation, I was offered a postion in Marketing/Sales with Skechers USA as a Territory Manager for the Mid-Atlantic region of the US.
After several years doing that I relocated to Charlotte, NC where I quickly became Assistant Branch Manager for Enterprise Rent-A-Car.`, `I returned to NJ, the area I grew up in, after awhile to return to teaching.
After 2 years of substitute teaching and not having an opportunity for a permanent position I decided to become an Independent Contractor and work for myself, transporting RV's, boats, and horse trailers all around the USA and Canada.
 Several years in I really started to focus on preparing for a career in IT.`, `I've always had a passion for technology and the way it had evolved over the years. I started watching online videos and participating in online lectures.
Right as 2018 started to roll in I decided to make a serious change and get formal training. I chose CCI Training center in Dallas, TX. There I have learned the foundation to IT. I was able to build on and fill in all the missing gaps
in knowledge. Check out my Certifications page to view my certificates thus far.`,
`Together, with my diverse background and my willingness to step out of my comfort zone and learn new things; I believe I can be an asset to any company.`],
    'image': {
      'desc': "example image of a schoolhouse",
      'src': "images/schoolhouse.png",
      'comment': ""
    },
    'descriptionImages': ['images/VT.png',
    'images/cci-training.png', 'images/acloudguru.png',
    'images/Linux-Academy.png', 'images/stormwind.png',]
  },
  {
    'title': "Interests",
    'href': "Michael-R-Luongo-resume.pdf",
    'desc': [`One main interest of mine has been the fascination of building my own computers from just a bunch of parts ordered online and turning them into working machines. This is my most recent build. I started off with a mid-tower case. I added 4 case fans, 3 of which have LED lights. It is all built on an ASUS motherboard using a Ryzen 5-1600 6 core processor, and Wraith Spire cooler. For storage a Samsung, M.2 NVMe solid state drive is attached. I added some LED strips to the inside for some color effects.`, `Outside of school and work I have a miniature pinscher named Scooby. I love traveling and together, Scooby and I, have have been to the 48 contiguous states and almost all the Canadian provinces. I have also traveled overseas solo to Italy, France, Spain, and Vatican City`],
    'image': {
      'desc': "example screenshot of computer build",
      'src': "images/sidecomputer.png",
      'comment': ""
    },
    'descriptionImages': ['images/frontcomputer.png',
    'images/sidecomputer.png', 'images/scooby-and-me.png']
  }

];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
