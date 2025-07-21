import React from "react";
import { useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

function ProductDescription() {
  const { productList } = useSelector((state) => state.product);

  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));

  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-[91px] gap-7 text-sm text-[#737373] ">
        <a href="">Description</a>
        <a href="">Additional Information</a>
        <a href="">Reviews (0)</a>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-7.5">
          <div className="w-[332px] h-[392px] ">
            <img
              src={product.images[0]?.url}
              alt={product.name}
              className="w-[332px] h-[292px] md:h-[392px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[332px] h-[427px] gap-7.5">
            <h3 className="text-2xl text-[#252B42] ">{product.name}</h3>
            <p className="text-sm text-[#737373] items-center justify-center">
              {product.description} <br /> Met minim Mollie non desert Alamo est
              sit cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
              <br />
              <br /> Met minim Mollie non desert Alamo est sit cliquey dolor do
              met sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met. <br /> <br /> Met
              minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[332px] h-[427px] gap-7.5">
            <h3 className="text-xl text-[#252B42] ">{product.name}</h3>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
            </div>
            <h3 className="text-xl text-[#252B42] ">{product.title}</h3>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <MdOutlineKeyboardArrowRight />
                <p className="text-sm text-[#737373] ">{product.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
