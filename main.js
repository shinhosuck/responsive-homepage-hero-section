// NAVBAR
const backgroundOverlay = document.querySelector('.background-overlay')
const showNavLinkBtn = document.querySelector('.show-navlinks-btn')
const hideNavLinkBtn = document.querySelector('.hide-navlinks-btn')
const navLinks = document.querySelector('.navlinks')
const multipleNavLinks = [...document.querySelectorAll('.multiple-navlinks')]
const openSubNavLinks = [...document.querySelectorAll('.open-sub-navlinks')]
const closeSubNavLinks = [...document.querySelectorAll('.close-sub-navlinks')]

const handleEvent = (e)=> {
  const element = e.target

  closeSubNavLinks.forEach((btn)=> {
    if(btn.classList.contains('close-sub-navlinks')){
      if(!btn.classList.contains('hide-sub-navlinks-btn')) {
        btn.classList.add('hide-sub-navlinks-btn')
        btn.nextElementSibling.classList.remove('hide-sub-navlinks-btn')
      }
    }
  })

  if(element.classList.contains('open-sub-navlinks')) {
    multipleNavLinks.forEach((link)=> {
      if(link.classList.contains('show-sub-navlinks')) {
        link.classList.remove('show-sub-navlinks')
        element.parentElement.parentElement.nextElementSibling.classList.add('show-sub-navlinks')

      }else {
        element.parentElement.parentElement.nextElementSibling.classList.add('show-sub-navlinks')
      }
    })
    element.classList.add('hide-sub-navlinks-btn')
    element.previousElementSibling.classList.remove('hide-sub-navlinks-btn')
  }else if(element.classList.contains('close-sub-navlinks')){
    element.classList.add('hide-sub-navlinks-btn')
    element.nextElementSibling.classList.remove('hide-sub-navlinks-btn')
    element.parentElement.parentElement.nextElementSibling.classList.remove('show-sub-navlinks')
  }
}

openSubNavLinks.forEach((btn)=>{
  btn.addEventListener('click', handleEvent)
})

closeSubNavLinks.forEach((btn)=>{
  btn.addEventListener('click', handleEvent)
})


const toggleNavLinks = (e)=> {
  const element = e.target
  if(element.classList.contains('show-navlinks-btn')) {
    navLinks.classList.add('show-navlinks')
    backgroundOverlay.classList.remove('hide-background-overlay')
  }else if(element.classList.contains('hide-navlinks-btn')) {
    navLinks.classList.remove('show-navlinks')
    backgroundOverlay.classList.add('hide-background-overlay')
  }
}

showNavLinkBtn.addEventListener('click', toggleNavLinks)
hideNavLinkBtn.addEventListener('click', toggleNavLinks)


const windowInnerWidth = window.innerWidth 

const handleWindowEvent = ()=> {
    if(window.innerWidth > 900) {
        backgroundOverlay.classList.add('hide-background-overlay')
        navLinks.classList.remove('show-navlinks')
        multipleNavLinks.forEach((link)=> link.classList.remove('show-sub-navlinks'))
        openSubNavLinks.forEach((btn)=>btn.classList.remove('hide-sub-navlinks-btn'))
        closeSubNavLinks.forEach((btn)=>btn.classList.add('hide-sub-navlinks-btn'))
    }
}

window.addEventListener('resize', handleWindowEvent)

if(windowInnerWidth > 900){
    handleWindowEvent()
}

window.addEventListener('click', (e)=> {
  const path = e.composedPath()
  path.some((element)=> console.log(element.classList))
})
// END OF NAVBAR