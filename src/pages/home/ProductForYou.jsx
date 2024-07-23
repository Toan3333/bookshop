import React from "react";
import Title from "../../components/title/Title";
import ProductList from "../../components/products/ProductList";

const ProductForYou = () => {
  return (
    <div>
      <div className="container">
        <Title>Dành cho bạn111</Title>
        <div className="py-10">
          <div className="bg-redBox p-6 rounded-lg mb-5">
            <ul className="flex items-center justify-center gap-8 text-white">
              <li>
                <a href="#">Văn học</a>
              </li>
              <li>
                <a href="#">Kinh tế</a>
              </li>
              <li>
                <a href="#">Tâm lí - Kỹ năng sống </a>
              </li>
              <li>
                <a href="#">Nuôi dạy con</a>
              </li>
              <li>
                <a href="#">Sách thiếu nhi</a>
              </li>
              <li>
                <a href="#">Tiểu sử - Hồi kí</a>
              </li>
              <li>
                <a href="#">Sách giáo khoa - Tham khảo</a>
              </li>
              <li>
                <a href="#">Sách ngoại ngữ</a>
              </li>
            </ul>
          </div>
          <ProductList></ProductList>
        </div>
      </div>
    </div>
  );
};

export default ProductForYou;
