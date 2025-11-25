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
    <section>
      <div className="bg-blur-color">
        <div className="py-12 gap-4 flex flex-col items-center font-bold ">
          <h1 className="text-2xl md:text-6xl">{t("contact.title")}</h1>
          <h1 className="text-xs mt-4  md:text-base font-light">
            {t("contact.cta")}
          </h1>
          <button
            className={cn(
              "mt-4 w-fit py-2 px-3 gap-2 flex justify-between items-center ",
              "bg-secondary-bg-color text-secondary-text-color shadow-none rounded-lg border",
              "md:p-2"
            )}
          >
            {t("buttons.contact")}
            <RiSendPlaneFill onClick={sendEmail} className="rtl:-scale-x-100" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
