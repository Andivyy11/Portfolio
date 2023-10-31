var icon=document.getElementById('icon')
var nav=document.querySelector('.nav')
icon.addEventListener('click' , ()=>{
      nav.classList.toggle('open')
      icon.classList.toggle('fa-x')
})
var skillSet = [
          ["Java", "https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"],
          ["Python" ,"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png"],
          ["C" ,"https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle.png"],
          ["HTML", "https://w7.pngwing.com/pngs/116/40/png-transparent-5-logo-angle-area-text-brand-other-html-5-angle-text-rectangle-thumbnail.png"],
          ["CSS", "https://w7.pngwing.com/pngs/4/808/png-transparent-css3-css3-logo-logo-language-programming-language-css-3d-icon-thumbnail.png"],
          ["JavaScript", "https://blog.canadianwebhosting.com/wp-content/uploads/2018/04/javascript-logo.png"],
          ["React", "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"],
          ["Node.js" ,"https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png"],
          ["Express.js", "https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png"],
          ["SQL", "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg"],
          ["NoSQL", "https://ourcodeworld.com/public-media/articles/articleocw-5d78ebb022d1e.webp"],
          ["MongoDB", "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"]
    ];
document.addEventListener('DOMContentLoaded' ,function(){

var mySkills = document.querySelector(".mySkills");
skillSet.forEach(function (skill) {
      var skillName = skill[0];
      var skillImg = skill[1];

      let html = `
         <img src=${skillImg} alt=${skillName}/>
         <h2>${skillName}</h2>`;
      var s=document.createElement('div')
      s.classList.add("skill");
      s.innerHTML=html;
      mySkills.append(s);
    });
});

var projects=[
      ["Memory Card" ,"HTML CSS JavaScript" ,"Match all the cards with same image in minimum moves.","https://github.com/Andivyy11/MemoryCardGame","GitHub"],
      ["Simon Game" ,"HTML CSS JavaScript" ,"Test your listening memory, remember the sound patterns and play accordingly.","https://github.com/Andivyy11/simon" ,"Github"],
      ["Snake Game", "HTML CSS JavaScript" ,"Classic snake game.", "https://github.com/Andivyy11/Sbake_game" ,"GitHub"],
      ["Tic Tac Toe", "HTML CSS JavaScript", "Player who places three of their marks in a horizontal, vertical, or diagonal wins.", "https://github.com/Andivyy11/TicTacToe", "GitHub"],
      ["Paint App","HTML CSS JavaScript", "A simple paint App, features- color palatte, eraser, brush width and save option","https://github.com/Andivyy11/canvas","GitHub"],
      ["Piano", "HTML CSS JavaScript" ,"A simple piano of seven notes and 5 chords", "https://github.com/Andivyy11/Piano" ,"Github"],
      ["To-do List","HTML CSS React", "A to-do lsit with add , delete and clear options.","https://codesandbox.io/s/to-do-list-qt2wy9", "Codesanbox"],
      ["Calendar" ,"HTML SCC React" ,"A single page calendar, that displays date, year, month and day name.", "https://codesandbox.io/s/calender-482vnj", "Codesandbox"],
      ["Note Taking App", "HTML CSS React", "An app to take and delete notes.", "https://codesandbox.io/s/notes-keeper-jk8rnh", "Codesandbox"]
];

var myProjects=document.querySelector('.projectList');
projects.forEach((p)=>{
      var html=`<h2>${p[0]}</h2>
                <h4>${p[1]}</h4>
                <p>${p[2]}</p>
                <span>Source Code : <a href=${p[3]}>${p[4]}</a></span>`;
      var b=document.createElement('div');
      b.classList.add("a_project");
      b.innerHTML=html;
      myProjects.append(b);
});
