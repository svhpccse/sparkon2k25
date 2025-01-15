(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
    * countdown function and init
    */
  document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.querySelector('.countdown');
    const eventDate = new Date(countdownElement.getAttribute('data-count')).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.querySelector('.count-days').innerText = days;
      countdownElement.querySelector('.count-hours').innerText = hours;
      countdownElement.querySelector('.count-minutes').innerText = minutes;
      countdownElement.querySelector('.count-seconds').innerText = seconds;

      if (distance < 0) { clearInterval(countdownInterval); countdownElement.innerHTML = "Event Started"; }
    } const
      countdownInterval = setInterval(updateCountdown, 1000); updateCountdown();
  });

  // Initialize Particles.js for the main container
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 66,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  // Initialize Particles.js for coordinator info items
  particlesJS('particles-js-cse', {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.querySelector(".button-container");
    const particlesContainer = document.getElementById("particles-js");
    const gradientBackground = "none";

    if (buttonContainer) {
      buttonContainer.style.background = gradientBackground;
    }
    if (particlesContainer) {
      particlesContainer.style.pointerEvents = "none";
    }
  });

  // Add event listener to chat icon
  document.getElementById('chat-icon').addEventListener('click', function () {
    document.getElementById('chat-box').classList.toggle('active');
  });

  // Add event listener to close button
  document.getElementById('close-chat').addEventListener('click', function () {
    document.getElementById('chat-box').classList.remove('active');
  });

  // Add event listener to send button
  document.getElementById('send-chat').addEventListener('click', function () {
    const input = document.getElementById('chat-input').value;
    if (input.trim() !== '') {
      addMessage('user-message', input);  // Add user message
      document.getElementById('chat-input').value = '';  // Clear the input field
      handleChatResponse(input);  // Handle bot's response
    }
  });

  // Function to add a new message to the chat
  function addMessage(type, message) {
    const chatContent = document.getElementById('chat-content');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', type);
    messageDiv.innerHTML = message;
    chatContent.appendChild(messageDiv);

    // Scroll to the bottom immediately after message is added
    chatContent.scrollTop = chatContent.scrollHeight;
  }

  // Function to handle the chatbot response based on user input
  function handleChatResponse(input) {
    const lowerInput = input.toLowerCase();
    let response = '';

    if (lowerInput.includes('date')) {
      response = 'The event is on 24.01.2025.';
    } else if (lowerInput.includes('time')) {
      response = 'The event starts at 9:00 AM.';
    } else if (lowerInput.includes('location') || lowerInput.includes('venue')) {
      response = 'The event will be held at SVHPC Campus.';
    } else {
      response = 'For more details, please contact the department co-ordinators:';
      response += '<br><button onclick="window.open(\'https://wa.me/+918072582882?text=Hello%2CSir!%20I%20need%20more%20information%20about%20the%20event.\', \'_blank\')">M. Mathiyazhagan (CSE / AIML)</button>';
      response += '<br><button onclick="window.open(\'https://wa.me/+919965170923?text=Hello%2CMam!%20I%20need%20more%20information%20about%20the%20event.\', \'_blank\')">V. Poongothai (EEE)</button>';
      response += '<br><button onclick="window.open(\'https://wa.me/+917402778525?text=Hello%2CSir!%20I%20need%20more%20information%20about%20the%20event.\', \'_blank\')">A. Moorthi (ECE / MLT)</button>';
    }

    addMessage('bot-message', response);  // Add bot message
  }

  // Automatically scroll to the bottom of the chat when the chat box is shown
  document.getElementById('chat-box').addEventListener('transitionend', function () {
    const chatContent = document.getElementById('chat-content');
    chatContent.scrollTop = chatContent.scrollHeight;
  });

})();
