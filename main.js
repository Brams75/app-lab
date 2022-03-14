const header = document.getElementsByClassName("header-sticky");
const navbar = document.getElementsByClassName("navbar-sticky");
const serviceTitle = document.getElementsByClassName("service-title");
const serviceIcons = document.getElementsByClassName("service-icons");
const areaTwoImages = document.getElementsByClassName("area2-images");
const serviceContentBlock = document.getElementsByClassName("service-content");
const featuresMainWrap = document.getElementsByClassName("features_main_wrap");
const featuresInfo = document.getElementsByClassName("features_infos");

window.onscroll = () => {
  const scrolledHeight =
    document.documentElement.scrollTop || document.body.scrollTop;

  console.log(scrolledHeight);

  if (scrolledHeight > 0 && scrolledHeight < 400) {
    header[0].style.visibility = "hidden";
    header[0].classList.remove("slide-in-top");
  }
  if (scrolledHeight >= 400) {
    header[0].style.visibility = "visible";
    header[0].classList.add("slide-in-top");
  }

  if (scrolledHeight === 200) {
    serviceTitle[0].classList.add("fade-in-bottom");
  }

  if (scrolledHeight >= 400) {
    const icons = [...serviceIcons[0].children];
    icons.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add("fade-in-bottom");
        icon.style.visibility = "visible";
      }, Number(i + "000") / 4);
    });
  }

  if (scrolledHeight >= 800) {
    const images = [...areaTwoImages[0].children];
    images.forEach((image, i) => {
      if (i === 0) {
        areaTwoImages[0].children[0].classList.add("slide-in-left");
      }

      if (i === 1) {
        areaTwoImages[0].children[1].classList.add("slide-in-right");
      }
      areaTwoImages[0].children[i].style.visibility = "visible";
    });
  }

  if (scrolledHeight >= 1600) {
    const blocks = [...serviceContentBlock[0].children];
    blocks.forEach((item) => {
      item.classList.add("fade-in-bottom");
      item.style.visibility = "visible";
    });
  }

  if (scrolledHeight >= 1900) {
    featuresMainWrap[0].children[1].classList.add("fade-in-bottom");
    featuresMainWrap[0].children[1].style.visibility = "visible";
  }

  if (scrolledHeight >= 2400) {
    featuresMainWrap[1].children[0].classList.add("slide-in-left");
    featuresMainWrap[1].children[0].style.visibility = "visible";
  }

  if (scrolledHeight >= 2600) {
    featuresInfo[0].children[0].classList.add("fade-in-bottom");
    featuresInfo[0].children[0].style.visibility = "visible";
  }

  if (scrolledHeight >= 2700) {
    featuresInfo[0].children[1].classList.add("fade-in-bottom");
    featuresInfo[0].children[1].style.visibility = "visible";
  }
};

navbar[0].childNodes[1].onclick = () => {
  header[0].style.visibility = "hidden";
};

for (let item of navbar[0].childNodes[3].children) {
  item.firstChild.onclick = function () {
    header[0].style.visibility = "hidden";
  };
}

navbar[0].childNodes[5].onclick = () => {
  header[0].style.visibility = "hidden";
};
