/* eslint-disable prettier/prettier */
import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Arishmita Mukherjee', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Arishmita Mukherjee',
  subtitle: 'I\'m a feminist who loves aircrafts. ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Aircrafts | Kpop | Feminism | Books | Mo dao zu shi | Electronics',
  paragraphTwo: 'A learner and enthusiastic student,  currently pursuing my undergraduate degree in Electronics and Communications Engineering from Institute of Engineering & Management, Kolkata.',
  paragraphThree: 'I\'m deeply interested in aerospace engineering and would want to pursue a career in same. I support Feminism and everything related to it. I stan various kpop groups and artists, head to my Twitter profile to know more. A creative writer, basically yandere, loves Mo Dao zu shi and all of its forms.  ',
  resume: 'https://drive.google.com/file/d/101YPk84caK1RliQ5rc91Wlijn86bieBV/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project1.jpg',
    title: 'RC Airplane',
    info:
      ' An RC plane was made with aileron, elevator, and rudder controls from scratch in IIEST Shibpur Aeromodelling workshop ',
    info2: 'Feb 2020 - Feb 2020',
    url: '',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Pothole Detector ',
    info:
      'Arduino was used to design a bot that could detect potholes and monitor its motion likewise.  ',
    info2: 'Jun 2019 - Jun 2019  ',
    url: '',
  },
  {
    id: uuidv1(),
    img: 'project2.webp',
    title: 'Charging of Mobile Phone Through Heat Energy ',
    info:
      'Mobile phone charging was proposed using heat energy of itself and subsequently, the surroundings as well.',
    info2: 'Jan 2019 - Mar 2019 ',
    url: '',
  },
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: 'Temperature and Moisture Sensor  ',
    info:
      'IoT was used to implement a temperature and Moisture Sensor that could be used in agricultural aspects, with the help of BoltIoT.',
    info2: 'Feb 2018 - Feb 2018  ',
    url: '',
  },
  {
    id: uuidv1(),
    img: 'project5.jpg',
    title: 'RC Maneuvreable Hovercraft  ',
    info: 'A hovercraft is in the making that can be used on any type of terrain easily.',
    info2: 'In Progress',
    url: '',
  },
  {
    id: uuidv1(),
    img: 'project6.jpg',
    title: 'Smart Blindstick With Voice Warning  ',
    // eslint-disable-next-line prettier/prettier
    info: 'A smart blindstick is being focused on that shall warn the user about steep terrain (example- stairs), water ahead, and fast approaching objects along with other features.',
    info2: 'In Progress',
    url: '',
  },
];

// SKETCH DATA
export const sketchData = [
  {
    id: uuidv1(),
    img1: 'sketch2.jpeg',
    img: 'sketch1.jpeg',
    title1: 'Suho',
    title: 'Leeteuk',
    info: 'Park Jeong-su, known professionally as Leeteuk, is a South Korean singer, songwriter, presenter, radio personality and actor. At the age of sixteen, he was discovered by SM Entertainment and became a trainee at SM Entertainment Starlight Academy.',
    info2: 'Kim Jun-myeon, better known by his stage name Suho, is a South Korean singer, songwriter and actor. He is the leader and lead vocalist of the South Korean-Chinese boy group Exo and its sub-unit Exo-K',
  },
  {
    id: uuidv1(),
    img1:'sketch5.jpeg', 
    img: 'sketch4.jpeg',
    title1: 'Mother Earth',
    title: 'Hyuna',
    info: 'Kim Hyun-ah, better known by the mononym Hyuna, is a South Korean singer-songwriter, rapper and model. She debuted as a member of the girl group Wonder Girls in February 2007',
    info2: 'Mother Earth Crying',
  },
  {
    id: uuidv1(),
    img1:'sketch3.jpeg', 
    img: 'sketch6.jpeg',
    title1: 'Jaebum',
    title: 'Choi Siwon',
    info: 'Choi Si-won Korean: 최시원; Hanja: 崔始源 is a South Korean singer, songwriter, model, and actor known for his work as a member of South Korean boy group Super Junior.',
    info2: 'Lim Jae-beom commonly known by his stage name JB, is a South Korean singer, record producer, songwriter, dancer and actor who is the leader of South Korean boy band Got7 and part of the sub-units Jus2 and boy band duo JJ Project',
  },
  
];

// EXPERIENCE DATA
export const experienceData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Robotics Intern',
    info: 'Jetsons Robotics, Virtual    ',
    info2: ' Mar 2020 - Present ',
    info3: 'Resposible for backend content management for website and solar panels ',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Content Writing Internship',
    info: 'Contenido, Virtual  ',
    info2: ' Mar 2019 - Present ',
    info3: 'A content writing internship in Contenido',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Translation Internship ',
    info: 'Eduphilic Internshala, Virtual',
    info2: 'Mar 2019 - Present',
    info3: 'A translation internship in Eduphilic',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Campus Ambassador',
    info: 'MYWBUT , organisation for engineers',
    info2: 'Feb 2019 - Present',
    info3: 'Campus Ambassador in MYWBUT',
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Web Development Training',
    info: 'A course on HTML, CSS, JS, MYSQL, and PHP was attended. Offered by MYWBUT, Kolkata',
    info2: 'Jun 2019 - Jun 2019     ',
    info3: 'A course on HTML, CSS, JS, MYSQL, and PHP was attended. Offered by MYWBUT, Kolkata  ',
  },
];

// Additional data
export const additionalData = [
  {
    id: uuidv1(),
    title: 'IEMIEO',
    info: ' Secured 4th rank in IEMIEO(International English Olympiad organised by IEM in collaboration with SMARTU and CodeChef)',
    info2: '',
  },
  {
    id: uuidv1(),
    title: 'Research Paper',
    info:
      'Wrote a research paper on "English From A Feminist Perspective :History and Modern Aspects" ',
    info2: '',
  },
  {
    id: uuidv1(),
    title: 'Industrial Visits',
    info: 'Attended JBNSTS summer camp in 2016 and visited VECC Kolkata as an industrial visit, Industrial Visit to Pecon Engineers as part of IEEE program. ',
    info2: '',
  },
];


// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out to me ',
  btn: 'Contact me',
  email: 'arishmitamukherjee@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Ariajoonie',
      title: 'twitter',
    },
    {
      id: uuidv1(),
      name: 'sticky-note',
      url: 'https://www.wattpad.com/user/ArishmitaMukherjee',
      title: 'wattpad',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/arishmita-mukherjee-660740173/',
      title: 'linkedin',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Ariajoonie',
      title: 'github',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
