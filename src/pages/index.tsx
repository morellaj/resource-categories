import React from "react";
import categories from "../data/categories";
import Entry from "../components/entry";

export default function Home() {
  return <Entry categoryText="Categories: Categories" children={categories} />;
}
