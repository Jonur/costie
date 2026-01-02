import { useTranslations } from "../../hooks";

const Footer = () => {
  const { t } = useTranslations();

  const year = new Date().getFullYear();

  return (
    <footer className="text-sm mt-2 flex gap-1 justify-center mb-4 absolute bottom-0 left-0 w-full text-center">
      <span>&copy;{year}</span>
      <span>-</span>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/Jonur" className="underline">
        {t("footer.owner")}
      </a>
      <span>-</span>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Jonur/costie/blob/master/PrivacyPolicy.md"
        className="underline"
      >
        {t("footer.privacyPolicy")}
      </a>
    </footer>
  );
};

export default Footer;
