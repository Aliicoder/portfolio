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
    <div>
      <div className="p-12">
        <div className="px-[1%]   relative flex justify-center w-fit ">
          <h1 className="relative c8 md:c4 font-semibold z-20 ">
            {t("contact.title")}
          </h1>
        </div>
      </div>
      <div className={"flex flex-col bg-[var(--blur-color)] rounded-t-xl"}>
        <div className="p-12 gap-6 grid grid-cols-1  md:grid-cols-3">
          <div className="max-md:hidden order-2 md:order-1 flex md:flex-col justify-center gap-6">
            <div>
              <h1 className="c4">{t("contact.phoneNumber")}</h1>
              <h1 className="c3 p-3">+91 6366313572</h1>
            </div>

            <div>
              <h1 className="c4">{t("contact.email")}</h1>
              <h1 className="c3 p-3 ">
                alifahmiofficialacc
                <br />
                @gmail.com
              </h1>
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center md:items-start flex-col montserrat font-bold md:col-span-2 gap-3">
            <h1 className="c9">{t("contact.title")}</h1>
            <h1 className=" c5 md:c3 font-light">{t("contact.cta")}</h1>
            <div className="mt-3">
              <CustomButton
                onClick={sendEmail}
                className="c6 p-3 gap-3 flex items-center bg-[--tertiary-background-color] text-white shadow-none rounded-lg border
                md:c3 md:p-2 md:top-6 md:right-6"
                text={t("contact.email")}
                direction={"left"}
              >
                <RiSendPlaneFill />
              </CustomButton>
            </div>
          </div>
        </div>

        <div className="py-10 flex justify-center">
          <h1 className="c5">{t("footer.text")}</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
