/********************************** Projects **********************************/
const projectsData = [
  {
    projectName: ["Symposium"],
    projectPreviewImg: "SymposiumHomeDesktop",
    pNamefontSize: "22px",
    pNameFontFamily: "Sans Serif",
    summary: ["The internet deserves a “front page” where you can go to get caught up on your most important discussions. Using this new web app users will be able to participate in forum conversations where people can share news, content, or comment on other people’s posts."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["React", "Styled-Components", "Stripe", "Redux", "Auth0", "Prop-Types", "Axios", "NodeJS", "Express", "BcryptJS", "JsonWebToken", "Knex", "pg", "Cors", "Dotenv", "Helmet", "Morgan", "Jimp", "Faker", "Concurrently", "Moment", "Jest", "Nodemon"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/Lambda-School-Labs/labs10-discussion-board"],
      website: ["https://symposium-frontend.netlify.com/"]
    }
  },
  {
    projectName: ["S&J", "Architecture"],
    projectPreviewImg: "SnJArcHomeDesktop",
    pNamefontSize: "22px",
    pNameFontFamily: "Sans Serif",
    summary: ["A multi-page startup website complete with a marketing landing page, a services page, and a contact form. The project matches the design documents provided by the customer to be pixel perfect"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["HTML", "CSS", "LESS", "Javascript", "Responsive Design"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/User-Interface-Project-Week"],
      website: ["https://htmlpreview.github.io/?https://github.com/jamespagedev/User-Interface-Project-Week/blob/master/index.html"]
    }
  },
  {
    projectName: ["Postman", "Unit", "Testing"],
    projectPreviewImg: "PostmanTestPreview",
    pNamefontSize: "22px",
    pNameFontFamily: "Sans Serif",
    summary: ["A project for guiding dev teams on how to use Postman's Chai Unit Testing for backend endpoint calls. There is a full CRUD test implementation utilizing both the local postgres setup, and the online tutorial database."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["Postgres", "Postman", "Chai(Postman-Unit-Testing)", "RESTful", "bcryptjs", "cors", "knex", "pg", "jsonwebtoken", "NodeJS", "Express"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/postgres-with-postman-tdd/blob/master/package.json"],
      website: ["None"]
    }
  },
  {
    projectName: ["FF7", "Leveling", "Calculator"],
    projectPreviewImg: "FF7LevelingCalculator",
    pNamefontSize: "22px",
    pNameFontFamily: "Sans Serif",
    summary: ["This level up calculator is for the game Final Fantasy 7. The calculator will show you the next possible random stats you will gain upon your next level up. It also offers a range of levelup stat paths to get the best stat combination available per character."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["Java", "Swing", "JUnit"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/FF7-LevelUpStatCalculator"],
      website: ["None"]
    }
  },
  {
    projectName: ["Graphs"],
    projectPreviewImg: "Graphs",
    pNamefontSize: "22px",
    pNameFontFamily: "Sans Serif",
    summary: ["This project offers several graphs (up to 500 rooms) linked together in a compass direction. The program utilizes a queue, a stack, and a breadth-first-search to traverse through the graph of all rooms in the least amount of steps possible."], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
    summaryDisplayFull: false,
    techStack: ["Python", "Graphs", "BFS", "Queue", "Stack"],
    techStackDisplayFull: false,
    links: {
      github: ["https://github.com/jamespagedev/Sprint-Challenge--Graphs"],
      website: ["None"]
    }
  },
];

module.exports = {
  // Projects
  projectsData
};