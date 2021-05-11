import React from "react";

const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
    <hr />
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100px",
        alignItems:"center",
        justifyContent: "center",
      }}>
      {`© ${year} davidyappeter.xyz`}
    </div>
    </>
  );
};

export default Footer;
