import { Product } from "../../model/Product";
import { useEffect, useState } from "react";
import { AddToCartButton } from "./Add-To-Cart-Button";

export interface ProductComponentProps {
  product: Product;
}
export function ProductComponent({ product }: ProductComponentProps) {
  const [onHover, setOnHover] = useState(false);
  const placeholderIMG = "/assets/productImages/black-standard.jpg";
  const imgPath = `${""}${product.imageSrc || placeholderIMG}`;

  return (
    <div key={product.id} className="group bg-white rounded-lg">
      <div
        key={product.id}
        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <div className={"relative"}>
          {onHover && <AddToCartButton product={product} />}
          <img
            src={placeholderIMG}
            alt={"socks"}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </div>
      <div className="flex align-items-center">
        <p className="text-lg text-gray-700 px-2">{product.name}</p>
        <p className="text-lg font-medium text-gray-900">{`${product.price} €`}</p>
      </div>
      <p className={"text-md text-gray-700 px-2"}>{product.description}</p>
    </div>
  );
}
