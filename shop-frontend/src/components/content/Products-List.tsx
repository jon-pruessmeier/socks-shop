import { Product } from "../../model/Product";
import { ProductComponent } from "./Product-Component";
import { useRecoilValue } from "recoil";
import { cartState } from "../../model/atoms";
import { useEffect } from "react";

export interface ProductsListProps {
  productsList: Product[];
}

export function ProductList({ productsList }: ProductsListProps) {
  const cart = useRecoilValue(cartState);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsList.map((product) => (
            <ProductComponent product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
