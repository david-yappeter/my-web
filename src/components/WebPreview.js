import React, { useState } from "react";
import { useScrapper } from "react-tiny-link";

function WebPreview() {
  const [result, loading, error] = useScrapper({
    url: "http://localhost:3001",
  });

  console.log(result, loading, error);

  if (loading) {
    return <div> Loading . .</div>;
  }

  if (error) {
    return <div> Error . .</div>;
  }

  return <div>{result}</div>;
}

export default WebPreview;
