import React from "react";
import Title from "../../components/title/Title";
import ProductList from "../../components/products/ProductList";

const ProductForYou = () => {
  return (
    <div>
      <div className="container">
        <Title>Dành cho bạn</Title>
        <div className="py-10">
          <div className="p-6 rounded-lg mb-5">
            <ul className="flex items-center justify-center gap-8">
              <li>
                <a href="#" className="menu-link menu-link-active">
                  Văn học
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Kinh tế
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Tâm lí - Kỹ năng sống
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Nuôi dạy con
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Sách thiếu nhi
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Tiểu sử - Hồi kí
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Sách giáo khoa - Tham khảo
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Sách ngoại ngữ
                </a>
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
