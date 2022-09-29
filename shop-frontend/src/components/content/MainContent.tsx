import { ProductList } from "./Products-List";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../../model/atoms";

export function MainContent() {
  const [products, setProducts] = useRecoilState(productsState);
  useEffect(() => {
    const fetchingAPI = async () => {
      const response = await fetch("http://localhost:4200/products", {
        method: "GET",
      });
      const data = await response.json();
      setProducts(data);
    };

    fetchingAPI().catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ProductList productsList={products} />
    </div>
  );
}
