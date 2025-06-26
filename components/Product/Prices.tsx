import React from "react";

export const Prices = ({
  oldPrice,
  newPrice,
}: {
  oldPrice: number | null;
  newPrice: number | null;
}) => {
  return (
    <div className="prices flex flex-row my-3 items-end ">
      <div className="sale-price font-bold text-secondary text-xl">
        {newPrice ? `$${newPrice}` : ""}
      </div>
      <div className="retail-price mx-3 font-extralight line-through ">
        {oldPrice ? `$${oldPrice}` : ""}
      </div>
    </div>
  );
};
