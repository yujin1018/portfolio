'use strict'

// according to project filtering logic


const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click',(event)=>{
    const filter = event.target.dataset.filter;
    if(filter == null){
        return;
    }
    projects.forEach(project=>{
     if(filter===project.dataset.type){
        project.style.display='block';
     }else{
        project.style.display='none';
     }
    })
})

