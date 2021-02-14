import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import movieApp from './movie-app.png';
import todoApp from './app-todo.png';
import smmApp from './portfolio1.png';
import galeryApp from './portfolio2.png';

const resumeData = {
  name: "Budi Irawan",
  title: "Frontend Developer",

  birthday: "December 5th 1994",
  email: "irawanalkarim@gmail.com",
  address: "Babadan,RT.23/04,Duren",
  phone: "+6285559169235",

  socials: {
    Github: {
      link: "https://www.github.com/irawanalkarim",
      text: "Budi Irawan",
      icon: <GithubIcon />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/irawanalkarim",
      text: "Budi Irawan",
      icon: <LinkedInIcon />,
    },
  },

  about:
    "My name is Budi Irawan, I am an alumnus of the State Vocational High School 1 Tengaran majoring in informatics engineering with a concentration in software engineering",

  experiences: [
    {
      title: "Belajar Dasar Pemrograman Web",
      date: "04 April 2020",
      description:
        "www.dicoding.com",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      date: "18 Agustus 2020",
      description:
        "www.dicoding.com",
    },
    {
      title: "Membangun Progressive Web Apps",
      date: "10 November 2020",
      description:
        "www.dicoding.com",
    }
  ],

  educations: [
    {
      title: "SMK N 1 Tengaran",
      date: "2010 - 2013",
      description:
        "Rekayasa Perangkat Lunak (RPL)",
    },
  ],

  skills: [
    {
      title: 'Front End',
      description: [
        'HTML',
        'CSS',
        'Javascript',
        'Bootstrap',
        'React Js'
      ],
    },
    {
      title: 'Back End',
      description: ['Php'],
    },
    {
      title: 'Database',
      description: ['MySql'],
    },
    {
      title: 'Source Control',
      description: ['Git','GitHub'],
    },
  ],

  projects: [
    {
      tag: 'React',
      image: movieApp,
      title: 'Movie App',
      caption: 'Short description',
      description: 'This application is useful for searching for a list of favorite movies, built using the React JS framework',
      links: [
        {link: 'https://github.com/irawanalkarim/react-movie', icon: <GithubIcon />}
      ],
    },
    {
      tag: 'React',
      image: todoApp,
      title: 'Todo List App',
      caption: 'Short description',
      description: 'This application is useful for recording a list of tasks that need to be done, built using the React JS framework',
      links: [
        {link: 'https://github.com/irawanalkarim/react-todo-app', icon: <GithubIcon />}
      ],
    },
    {
      tag: 'CodeIgniter',
      image: smmApp,
      title: 'Simple Money Management',
      caption: 'Short description',
      description: 'This application is useful for recording the costs needed to make one shirt, built using Bootstrap as the frontend, Codeigniter as the backend, and Mysql as the database',
      links: [
        {link: 'https://github.com/irawanalkarim/simple-money-management', icon: <GithubIcon />}
      ],
    },
    {
      tag: 'Laravel',
      image: galeryApp,
      title: 'Laravel Photo Galley',
      caption: 'Short description',
      description: 'This application is useful for storing photo galleries, built using Bootstrap as the frontend, Laravel 7 as the backend, and Mysql as the database',
      links: [
        {link: 'https://github.com/irawanalkarim/photo-gallery-with-laravel-7', icon: <GithubIcon />}
      ],
    },
  ]
};

export default resumeData;
