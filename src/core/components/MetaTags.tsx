import { Helmet } from "react-helmet";
import { META_DATA } from "../const/defaults";
import logo from "../../assets/logo_small.png";

interface Props {
  name: string;
}

export const MetaTags = ({ name }: Props) => {
  const pageMeta = META_DATA[name];

  if (!pageMeta) return null;

  return (
    <Helmet>
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:image" content={logo} />
      <meta
        property="og:site_name"
        content="Mainline Facility Management Limited"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${import.meta.env.VITE_APP_URL}/${pageMeta.path}`}
      />
      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
      <meta name="twitter:image" content={logo} />
    </Helmet>
  );
};
