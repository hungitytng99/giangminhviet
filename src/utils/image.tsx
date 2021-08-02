const checkExistedImage = (image_url: string) => {
    const img = new Image();
    img.src = image_url;
    if (img.complete) {
        return true;
      } else {
        img.onload = () => {
          return true;
        };
        img.onerror = () => {
          return false;
        };
      }

}

const ListImageUtils = {
    checkExistedImage,
}

export default ListImageUtils;