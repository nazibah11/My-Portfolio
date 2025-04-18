const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/*************** resume.js **************/
const tabs = document.querySelectorAll('[data-target]'),
tabcontents = document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click',() =>{
        const target=document.querySelector(tab.dataset.target)
        
        tabcontents.forEach(tabcontent =>{
            tabcontent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.foreach(tab=>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


