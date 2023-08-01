import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");

  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link href={route} locale={otherLocale}>
      <button className="border border-blue-600 hover:bg-blue-700 text-blue-600 hover:text-white font-bold py-2 px-4 rounded capitalize">
        {t("switchLocale", { locale: otherLocale })}
      </button>
    </Link>
  );
};
