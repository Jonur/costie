import { useEffect, useRef, useState } from "react";

import { SUPPORTED_LANGUAGE_CODES } from "../../constants";
import { useCostieCtx, useTranslations } from "../../hooks";
import { Language, type LanguageCode } from "../../types";
import { c } from "../../utils";

const LanguageSelector = () => {
  const { languageCode, updateLanguageCode } = useCostieCtx();
  const { t } = useTranslations();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelectLanguage = (langCode: LanguageCode) => {
    updateLanguageCode(langCode);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (containerRef.current && !containerRef.current.contains(target) && open) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <section
      ref={containerRef}
      aria-label={t("language")}
      className={c(
        "fixed top-0 right-0 pt-3 px-4 pb-4 flex flex-col gap-8 items-end h-full z-10 duration-300 ease-out transition-width",
        {
          "w-42 bg-black": open,
        }
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        className="fill-white cursor-pointer"
        onClick={() => setOpen(!open)}
        role="button"
        aria-label={t("language.cta.ariaLabel")}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
      </svg>

      {open && (
        <ul className="pl-6 pb-4 w-full flex flex-col gap-4 text-white" role="menu">
          {SUPPORTED_LANGUAGE_CODES.map((langCode, i) => (
            <li
              className="cursor-pointer relative"
              key={langCode}
              onClick={() => handleSelectLanguage(langCode)}
              role="menuitem"
              tabIndex={i}
            >
              {languageCode === langCode && (
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="16px"
                    viewBox="0 0 24 24"
                    width="16px"
                    className="fill-white absolute -left-6 top-1"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
                        <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
                      </g>
                    </g>
                  </svg>
                </span>
              )}
              <span>{Language[langCode]}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default LanguageSelector;
