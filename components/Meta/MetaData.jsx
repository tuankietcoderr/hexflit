import Head from "next/head";
import React from "react";
import { URL } from "../../utils/url";

const MetaData = ({ type, title, thumbnail, description, link }) => {
  return (
    <Head>
      <title>
        {`HexaMovie ${type ? "| " + type : ""} ${title ? "| " + title : ""}`}
      </title>
      <meta name="description" content={description} />
      {link && <meta property="og:url" content={`${URL + "/" + link}`} />}
      {link === "" && (
        <meta property="og:url" content={`${URL + "/" + link}`} />
      )}
      {link && <meta property="url" content={`${URL + "/" + link}`} />}
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:title" content={title} />
      <meta property="og:image:alt" content={title} />
      <meta name="image" content={thumbnail} />
    </Head>
  );
};

export default MetaData;
