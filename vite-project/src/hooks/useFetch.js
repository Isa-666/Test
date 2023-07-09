import { useEffect, useState } from "react";
import { commerce } from "../lib/commerce";
export default function useFetch(url) {
  const [products,setProducts]=useState([]);
  const [productsMoreSold, setProductsMoreSold] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [newAccessories, setNewAccessories] = useState([]);
  const [MobileDevices, setMobileDevices] = useState([]);
  const [AccessoriesProducts, setAccessoriesProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const asyncFunction = async () => {
    const { data: product} = await commerce.products.list();

    const { data: productsMoreSold } = await commerce.products.list({
      category_slug: ["moresold"],
      limit: 4,
    });

    const { data: productsNewSold } = await commerce.products.list({
      category_slug: ["newproducts"],
      limit: 4,
    });

    const { data: MobilePhones } = await commerce.products.list({
      category_slug: ["mobile-devices"],
    });

    const { data: Accessories } = await commerce.products.list({
      category_slug: ["accessories"],
    });

    const { data: newAccessoriesProducts } = await commerce.products.list({
      category_slug: ["newaccessories"],
      limit: 4,
    });
setProducts(product)
    setAccessoriesProducts(Accessories);
    setNewAccessories(newAccessoriesProducts);
    setProductsMoreSold(productsMoreSold);
    setNewProducts(productsNewSold);
    setMobileDevices(MobilePhones);
    try {
      setLoading(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncFunction();
    setLoading(true);
  }, [url]);

  return {
    productsMoreSold,
    error,
    loading,
    newProducts,
    newAccessories,
    MobileDevices,
    AccessoriesProducts,
    products
  };
}
