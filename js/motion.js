let currentVideoIndex = 0;

const videoWrapper = document.getElementById("video-carousel-wrapper");
const videoFrames = videoWrapper.querySelectorAll(".motion-video-frame");

function showVideo(index) {
  videoFrames.forEach((frame, i) => {
    frame.classList.remove("active");
    if (i === index) {
      frame.classList.add("active");
    }
  });
}

function nextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videoFrames.length;
  showVideo(currentVideoIndex);
}

function prevVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + videoFrames.length) % videoFrames.length;
  showVideo(currentVideoIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showVideo(currentVideoIndex);
});
