import Head from "next/head";
import site from "../config";

export default function SEO({
  description = "",
  lang = "en-IN",
  image = null,
  meta = [],
  title = "",
  keywords = [],
  useTitleTemplate = true,
  url,
  canonical = "",
  schemaCodes = [],
}) {
  const metaImage = image || site.siteMetadata.image;
  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title
    ? useTitleTemplate
      ? `${title} | BeToppers`
      : title
    : "BeToppers";
  const metaUrl = site.siteMetadata.siteUrl + (url || "");

  return (
    <Head>
      <title>{`${metaTitle}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={metaImage} itemProp="image" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {canonical && (
        <link
          rel="canonical"
          href={site.siteMetadata.siteUrl + canonical}
          key="canonical"
        />
      )}
      {schemaCodes
        ? schemaCodes.map((code, index) => (
            <script
              key={"schema-code" + index}
              id="schema-code"
              type={code.type}
              dangerouslySetInnerHTML={{ __html: code.code }}
            />
          ))
        : null}
    </Head>
  );
}
