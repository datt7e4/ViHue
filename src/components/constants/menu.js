export const getMenuData = (isEnglish) => {
  return isEnglish ? menu_data.english : menu_data.vietnamese;
};

export const getMenuDescription = (isEnglish) => {
  return isEnglish
    ? menuDescriptionConst.english
    : menuDescriptionConst.vietnamese;
};
const menuDescriptionConst = {
  english: `Our menu is updated regularly. Please check back often to see what
    new items we have added!`,
  vietnamese: `Thực đơn của chúng tôi được cập nhật thường xuyên. Hãy kiểm tra
    thường xuyên để xem những món mới chúng tôi đã thêm vào!`,
};

const menu_data = {
  vietnamese: [
    {
      title: "Bánh Lọc",
      item_price: "$60 / 100 cái",
      desc: "",
      img_src: "./images/banh-loc.jpg",
    },
    {
      title: "Bánh Lọc Chay",
      item_price: "$50/ 100 cái",
      desc: "",
      img_src: "./images/banh-loc-chay.jpg",
    },
    {
      title: "Bánh Nậm",
      item_price: "$80 / 100 cái",
      desc: "",
      img_src: "./images/banh-nam.jpg",
    },
    {
      title: "Bánh Ít Mặn",
      item_price: "$70 / 100 cái",
      desc: "",
      img_src: "./images/banh-it.jpg",
    },
    {
      title: "Bánh Gói",
      item_price: "$50 / 100 cái",
      desc: "",
      img_src: "./images/banh-goi.jpg",
    },
  ],
  english: [
    {
      title: "Flour Cake",
      item_price: "$60 / 100 pieces",
      desc: "",
      img_src: "./images/banh-loc.jpg",
    },
    {
      title: "Vegetarian Flour Cake",
      item_price: "$50/ 100 pieces",
      desc: "",
      img_src: "./images/banh-loc-chay.jpg",
    },
    {
      title: "Coconut Cake",
      item_price: "$80 / 100 pieces",
      desc: "",
      img_src: "./images/banh-nam.jpg",
    },
    {
      title: "Salty Cake",
      item_price: "$70 / 100 pieces",
      desc: "",
      img_src: "./images/banh-it.jpg",
    },
    {
      title: "Wrapped Cake",
      item_price: "$50 / 100 pieces",
      desc: "",
      img_src: "./images/banh-goi.jpg",
    },
  ],
};
