export const getPagesRight = (isEnglish) => {
  return isEnglish ? pagesRightConst.english : pagesRightConst.vietnamese;
};

export const getPagesRightRoute = (isEnglish) => {
  return isEnglish
    ? pagesRightRouteConst.english
    : pagesRightRouteConst.vietnamese;
};

export const getPageDescription = (isEnglish) => {
  return isEnglish ? descriptionConst.english : descriptionConst.vietnamese;
};

const pagesRightConst = {
  english: ["Home", "Menu", "Contact"],
  vietnamese: ["Trang chủ", "Thực đơn", "Liên hệ"],
};

const pagesRightRouteConst = {
  english: ["home", "menu", "contact"],
  vietnamese: ["trang-chu", "thuc-don", "lien-he"],
};

const descriptionConst = {
  english: `Welcome to Vi Hue, a bakery specializing in making and selling various
    types of cakes in the Seattle, Tacoma, and Kent area. We are proud to
    provide high-quality products made from fresh ingredients and free of
    any preservatives or additives. Order online and experience absolute
    satisfaction from our filtered flour cakes!`,
  vietnamese: `Chào mừng bạn đến với Vị Huế, chuyên sản xuất và cung cấp các loại
    bánh tại khu vực Seattle, Tacoma, và Kent. Chúng tôi tự hào cung cấp
    những sản phẩm chất lượng cao, làm từ nguyên liệu tươi ngon và không
    chứa bất kỳ chất bảo quản hoặc phụ gia gì. Hãy đặt hàng trực tuyến
    và trải nghiệm sự hài lòng tuyệt đối từ bánh bột lọc của chúng tôi!`,
};
