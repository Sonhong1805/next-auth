import React, { use } from "react";

type Params = Promise<{ slug: string }>;

const CategoryDetail = (props: { params: Params }) => {
  const params = use(props.params);
  const slug = params.slug;
  return <div>CategoryDetail: {slug}</div>;
};

export default CategoryDetail;
