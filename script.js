document.addEventListener("scroll", () => {
  const centerImage = document.querySelector(".center");
  const leftTopImage = document.querySelector(".left-top");
  const leftBottomImage = document.querySelector(".left-bottom");
  const rightTopImage = document.querySelector(".right-top");
  const rightBottomImage = document.querySelector(".right-bottom");

  const centerOffset = window.innerHeight / 2;

  const scrollY = window.scrollY;

  // Adjust the sizes of the images based on the scroll position
  const imageSize = 180 - scrollY / 10;
  const imageHeight = 220 - scrollY / 10;

  leftTopImage.style.width = `${imageSize}px`;
  leftTopImage.style.height = `${imageHeight}px`;

  leftBottomImage.style.width = `${imageSize}px`;
  leftBottomImage.style.height = `${imageHeight}px`;

  rightTopImage.style.width = `${imageSize}px`;
  rightTopImage.style.height = `${imageHeight}px`;

  rightBottomImage.style.width = `${imageSize}px`;
  rightBottomImage.style.height = `${imageHeight}px`;

  // Adjust the positions of the images based on the scroll position
  const offset = centerOffset - scrollX / 2;
  leftTopImage.style.top = `${offset}px`;
  leftBottomImage.style.bottom = `${offset}px`;
  rightTopImage.style.top = `${offset}px`;
  rightBottomImage.style.bottom = `${offset}px`;

  // Center image adjustments
  const centerSize = 365 - scrollY / 10;
  centerImage.style.width = `${centerSize}px`;
  centerImage.style.height = `${centerSize}px`;

  if (scrollY > 50) {
    leftTopImage.style.marginLeft = "-180px";
    leftBottomImage.style.marginLeft = "-180px";
    leftBottomImage.style.marginBottom = "-80px";
    rightTopImage.style.marginRight = "-180px";

    rightBottomImage.style.marginRight = "-180px";
    rightBottomImage.style.marginBottom = "-80px";
  } else if (scrollY === 100 > 50) {
    leftTopImage.style.marginLeft = "-280px";
    leftBottomImage.style.marginLeft = "-280px";
    rightTopImage.style.marginRight = "-280px";
    rightBottomImage.style.marginRight = "-280px";
    rightBottomImage.style.marginTop = "150px";
  } else {
    // Reset the left and right images to their original positions when scrolling up
    leftTopImage.style.marginLeft = "0%";
    leftBottomImage.style.marginLeft = "0%";
    rightTopImage.style.marginRight = "0%";
    rightBottomImage.style.marginRight = "0%";
  }
});
