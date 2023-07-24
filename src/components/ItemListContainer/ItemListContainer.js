import { useState, useEffect } from "react";
import { getProducts, getCategoryData, getProductsByCategoty } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting, category }) => {
  const [products, setProducts] = useState([]);
  // Completar la funcionalidad de las categorias
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;

