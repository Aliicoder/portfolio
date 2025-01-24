import InfiniteScroll from "@/components/reactBits/InfiniteScroll/InfiniteScroll";
import { useTranslation } from "react-i18next"
const items = [
  { content: "Text Item 1" },
  { content: <p>Paragraph Item 2</p> },
  { content: "Text Item 3" },
  { content: <p>Paragraph Item 4</p> },
  { content: "Text Item 5" },
  { content: <p>Paragraph Item 6</p> },
  { content: "Text Item 7" },
  { content: <p>Paragraph Item 8</p> },
  { content: "Text Item 9" },
  { content: <p>Paragraph Item 10</p> },
  { content: "Text Item 11" },
  { content: <p>Paragraph Item 12</p> },
  { content: "Text Item 13" },
  { content: <p>Paragraph Item 14</p> },
];
function MySkills() {
  const [t] = useTranslation()
  return (
    <div>
      <div className="p-6">
        <div className="relative flex justify-center w-fit ">
          <h1 className="relative c8 md:c4 font-semibold z-20 ">{t("headers.myJourney")}</h1>
          <div className="absolute bottom-0 h-2 w-full z-10 bg-[--tertiary-background-color]" />
        </div>
      </div>
      <div className="p-[6%] px-[12%] flex  ">
        <div  style={{height: '500px', positon: 'relative'}}>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  )
}

export default MySkills