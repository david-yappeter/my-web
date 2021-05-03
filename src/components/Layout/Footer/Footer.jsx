import React from "react";

const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <div
      style={{
        display: "block",
        width: "100%",
        height: "300px",
      }}>
      <hr />
      {`© ${year} davidyappeter.xyz`}
    </div>
  );
};

export default Footer;
