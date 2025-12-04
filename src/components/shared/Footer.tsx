import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation();
  return (
    <section className="bg-tertiary-color text-white">
      <div className="py-12 gap-4 flex flex-col items-center">
        <p
          className={cn(
            "text-sm text-center font-semibold opacity-90",
            "md:text-base",
            "ltr:font-montserrat"
          )}
        >
          © {new Date().getFullYear()} {t("footer.message")}.
          <br />
          {t("footer.copyright")}
        </p>
      </div>
    </section>
  );
}

export default Footer;
