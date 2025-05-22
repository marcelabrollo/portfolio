<script>
  let currentVideoIndex = 0;

  const wrapper = document.getElementById("video-carousel-wrapper");
  const videos = wrapper.querySelectorAll("..motion-video-frame");

  function updateVideoCarousel() {
    const offset = -currentVideoIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
  }

  function nextVideo() {
    if (currentVideoIndex < videos.length - 1) {
      currentVideoIndex++;
      updateVideoCarousel();
    }
  }

  function prevVideo() {
    if (currentVideoIndex > 0) {
      currentVideoIndex--;
      updateVideoCarousel();
    }
  }
</script>
