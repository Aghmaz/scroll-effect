document.addEventListener("scroll", () => {
    const leftTopImage = document.querySelector(".left-top");
    const rightTopImage = document.querySelector(".right-top");
    const leftBottomImage = document.querySelector(".left-bottom");
    const rightBottomImage = document.querySelector(".right-bottom");
  
    const scrollY = window.scrollY;
  
    // Adjust the sizes of the images based on the scroll position
    const imageSize = 180 - scrollY / 10;
    const imageHeight = 240 - scrollY / 10;
  
    leftTopImage.style.width = `${imageSize}px`;
    leftTopImage.style.height = `${imageHeight}px`;
    leftBottomImage.style.width = `${imageSize}px`;
    leftBottomImage.style.height = `${imageHeight}px`;
    rightTopImage.style.width = `${imageSize}px`;
    rightTopImage.style.height = `${imageHeight}px`;
    rightBottomImage.style.width = `${imageSize}px`;
    rightBottomImage.style.height = `${imageHeight}px`;
  
    // Adjust the positions of the side images based on the scroll position in the X-axis only
    const offset = scrollY;
    leftTopImage.style.left = `${120 + offset}px`;
    rightTopImage.style.right = `${120 + offset}px`;
    leftBottomImage.style.left = `${120 + offset}px`;
    rightBottomImage.style.right = `${120 + offset}px`;
  });
  