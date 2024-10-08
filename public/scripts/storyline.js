var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,                   // 슬라이드 간의 간격을 30px
  centeredSlides: true,               // 그림 내용 슬라이드 정중앙에
  autoplay: {
    delay: 2500,                      // 2.5초 정도의 딜레이 후에 swiper
    disableOnInteraction: false,      // 슬라이드 자동 반복 (사용자가 드래그하거나 클릭해도 자동재생)
    loop: false,                      // 마지막 슬라이드에서 다시 처음 슬라이드로 돌아오는 것 방지
    freeMode: false,                  // 사용자 스크롤 시 부드럽게 스크롤
  },

  // 슬라이드 페이지 표시 설정
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 이후, 이전 슬라이드로 이동할 버튼 제시
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {                    // 슬라이드 변경 함수
      var currentSlideId = swiper.slides[swiper.activeIndex].id;

      if (currentSlideId === 'slide_08') {        // 마지막 슬라이드일 경우
        this.autoplay.stop();
      }
    }
  }
});

function handleRedirect() {
  window.location.href = 'startmain.html';
}

// 엔터키와 스페이스바 누르면 startmain 화면으로 이동하기
function handleKeyPress(event) {
  if (event.code === 'Space' || event.code === 'Enter') {
    var currentSlideId = swiper.slides[swiper.activeIndex].id;
    if (currentSlideId === 'slide_08') {
      handleRedirect();
    }
  }
}

// 화면을 클릭하면 startmain 화면으로 이동하기
function handleScreenClick() {
  var currentSlideId = swiper.slides[swiper.activeIndex].id;
  if (currentSlideId === 'slide_08') {
    handleRedirect();
  }
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('click', handleScreenClick);

swiper.on('transitionEnd', function () {
  var currentSlideId = swiper.slides[swiper.activeIndex].id;

  if (currentSlideId === 'slide_08') { // 현재 슬라이드가 마지막 슬라이드일 경우
    document.querySelector('.swiper-button-next').addEventListener('click', handleRedirect);
    document.querySelector('.swiper-button-prev').addEventListener('click', function() {
      swiper.slidePrev();
    });
    document.addEventListener('keydown', handleKeyPress);
    document.querySelector('.swiper').addEventListener('click', handleRedirect);
  } else { 
    // 현재 슬라이드가 마지막 슬라이드가 아닌 경우
    document.querySelector('.swiper-button-next').removeEventListener('click', handleRedirect);
    document.querySelector('.swiper').removeEventListener('click', handleRedirect);
  }
});