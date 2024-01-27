'use strict'

// according to project filtering logic


const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects')
categories.addEventListener('click',(event)=>{
    const filter = event.target.dataset.filter;
    if(filter == null){
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
});

    




    // Project filtering


function handleActiveSelection(target){
const active = document.querySelector('.category--selected');
active.classList.remove('category--selected')
target.classList.add('category--selected');
}

function filterProjects(filter){
    projects.forEach(project=>{
        if(filter===project.dataset.type){
           project.style.display='block';
        }else{
           project.style.display='none';
        }
       });
       projectsContainer.classList.add('anim-out');
       setTimeout(()=>{
           projectsContainer.classList.remove('anim-out');
       },250)
   }
   
