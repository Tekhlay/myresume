const nav = document.querySelector('.nav-bar');
const logo = document.querySelector('.profile-logo');
const about = document.querySelector('.about-me');
const resume = document.querySelector('.bio');
const getintouch = document.querySelector('.get-in-touch');
const linkabout = document.querySelector('.about');
const contactlink = document.querySelector('.contact-link');
const projectLink = document.querySelector('.projects');
const Linkpublication = document.querySelector('.publication');
const mobileside = document.querySelector('.menu-bar');
const popUpmenu = document.querySelector('.popup-menu');
const close = document.querySelector('.btn-close');
const ListProject = document.querySelector('.project');
const mode = document.querySelector('.mode');
const puplications = document.querySelector('.publications');


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
    puplications.style.display = 'none';
})

projectLink.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'block';
    puplications.style.display = 'none';
})

contactlink.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'flex';
    ListProject.style.display = 'none';
    puplications.style.display = 'none';
})

Linkpublication.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'none';
    puplications.style.display = 'block';
})

const abt = document.querySelector('.about-pop');
abt.addEventListener('click', () => {
    about.style.display = 'flex';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    popUpmenu.style.display = 'none';
    ListProject.style.display = 'none';
    puplications.style.display = 'none';
})
const prjct = document.querySelector('.projects-pop');
prjct.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'flex';
    popUpmenu.style.display = 'none';
    puplications.style.display = 'none';
})

const pup = document.querySelector('.publication-pop');
pup.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'none';
    getintouch.style.display = 'none';
    ListProject.style.display = 'none';
    popUpmenu.style.display = 'none';
    puplications.style.display = 'flex';
})


const contacts = document.querySelector('.contact-link-pop');
contacts.addEventListener('click', () => {
    about.style.display = 'none';
    resume.style.display = 'flex';
    getintouch.style.display = 'flex';
    ListProject.style.display = 'none';
    popUpmenu.style.display = 'none';
    puplications.style.display = 'none';
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

<div class="project-details"><p> About the project</p>${ProjectData[task].description}</div> 
<ul>
<p> Language used</p>
<li>${ProjectData[task].langauage}</li>
</ul>`;
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


const publicationData = [
    {
        id: 0,
        img: './images/1577475382.png',
        title: 'Design and Implementation of IR System for Tigrigna Textual Documents',
        description: 'Nowadays, various amount of information???s are available on the internet. To search relevant documents from the internet development of information retrieval system or search engines is necessary. Therefore, this paper deals with development of Information Retrieval system for Tigrigna textual documents. It helps to find relevant documents from the internet, which are stored in Tigrigna language for the Tigrigna language users to satisfy their information need',
        doi:'https://www.mecs-press.org/ijmecs/ijmecs-v11-n11/IJMECS-V11-N11-5.pdf',
    },
    {
        id: 1,
        img: './images/1640726723.png',
        title: 'An Integrated KnowledgeBased System for Early Detection of Eye Refractive Error Using Data Mining',
        description: 'Refractive error is one of optical defect in the human visual system. Refractive error is a very common disease these days in all populations and in all age groups. Uncorrected and undetected refractive error contributes to visual impairment, blindness and places a considerable burden on a person in the world. The long use of technological devices such as smart phones also poses a new burden on the human eye.',
        doi:'https://www.ajol.info/index.php/sinet/article/view/219306',
    },
    {
        id: 2,
        img: './images/1622712572.png',
        title: 'Predicting the Behavior of Blood Donors in National Blood Bank of Ethiopia Using Data Mining Techniques',
        description: `A modern technology used for extracting knowledge from a huge amount of data using different models and
        tasks such as prediction and description is called data mining. The data mining approach has a great contribution on
        solving a different problem for data miners. This paper focuses on the application of data mining in health centers using
        different models. The model development process helps to identify or predict the behavior of blood donors whether they
        are eligible or ineligible to donate blood by their right status way and protects any blood bank health center from the
        collection of unsafe blood. Classification techniques are used for the analysis of Blood bank datasets in this study. For
        continuous blood donors, it will help to enable to donate voluntary individuals and organizations systematically. J48
        decision tree, neural network as well as na??ve Bays algorithms have been implemented in Weka to analyze the dataset
        of blood donors. The study is used to classify the blood donor's eligibility or ineligibility status based on their genders,
        deferral time, weight, age, body priced, tattoos, HIV AIDS, blood pressure, donation frequency, hepatitis, illegal drug
        use attributes. From the 11 attributes, gender does not affect the result. We have used 1502 datasets for the train set and
        100 datasets for testing the model using cross-fold validation. Cross-fold data, partition was used in this study. The
        efficiency and effectiveness of the algorisms are measured automatically by the system. The obtained result showed that
        the J48 classifier outperforms the best result as well as both neural network and navies, Bayes, in terms of matrix
        evolution, with its 97.5% overall model accuracy has offered interesting rules`,
        doi:'https://www.mecs-press.org/ijieeb/ijieeb-v13-n3/IJIEEB-V13-N3-5.pdf',
    }
]

publicationData.forEach((element) => {
    const articles = document.createElement('dv');
    articles.className = 'publication-row';
    articles.innerHTML = `
    <div class="publication-card">
    <img src="${element.img}" alt="PDF preview"/>
    <div class="papers">
    <h3 class="article-title">${element.title}</h3>
    <p class="article-description">${element.description}</p>
    <a class="article-url" href="${element.doi}">Read Full Article</a>
    </div>
    </div>`;
    puplications.appendChild(articles);
});


const totalNoofarticles = document.querySelector('.total-articles');
totalNoofarticles.textContent = publicationData.length+' Articles';
const popupProjects = document.querySelector('.project-popup');



