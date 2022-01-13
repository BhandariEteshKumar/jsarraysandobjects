const data = {
  Name: "Bandari Etesh Kumar",
  Mobile_No: "+91 9491236506",
  Email_ID: "eteshb@gmail.com",
  ProjectExperience: [
    "Developed Automation Test Scripts for testing of different components in a website, through different fields, login, users, data, admin testcases",
    "Automated 250+ testcases.",
    "Implemented scripts using selenium with C# in Visual Studio Code.",
    "Optimized the Code written by the team-members and provide solutions to resolve the problems",
    "Contributed in implementing a new framework.",
  ],
  TechnicalSkills: {
    LanguagesAndTechnology: [
      "C",
      "C++",
      "JAVA",
      "HTML",
      "Spring Boot",
      "JavaScript",
    ],
    Scripting: "Selenium with C#",
    Databases: ["SQL", "MongoDB"],
    Tools: "Visual Studio Code",
  },
  Education: {
    BTech: {
      Name_of_the_Institution: "G.Pullareddy Engineering College , Kurnool.",
      Year_Of_Passing: "2016-2020",
      CGPA: 7.41,
    },
    Intermediate: {
      Name_of_the_Institution: "Narayana Junior College , Adoni.",
      Year_of_Passing: "2014-2016",
      MARKS: 936,
    },
    SSC: {
      Name_of_the_Institution: "Akshara Sri IIT School, Adoni",
      Year_of_Passing: "2014",
      CGPA: 9.3,
    },
  },
  Achievements: [
    "Did an IoT project based on WeMos D1 Mini IoT board",
    "Selected in APSSC and IUCCE collaboration on virtual and rare labs workshop and did a project for them. Organized an event when I was in second year on technical aspect",
    "Part of a startup in my 2 and 3rd years which deals with laptop problems",
    "Participated in district level competition of chess.",
    "Part of another startup where I did a lot of groundwork and surveys to create a website.",
    "Received certification for the completion of training in C, C++,Java offered by Spoken Tutorial Project, IIT Bombay.",
    "Served as a volunteer in NSS program and got selected to NSS Special Camp",
  ],
  Personal_Profile: [
    {
      DateofBirth: "03/04/1999",
      Fathers_Name: "B.Prahallada Rao",
      Mothers_Name: "K.Lalitha",
      Gender: "Male",
      LanguagesKnown: ["Marathi", "Telugu", "Hindi", "English"],
      Hobbies: ["Playing Chess, Watching", "Web series", "Reading Books"],
    },
  ],
};
// we store the object keys of objects using the object.keys method and use it for iterating
const keys = Object.keys(data);
for (let i = 0; i < Object.keys(data).length; i++) {
  console.log("Using For loop");
  console.log(keys[i], data[keys[i]]);
}
// for in takes the each key of the object
for (const key in data) {
  console.log("Using For in loop");
  console.log(key, data[key]);
}
// for of is not applicable for objects we use key arrays
for (const key in keys) {
  console.log(data[key]);
}
//for each iterates using array so we use key arrays
keys.forEach((element) => {
  console.log(data[element]);
});
