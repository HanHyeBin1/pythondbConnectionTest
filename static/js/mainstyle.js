//top 버튼
var backToTop = () => {
    // Scroll | button show/hide
  window.addEventListener('scroll', () => {
    if (document.querySelector('html').scrollTop > 100) {
      document.getElementById('go-top').style.display = "block";
    } else {
      document.getElementById('go-top').style.display = "none";
    }
  });
  // back to top
  document.getElementById('go-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })
}
backToTop();

// 메인 슬라이드
document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".mainbanner_slide");
    const slideItems = document.querySelectorAll(".mainbanner_slide_item");
    const prevArrow = document.querySelector(".prev");
    const nextArrow = document.querySelector(".next");
    let currentIndex = 0;
    let intervalId; // 변수 추가
    
    function showSlide(index) {
      slideContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideItems.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
      showSlide(currentIndex);
    }
  
    nextArrow.addEventListener("click", function () {
      clearInterval(intervalId); // 자동 슬라이드 멈추기
      nextSlide();
      startAutoSlide(); // 자동 슬라이드 재시작
    });
  
    prevArrow.addEventListener("click", function () {
      clearInterval(intervalId); // 자동 슬라이드 멈추기
      prevSlide();
      startAutoSlide(); // 자동 슬라이드 재시작
    });
  
    function startAutoSlide() {
      clearInterval(intervalId); // 중복 실행 방지
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideItems.length;
        showSlide(currentIndex);
      }, 3000);
    }
  
    startAutoSlide();
  });