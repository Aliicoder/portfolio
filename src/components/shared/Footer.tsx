import { useTranslation } from "react-i18next"
import { RiSendPlaneFill } from "react-icons/ri"
import CustomButton from "../buttons/CustomButton"

function Footer() {
  const [t] = useTranslation()
  const sendEmail = () => {
    const email = "alifahmiofficialacc@gmail.com"
    const subject = encodeURIComponent(t("contact.emailSubject"))
    const body = encodeURIComponent(t("contact.emailBody"))
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_self")
  }
  return (
    <section className="mt-10">
        <div className="p-8 flex justify-center w-fit ">
          <h1 className="text-lg md:text-xl font-semibold z-10 ">
            {t("contact.title")}
          </h1>
        </div>
      <div className={"flex flex-col bg-[var(--blur-color)] rounded-t-xl"}>
        <div className="p-12 gap-6 grid grid-cols-1  md:grid-cols-3">
          <div className="max-md:hidden order-2 md:order-1 flex md:flex-col justify-center gap-6">
            <div>
              <h1 className="text-sm md:text-base">{t("contact.phoneNumber")}</h1>
              <h1 className="text-sm md:text-base p-4 ">+91 6366313572</h1>
            </div>

            <div>
              <h1 className="text-sm md:text-base">{t("contact.email")}</h1>
              <h1 className="text-sm md:text-base p-4 ">
                alifahmiofficialacc
                <br />
                @gmail.com
              </h1>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center md:items-start flex-col montserrat font-bold md:col-span-2 gap-3">
            <h1 className="text-2xl md:text-6xl">{t("contact.title")}</h1>
            <h1 className="text-xs mt-4  md:text-base font-light">{t("contact.cta")}</h1>
            <div className="mt-4">
              <CustomButton
                onClick={sendEmail}
                className="text-sm md:text-base mt-4 p-4 gap-3 flex items-center bg-[--tertiary-background-color] text-white shadow-none rounded-lg 
                md:p-2 md:top-6 md:right-6"
                text={t("contact.email")}
                direction={"left"}
              >
                <RiSendPlaneFill />
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="py-10 flex justify-center">
          <h1 className="text-xs md:text-base">{t("footer.text")}</h1>
        </div>
      </div>
    </section>
  )
}

export default Footer
