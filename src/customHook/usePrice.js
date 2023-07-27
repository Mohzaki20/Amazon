import { useState, useEffect } from "react";
const usePrice = (price) => {
  const [data, setData] = useState(0);
  useEffect(() => {
    if (price >= 100000) {
      let newPrice = price.toString().split("");
      newPrice.splice(3, 0, ",");
      setData(newPrice.join(""));
    } else if (price >= 10000) {
      let newPrice = price.toString().split("");
      newPrice.splice(2, 0, ",");
      setData(newPrice.join(""));
    } else if (price >= 1000) {
      let newPrice = price.toString().split("");
      newPrice.splice(1, 0, ",");
      setData(newPrice.join(""));
    } else {
      setData(price);
    }
  }, [price]);

  return data;
};

export default usePrice;
