export const funcImg = (url) => {
  let img = '';
  if (url != '') {
    img = `/cgu.github.io-master${url}`;
    //img = `${url}`;
    return img;
  }
};
