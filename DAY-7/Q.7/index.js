const progressTrack = document.querySelector(".progress-overlay");
const content = document.querySelector(".content");
const progressBar = document.querySelector(".progress-bar");

content.addEventListener("scroll", handleScroll);

const totalHeight = Math.abs(
  content.scrollHeight - content.clientHeight - content.scrollTop
);

function handleScroll() {
  const currentScroll = content.scrollTop;
  const scrollPercent = Math.round((currentScroll / totalHeight) * 100);
  progressBar.style.width = `${scrollPercent}%`;
}

window.addEventListener("resize", () => {
  window.location.reload();
});
