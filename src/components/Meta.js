import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "FabricShop | Mern Stack",
  description: "Fabric shop",
  keywords: "Kantha, Nile, chennaiSilks, Etly, Kantha",
};

export default Meta;
