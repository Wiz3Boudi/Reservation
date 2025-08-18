document.addEventListener('DOMContentLoaded', function () {
      let currentIndex = 0;
      let slideInterval;

      const container = document.createElement('div');
      container.className = 'container';
      document.body.appendChild(container);

      // Create header
      const header = document.createElement('div');
      header.className = 'header';
      container.appendChild(header);
      const hOne = document.createElement('h1');
      hOne.textContent = 'Reserve table';
      hOne.className = 'hOne';
      header.appendChild(hOne);

      // Create slide container
      const slide = document.createElement('div');
      slide.className = 'slide';
      container.appendChild(slide);

      // Create images container
      const imgContainer = document.createElement('div');
      imgContainer.className = 'imgContainer';
      slide.appendChild(imgContainer);

      // Images function
      function createImage() {
            const imagsData = [
                  { id: 'image1', src: '/img/sam.png', class: 'images', alt: 'Slide Show Images' },
                  { id: 'image2', src: '/img/linda.png', class: 'images', alt: 'Slide Show Images' },
                  { id: 'image3', src: '/img/karma.png', class: 'images', alt: 'Slide Show Images' }
            ];

            imagsData.forEach((imagsData, index) => {
                  const cearImages = document.createElement('img');
                  cearImages.id = imagsData.id;
                  cearImages.className = imagsData.class;
                  cearImages.src = imagsData.src;
                  cearImages.alt = imagsData.alt;
                  if (index !== 0) {
                        cearImages.style.display = 'none'; // Hide all images except first
                        cearImages.classList.add('transtion');
                  }
                  imgContainer.appendChild(cearImages);
            });
      }

      // Create navigation
      function createNavigation() {
            const Navigate = document.createElement('div');
            Navigate.className = 'Navigate';
            slide.appendChild(Navigate);

            // Create prev
            const prev = document.createElement('div');
            prev.textContent = '❮';
            prev.className = 'prev';
            prev.addEventListener('click', () => {
                  currentIndex--;
                  showSlide(currentIndex);
                  resetInterval();
            });
            Navigate.appendChild(prev);

            // Create next
            const next = document.createElement('div');
            next.textContent = '❯';
            next.className = 'next';
            next.addEventListener('click', () => {
                  currentIndex++;
                  showSlide(currentIndex);
                  resetInterval();
            });
            Navigate.appendChild(next);
      }

      // Create dots
      function createDots() {
            const dotContainer = document.createElement('div');
            dotContainer.className = 'dotContainer';
            slide.appendChild(dotContainer);

            const images = document.querySelectorAll('.images');
            for (let i = 0; i < images.length; i++) {
                  const dot = document.createElement('span');
                  dot.classList.add('dot');
                  dot.classList.add('transtion')
                  dot.addEventListener('click', () => {
                        showSlide(i);
                        resetInterval();
                  });
                  if (i === 0) {
                        dot.classList.add('active');
                        dot.classList.add('transtion')
                  }
                  dotContainer.appendChild(dot);
            }
      }

      // Show slide function
      function showSlide(index) {
            if (typeof index === 'number') {
                  currentIndex = index;
            }
            const images = document.querySelectorAll('.images');
            const dots = document.querySelectorAll('.dot');

            // Handle wrap-around
            if (currentIndex >= images.length) { currentIndex = 0; }
            if (currentIndex < 0) { currentIndex = images.length - 1; }
            // Update images
            images.forEach((img, i) => {
                  img.style.display = i === currentIndex ? 'block' : 'none';
                  img.classList.add('transtion');
            });

            // Update dots
            dots.forEach((dot, i) => {
                  dot.classList.toggle('active', i === currentIndex);
            });
      }

      // Auto slide logic
      function nextSlide() {
            currentIndex++;
            showSlide(currentIndex);
      }

      function startSlides() {
            slideInterval = setInterval(nextSlide, 3000);
      }

      function resetInterval() {
            clearInterval(slideInterval);
            startSlides();
      }

      createImage();
      createDots();
      createNavigation()
});