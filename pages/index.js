import dynamic from "next/dynamic";
import React from "react";
import Index4 from "./index-four";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
  <Index4/>
  );
};
export default Index;
