const nav = document.querySelector('.nav-bar');
const logo = document.querySelector('.profile-logo');
const about = document.querySelector('.about-me');
const resume = document.querySelector('.bio');
const getintouch = document.querySelector('.get-in-touch');
const linkabout = document.querySelector('.about');
const contactlink = document.querySelector('.contact-link');
const projectLink = document.querySelector('.projects');
const mobileside = document.querySelector('.menu-bar');
const popUpmenu = document.querySelector('.popup-menu');
const close = document.querySelector('.btn-close');
const ListProject = document.querySelector('.project');
const mode = document.querySelector('.mode');

const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();

const myMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        mode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
    else {
        mode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
   
 }


close.addEventListener('click', () => {
    popUpmenu.style.display = 'none';
})

mobileside.addEventListener('click', () => {
    popUpmenu.style.display = 'flex';
});

logo.addEventListener('click', () => {
   about.style.display = 'none'; 
   resume.style.display = 'flex';
   getintouch.style.display = 'flex';
});

linkabout.addEventListener('click', () => {
    about.style.display = 'flex';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'none';
})

projectLink.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'block';
})

contactlink.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'flex';
    ListProject.style.display = 'none';
})


const abt = document.querySelector('.about-pop');
abt.addEventListener('click', () => {
    about.style.display = 'flex';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    popUpmenu.style.display = 'none';
    ListProject.style.display = 'none';
})
const prjct = document.querySelector('.projects-pop');
prjct.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'flex';
    popUpmenu.style.display = 'none';
})

const contacts = document.querySelector('.contact-link-pop');
contacts.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'flex';
    getintouch.style.display = 'none';
    ListProject.style.display = 'flex';
    popUpmenu.style.display = 'none';
})


nav.addEventListener('scroll', () => {
    if (nav.scrollTop() > 300){
        nav.addClass('active');
    }
    
});

const projectList = document.querySelector('.project-list');

ProjectData = [
    {
        id: 0,
        img: './images/Project1.PNG',
        langauage: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
        linkcode: 'https://github.com/Tekhlay/Leaderboard',
        linkdemo: 'https://tekhlay.github.io/Leaderboard/dist/',
        description: 'This is a simple website project for the Leaderboard list app. Which alow users to see list of their scores.',
    },
    {
        id: 1,
        img: './images/todolist.PNG',
        langauage: ['HTML', 'CSS', 'JavaScript'],
        linkcode: 'https://github.com/Tekhlay/TO-DO-List',
        linkdemo: 'https://tekhlay.github.io/TO-DO-List/dist/',
        description: 'This is a minimal to-do list used to organize your daily schedule. The system also helps to mark and unmark the completion progress of your daily tasks. It is done for educational purposes.',
    },
    {
        id: 2,
        img: './images/awesombook.PNG',
        langauage: ['HTML', 'CSS', 'JavaScript'],
        linkcode: 'https://github.com/Tekhlay/Awesome-books-ES6',
        linkdemo: 'https://tekhlay.github.io/Awesome-books-ES6',
        description: 'This is a simple bookstore web application that allows users to add or remove books from the list. the project is done by using Vanilla JavaScript with modern ES6 syntax, HTML, and CSS.',
    },
    {
        id: 3,
        img: './images/capstorne1.PNG',
        langauage: ['HTML', 'CSS', 'JavaScript'],
        linkcode: 'https://github.com/Tekhlay/Module1-capstone-project',
        linkdemo: 'https://tekhlay.github.io/Module1-capstone-project/',
        description: 'This project is final capstone for module 1 in microverse. It is about online web development website. The project adapts both mobile and desktop sizes.',
    }
];

const total = document.querySelector('.total');
total.textContent = ProjectData.length;

ProjectData.forEach(element => {
    let i = 0; 
    const project = document.createElement('dv');
    project.className = 'project-card';
    project.innerHTML = `<img src=${element.img} alt="LeaderBoard">
    <p>Languages</p>
    <ul>
      <li class="my-projects">${element.langauage}</li>
    </ul>
    <div class="btndetails">
      <button class="see-prejoect">See More</button>
    </div>`;
    projectList.appendChild(project);
    i += 1;
});

const seemore = document.querySelectorAll('.see-prejoect');
const projectmain = document.querySelector('.project');

workdetail = (task) => `
<div class="exit">
    <span>&times;</span>
</div>
<div class="image-card"> <img src=${ProjectData[task].img} alt="LeaderBoard"> </div>
<div class="btnsource">
        <a href="${ProjectData[task].linkcode}"> Source Code <i class="fa fa-github"></i></a>
        <a href="${ProjectData[task].linkdemo}">See Live Demo <i class="fa-solid fa-share-from-square"></i></a>
</div>
<ul>
<li>${ProjectData[task].langauage}</li>
</ul>
<div class="project-details">${ProjectData[task].description}</div> `;
for(let i = 0; i < seemore.length; i += 1){
    seemore[i].addEventListener('click', () => {
        const addproject = document.createElement('dv');
        addproject.className = 'project-popup';
        addproject.innerHTML = workdetail(i);
        projectmain.appendChild(addproject);
        const exiT = document.querySelector('.exit');
        exiT.addEventListener('click', async () => {
            projectmain.removeChild(addproject);
        })

    })

}


const popupProjects = document.querySelector('.project-popup');

// seemore.addEventListener('click', () => {
//     popupProjects.style.display = 'flex';

// })


