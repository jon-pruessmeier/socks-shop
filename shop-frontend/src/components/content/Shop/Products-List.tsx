import { Product } from "../../../model/Product";
import { ProductComponent } from "./Product-Component";

export interface ProductsListProps {
  productsList: Product[];
}

export function ProductList({ productsList }: ProductsListProps) {
  return (
    <div className="m-4 flex justify-center bg-zinc-800 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {productsList.map((product) => (
        <ProductComponent product={product} />
      ))}
    </div>
  );
}
