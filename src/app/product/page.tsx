import React, { use } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Product = (props: { searchParams: SearchParams }) => {
  const searchParams = use(props.searchParams);
  console.log(searchParams);
  return <div>Product Page</div>;
};

export default Product;
