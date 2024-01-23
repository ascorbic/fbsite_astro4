import anime from "animejs";


document.
  querySelector('.hamburger-button')?.addEventListener('click', () => {
      // TO REMOVE:  hide all menu items      
      // anime.set('.menu_item', { opacity: 0 });
      
  
      // open / close menu
      document.querySelector('.nav-links')?.classList.toggle('collapsed');
      
      // TO REMOVE: when opened start menu animations
      /*
      const isCollapsed = document.querySelector('.nav-links')?.classList.contains('collapsed')
      if (!isCollapsed) {
        // initAni()      
      }
      */
    });


//  TO REMOVE: 
/*
function initAni() {
  anime.set('.menu_logo', { opacity: 0 });
  anime.set('#themeToggle', { opacity: 0 });
  anime({
    targets: '.menu_logo',
    opacity: [0, 1],
    duration: 400,
    delay: 100,
    easing: 'easeInSine'
  })


  const animation = anime({
    targets: '.menu_item',
    opacity: [0, 1 ],
    duration: 300,
    delay: anime.stagger(200),
    autoplay: false,
    easing: 'easeOutQuad',
  });
  animation.play()

  anime({
    targets: '#themeToggle',
    opacity: [0, 1],
    duration: 400,
    delay: 400,
    easing: 'easeInSine'
  })
}
*/