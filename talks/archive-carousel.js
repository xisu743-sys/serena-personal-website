(function () {
  document.querySelectorAll('[data-archive-carousel]').forEach(function (carousel) {
    var viewport = carousel.querySelector('.archive-carousel-viewport');
    var track = carousel.querySelector('.archive-carousel-track');
    var slides = Array.from(carousel.querySelectorAll('.archive-carousel-slide'));
    var previous = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    var count = carousel.querySelector('[data-carousel-count]');
    var caption = carousel.querySelector('[data-carousel-caption]');
    var index = 0;
    var touchStartX = 0;
    var touchStartY = 0;
    var touchActive = false;
    var isEnglish = new URLSearchParams(window.location.search).get('lang') === 'en' || document.documentElement.lang === 'en';
    var captions = isEnglish ? [
      'Image placeholder: replace this with the article image later.',
      'Image placeholder: use the arrows to browse the next image.',
      'Image placeholder: each image can belong to its own article.'
    ] : [
      '配图占位：之后可以替换成你的文章图片。',
      '配图占位：左右箭头可以继续浏览下一张。',
      '配图占位：每张图片都可以对应一篇文章。'
    ];

    function update() {
      if (!slides.length) return;
      var activeSlide = slides[index];
      var offset = (viewport.clientWidth / 2) - (activeSlide.offsetLeft + activeSlide.offsetWidth / 2);
      track.style.transform = 'translate3d(' + offset + 'px, 0, 0)';
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === index);
        slide.classList.toggle('is-before', slideIndex < index);
        slide.classList.toggle('is-after', slideIndex > index);
      });
      previous.disabled = index === 0;
      next.disabled = index === slides.length - 1;
      count.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
      caption.textContent = captions[index] || captions[0];
    }

    function move(direction) {
      var nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= slides.length) return;
      index = nextIndex;
      update();
    }

    previous.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });

    // 手机上可以直接在图片区域左右滑动；垂直滚动仍优先交给页面本身。
    viewport.addEventListener('touchstart', function (event) {
      if (!event.touches.length) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchActive = true;
    }, { passive: true });

    viewport.addEventListener('touchend', function (event) {
      if (!touchActive || !event.changedTouches.length) return;
      touchActive = false;
      var touch = event.changedTouches[0];
      var deltaX = touch.clientX - touchStartX;
      var deltaY = touch.clientY - touchStartY;
      var swipeDistance = 42;
      if (Math.abs(deltaX) < swipeDistance || Math.abs(deltaX) <= Math.abs(deltaY)) return;
      move(deltaX < 0 ? 1 : -1);
    }, { passive: true });

    carousel.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      move(event.key === 'ArrowRight' ? 1 : -1);
    });

    if (caption) caption.setAttribute('aria-live', 'polite');
    window.addEventListener('resize', update);
    update();
  });
})();
