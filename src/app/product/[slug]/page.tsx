import React from "react";

type Params = Promise<{ slug: string }>;

const ProductDetail = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  return <div>ProductDetail: {slug}</div>;
};

export default ProductDetail;
