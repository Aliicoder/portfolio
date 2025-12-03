import { useTranslation } from "react-i18next";
import { RiSendPlaneFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

function Footer() {
  const [t] = useTranslation();
  const sendEmail = () => {
    const email = "alifahmiofficialacc@gmail.com";
    const subject = encodeURIComponent(t("contact.emailSubject"));
    const body = encodeURIComponent(t("contact.emailBody"));
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_self");
  };
  return (
    <section className="bg-blur-color">
      <div className="py-12 gap-4 flex flex-col items-center">
        <h6 className="text-2xl md:text-6xl ltr:font-montserrat font-bold">
          {t("contact.title")}
        </h6>
        <h6 className={cn("text-xs mb-4 md:text-base ", "ltr:font-montserrat")}>
          {t("contact.cta")}
        </h6>
        <button
          className={cn(
            "mt-4 p-3 gap-2 flex justify-between items-center bg-secondary-bg-color text-secondary-text-color rounded-lg",
            "ltr:font-montserrat",
            "md:p-2 "
          )}
        >
          {t("buttons.contact")}
          <RiSendPlaneFill onClick={sendEmail} className="rtl:-scale-x-100" />
        </button>
      </div>
    </section>
  );
}

export default Footer;
