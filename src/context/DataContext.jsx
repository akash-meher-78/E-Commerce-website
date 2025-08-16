import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=150");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = data ? getUniqueCategory(data, "category") : [];
  // brandOnlyData removed since FakeStoreAPI has no "brand"

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, categoryOnlyData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
