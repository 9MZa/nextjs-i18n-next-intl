import PageLayout from "@/components/PageLayout";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export default function Home({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <PageLayout title={t("Home.title")}>
      <div className=" min-h-screen flex justify-center items-center flex-col gap-5">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl">{t("Home.title")}</h1>
          <p className="text-2xl font-light">{t("Home.description")}</p>
        </div>
        <div className="bg-gray-100 py-5 px-10 text-center flex-col flex gap-2">
          <LocaleSwitcher />
          <p className="font-light">{t("LocaleSwitcher.currentLocale", { locale })}</p>
        </div>
      </div>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      locale,
    },
  };
};
