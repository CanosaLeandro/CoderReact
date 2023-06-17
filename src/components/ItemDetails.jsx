import { useEffect, useParams } from "react";

const ItemDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("Received item id to: ", id);
    return () => {
      console.log("Will change item id to: ", id);
    };
  }, [id]);
};

export default ItemDetails;
