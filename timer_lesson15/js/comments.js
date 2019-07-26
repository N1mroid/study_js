window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Timer
  function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    // function twoDigits(num) {
    // 	return ('0' + num).slice(-2);
    // }

    function getRemainingTime() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60);
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      let minutes = Math.floor((timeRemaining / 60) % 60);
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      let hours = Math.floor(timeRemaining / 60 / 60); // % 24;
      if (hours < 10) {
        hours = '0' + hours;
      }
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    }

    function updateClock() {
      let timer = getRemainingTime();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;

      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
      } else {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        return;
      }
    }
    updateClock();
    // 	// days = Math.floor(timeRemaining / 60 / 60 / 24);
    // console.log(dateStop);
    // console.log(dateNow);
    // console.log('Seconds: ', seconds);
    // console.log('Minutes: ', minutes);
    // console.log('Hours: ', hours);
    // console.log('Days: ', days);
  }

  countTimer('29, August 2019');
  // setInterval(countTimer, 1000, '22, July 2019');



  // Меню

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((element) => element.addEventListener('click', handlerMenu));


  };
  toggleMenu();




  // popup

  //animate

  // document.querySelector('.timer-title').animate([
  // 	// keyframes
  // 	{
  // 		transform: 'translateY(0px)'
  // 	},
  // 	{
  // 		transform: 'translateY(-300px)'
  // 	}
  // ], {
  // 	// timing options
  // 	duration: 1000,
  // 	iterations: Infinity
  // });



  let popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close');

  popupBtn.forEach((item) => {
    item.addEventListener('click', () => {
      let ourWidth = document.documentElement.clientWidth;
      console.log(ourWidth);



      // console.log(pc);
      if (ourWidth > 992) {
        popup.style.display = 'block'; // чтобы появилась модалка
        popup.animate({
          opacity: [0, 1], // [ from, to ]
          color: ["#fff", "red"] // [ from, to ]
        }, 1000);
      } else {
        popup.style.display = 'block';
      }

    });
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // let cl = document.querySelector('.popup').addEventListener('click', () => {

  // 		cl.animate({
  // 		opacity: [0, 1], // [ from, to ]
  // 		color: ["#fff", "red"], // [ from, to ]
  // 	}, 1000);
  // });



  // });





  // const togglePopUp = () => {
  // 	const popup = document.querySelector('.popup'),
  // 		popupBtn = document.querySelectorAll('.popup-btn'),
  // 		popupClose = document.querySelector('.popup-close');
  // 	popupBtn.forEach((element) => {
  // 		element.addEventListener('click', () => {
  // 			popup.style.display = 'block';
  // 		});
  // 	});

  // 	popupClose.addEventListener('click', () => {
  // 		popup.style.display = 'none';
  // 	});
  // };

  // togglePopUp();




  tabHeader.addEventListener('click', (event) => {
    let target = event.target;

    while(target !== tabHeader) {

      console.log(target);

      if (target.classList.contains('service-header-tab')) {
        // console.log(target);
        tab.forEach((item, i) => {

          if (item === target) {
            toggleTabContent(i);
          }
        });
        return;
      }
      target = target.parentNode;
    }
  });








});