import { useTranslations } from "../../hooks";

const Header = () => {
  const { t } = useTranslations();

  return (
    <header className="text-white w-full text-center">
      <h1 className="font-bubblegum text-7xl">{t("header")}</h1>
      <h2 className="text-2xl">{t("subheader")}</h2>
    </header>
  );
};

export default Header;
