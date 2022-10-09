import { Product } from "../../../model/Product";
import { useState } from "react";
import { AddToCartButton } from "./Add-To-Cart-Button";

export interface ProductComponentProps {
  product: Product;
}
export function ProductComponent({ product }: ProductComponentProps) {
  const [onHover, setOnHover] = useState(false);
  const imgPath = `${process.env.PUBLIC_URL}/assets/productImages/${product.imageSrc}`;

  return (
    <div key={product.id} className="group bg-white rounded-lg">
      <div
        key={product.id}
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg xl:aspect-w-7 xl:aspect-h-8"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <div className={"relative"}>
          {onHover && <AddToCartButton product={product} />}
          <img
            src={imgPath}
            alt={"socks"}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </div>
      <div className="flex justify-between flex-row mt-2 px-3">
        <div className={""}>
          <p className="text-lg font-medium text-gray-700 px-2">
            {product.name}
          </p>
          <p className={"text-md text-gray-700 px-2 pb-2"}>
            {product.description}
          </p>
        </div>
        <div className={"flex"}>
          <p className="text-4xl font-medium text-gray-900">{`${product.price} €`}</p>
        </div>
      </div>
    </div>
  );
}
