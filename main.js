const jsonData = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ];


const jobInfo = (jobSkillsInfo, id) => {
    const jobSkillsList = document.querySelector(`.job-skills-list${id}`);
    jobSkillsList.innerHTML += jobSkillsInfo.map(skill => `<li class="tag">${skill}</li>`).join('');
  }


let jobListContainer = document.querySelector('.job-list');

// fetch('data.json')
//     .then(response => response.json())
//     .then(jobsDataJSON => {
//         jobsDataJSON.forEach(data => {
//             const jobSkillsInfo = [data.role, data.level, ...data.languages, ...data.tools];
//             jobListContainer.innerHTML += `
//                 <section class="post-card" style="${data.new && data.featured ? ' border-left: 5px solid #5CA5A5;' : ''}">
//                     <div class="job-icon">
//                         <img src="${data.logo}" alt="${data.company}">
//                     </div>
//                     <div class="job-details">
//                         <div class="post-details">
//                             <span class="company">${data.company}</span>
//                             <span class="new" style="${data.new ? 'display: inline-block' : 'display: none'}">${data.new ? 'NEW!' : ''}</span>
//                             <span class="featured-alert" style="${data.featured ? 'display: inline-block' : 'display: none'}">${data.featured ? 'Featured' : ''}</span>
//                         </div>
//                         <div class="position">
//                             <p>${data.position}</p>
//                         </div>
//                         <div class="post-info">
//                             <ul>
//                                 <li class="post-desc day">${data.postedAt} &#8226;</li>
//                                 <li class="post-desc job-type">${data.contract} &#8226;</li>
//                                 <li class="post-desc location">${data.location}</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="horizontal-line"></div>
//                     <div class="job-skills">
//                         <ul class="job-skills-list${data.id}"></ul>
//                     </div>
//                 </section>`;
//             jobInfo(jobSkillsInfo, data.id);
//         });
//     })
//     .catch(error => console.error('Error:', error));


jsonData.forEach((data) => {
    const jobSkillsInfo = [data.role, data.level, ...data.languages, ...data.tools];

    jobListContainer.innerHTML +=
        `<section class="post-card" style="${data.new && data.featured ? ' border-left: 6px solid #5CA5A5;' : ''}">
            <div class="job-icon">
                <img src="${data.logo}" alt="${data.company}">
            </div>
            
            <div class="job-details">
                <div class="post-details">
                <span class="company">${data.company}</span>
                <span class="new" style ="${data.new ? "display: inline-block" : "display: none"}">${data.new ?   'NEW!' : ''}
                </span>
                <span class="featured-alert"  style ="${data.featured ? "display: inline-block" : "display: none"}">${data.featured ? 'Featured' : ''}</span>
            </div>
        
            <div class="position">                  
                <p>${data.position}</p>
            </div>

            <div class="post-info">

                    <ul class="jobs__details">
                        <li class="jobs__details-item">${data.postedAt}</li>
                        <li class="jobs__details-item">${data.contract}</li>
                        <li class="jobs__details-item">${data.location}</li>
                    </ul>
            </div>
            </div>
            <div class="horizontal-line">
            
            </div>
                <div class="job-skills">
                    <ul class="job-skills-list${data.id}"></ul>
                </div>
        </section>`;
        console.log(jobSkillsInfo)
    jobInfo(jobSkillsInfo, data.id)
});




const searchBox = document.querySelector('#searchBox ul');

let jobFilter = []
let list = []

const jobSkills = document.querySelectorAll(`[class^="job-skills-list"] > li`)

const displaySearchItem = (searchItem, lists) => {
    searchBox.parentElement.style.display = "flex";
    searchBox.innerHTML = searchItem.map(item => `<div class="search-item">${item}</div>`).join('');
    Array.from(jobListContainer.children).forEach(card => {
      const cardText = card.textContent.toLowerCase();
      const shouldHide = lists.some(list => !cardText.includes(list.toLowerCase()));
      card.classList.toggle('none', shouldHide);
    });
  };
  
  

jobSkills.forEach(jobSkill => {
    jobSkill.addEventListener('click', (event) => {
        jobFilter.push(event.target.innerText);

        list = jobFilter.filter((item, index) => jobFilter.indexOf(item) === index);

        let tags = [];
        list.map((value, index) => tags.push(`<li class="filtered-item filtered-item${index}">${value}<span class="closeBtn closeBtn${index}" onclick="closehandler(${index})"><img src="./images/icon-remove.svg" alt="close button"></span></li>`));

        searchBox.innerHTML = ''
        displaySearchItem(tags, list)
    })
})



const clearButton = document.querySelector('.clear');

function clearFiltered() {
    jobListContainer.querySelectorAll('.post-card.none').forEach(card => card.classList.remove('none'));
  jobFilter = [];
  searchBox.parentElement.style.display = 'none';
  // window.location.reload();
}

clearButton.addEventListener('click', clearFiltered);




function closehandler(id) {
    const selectedList = document.querySelector(`.filtered-item${id}`);
    const index = list.indexOf(selectedList.innerText);
    
    if (index > -1) {
      list.splice(index, 1);
    }
  
    jobListContainer.querySelectorAll('.post-card').forEach(card => {
      card.classList.remove('none');
    });
  
    const filteredItems = jobListContainer.querySelectorAll('.filtered-item');
    filteredItems.forEach(item => {
      if (list.indexOf(item.innerText) === -1) {
        item.parentElement.classList.add('none');
      }
    });
  
    const tagList = list.map((value, index) => {
      const tag = `<li class="filtered-item filtered-item${index}">${value}<span class="closeBtn closeBtn${index}" 
                    onclick="closehandler(${index})"><img src="./images/icon-remove.svg" alt="close button"></span></li>`;
      return tag;
    });
  
    searchBox.innerHTML = tagList.join('');
    searchBox.parentElement.style.display = list.length === 0 ? 'none' : 'flex';
    jobFilter = list;
  }
  