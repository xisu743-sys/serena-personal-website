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
      var gap = parseFloat(getComputedStyle(track).gap) || 16;
      var slideWidth = slides[0].getBoundingClientRect().width + gap;
      var offset = (viewport.clientWidth - slides[0].getBoundingClientRect().width) / 2 - index * slideWidth;
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

    previous.addEventListener('click', function () { if (index > 0) { index -= 1; update(); } });
    next.addEventListener('click', function () { if (index < slides.length - 1) { index += 1; update(); } });
    window.addEventListener('resize', update);
    update();
  });
})();
