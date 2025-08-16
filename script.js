document.addEventListener('DOMContentLoaded', function () {

      const container = document.createElement('div');
      container.className = 'container'
      document.body.appendChild(container)
      // craete header / h1
      const header = document.createElement('div');
      header.className = 'header';
      container.appendChild(header);
      const hOne = document.createElement('h1')
      hOne.textContent = 'Reserve table';
      hOne.className = 'hOne';
      header.appendChild(hOne);
      // create slide container
      const slide = document.createElement('div');
      slide.className = 'slide';
      container.appendChild(slide);
      // create images container
      const imgContainer = document.createElement('div');
      imgContainer.className = 'imgContainer';
      slide.appendChild(imgContainer);

      // images function
      function createImage() {
            const images = ['/img/linda.png'];
            for (let mg = 0; mg < images.length; mg++) {
                  const img = document.createElement('img');
                  img.src = [...images[mg]].join('');
                  // img.className = [...className[mg]];
                  imgContainer.appendChild(img)
            }
      }

      // Create navigate / next and prev
      function createNavigatetion() {
            const Navigate = document.createElement('div');
            Navigate.className = 'Navigate'
            slide.appendChild(Navigate);
            // create next 
            const next = document.createElement('div');
            next.textContent = '❯';
            next.className = 'next'
            Navigate.appendChild(next);
            // create prev
            const prev = document.createElement('div');
            prev.textContent = '❮';
            prev.className = 'prev'
            Navigate.appendChild(prev);
      }

      // create dot
      function dot() {
            const dotContainer = document.createElement('div');
            dotContainer.className = 'dotContainer';
            slide.appendChild(dotContainer);
            for (let i = 0; i < 3; i++) {
                  const dot = document.createElement('span');
                  dot.classList.add('dot');
                  dotContainer.appendChild(dot);
            }
      }

      // active slide











      createImage();
      dot();
      createNavigatetion()
})




















// document.addEventListener('DOMContentLoaded', function () {
//       const slider = document.querySelector('.slider');
//       const slides = document.querySelectorAll('.slider img');
//       const prevBtn = document.querySelector('.prev');
//       const nextBtn = document.querySelector('.next');
//       const dotsContainer = document.querySelector('.dots-container');

//       let currentIndex = 0;
//       let slideInterval;
//       const slideTime = 3000; // 3 seconds

//       // Create dots
//       slides.forEach((_, index) => {
//             const dot = document.createElement('span');
//             dot.classList.add('dot');
//             if (index === 0) dot.classList.add('active-dot');
//             dot.addEventListener('click', () => goToSlide(index));
//             dotsContainer.appendChild(dot);
//       });

//       const dots = document.querySelectorAll('.dot');

//       // Function to move to specific slide
//       function goToSlide(index) {
//             currentIndex = index;
//             updateSlider();
//             resetInterval();
//       }

//       // Update slider position and active dot
//       function updateSlider() {
//             slider.style.transform = `translateX(-${currentIndex * 100}%)`;

//             dots.forEach((dot, index) => {
//                   dot.classList.toggle('active-dot', index === currentIndex);
//             });
//       }

//       // Next slide
//       function nextSlide() {
//             currentIndex = (currentIndex + 1) % slides.length;
//             updateSlider();
//       }

//       // Previous slide
//       function prevSlide() {
//             currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//             updateSlider();
//       }

//       // Reset auto slide interval
//       function resetInterval() {
//             clearInterval(slideInterval);
//             slideInterval = setInterval(nextSlide, slideTime);
//       }

//       // Event listeners
//       nextBtn.addEventListener('click', () => {
//             nextSlide();
//             resetInterval();
//       });

//       prevBtn.addEventListener('click', () => {
//             prevSlide();
//             resetInterval();
//       });

//       // Start auto sliding
//       resetInterval();

//       // Pause on hover
//       slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
//       slider.addEventListener('mouseleave', resetInterval);
// });
