'use strict'
// 구현계획
// 1. 모든 섹션 요소들과 매뉴 아이템들을 가지고 온다.
// 2. IntersectionObserver 을 사용해서 모든 섹션들을 관찰해야한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 한다. 
// 보여지는 섹션: 다수의 섹션이 동시에 보여진다면 ,가장 첫번째 섹션이 선택되여야함.
// 하지만. 마지막 컨텍 센션에 보여진다면 가장 마지막 섹션을 선택

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id=>document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(()=>false);


const options ={};
const observer = new IntersectionObserver(observerCallback,options)
sections.forEach(section=>observer.observe(section))

function observerCallback(entries){
    let selectLastOne;
    entries.forEach(entry=>{
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] =entry.isIntersecting;
        selectLastOne = 
        index ===sectionIds.length -1 && 
        entry.isIntersecting && 
        entry.interSectionRatio>=0.99;
        console.log(visibleSections)
        console.log('무조건 라스트섹션',selectLastOne);
    })
    const navIndex =
    selectLastOne ? sectionIds.length -1 
    :findFirstIntersecting(visibleSections);
    console.log(sectionIds[navIndex]);

    function findFirstIntersecting(intersections){
        const index = intersections.indexOf(true);
        return index>=0 ? index :0
    }
}