/********************************** Projects **********************************/
const projectsData = [
  {
    projectName: ["Symposium"],
    projectPreviewImg: "SymposiumHomeDesktop",
    pNamefontSize: "22px",
    pNameFontFamily: "Sans Serif",
    summary: ["Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity ", "Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
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
    summary: ["Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity ", "Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity Ipsum Foo Bar Blankity"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
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
    summary: ["Ipsum\nfoo\nbar\nblah"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
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
    summary: ["Ipsum foo bar blah"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
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
    summary: ["Ipsum foo bar blah"], // first element is the preview, if it's too big to fit in preview, add more elements so an elipsis will show and combine them.
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