import QuickLinkCard, { type QuickLinkCardProps } from "../General/QuickLinkCard";

export interface QuickLinksListDivProps {
    list: QuickLinkCardProps[];
}

const QuickLinksListDiv: React.FC<QuickLinksListDivProps> = ({ list }) => {
    return (
        <div className="flex flex-col w-[811px] min-w-[811px] max-w-[811px] h-fit bg-transparent gap-4 items-start">
            <div className="flex flex-row w-full h-fit">
                <h2>Discover more on picoCTF</h2>
            </div>
            <div className="w-full h-fit overflow-clip">
                <div className="flex flex-row w-full h-fit overflow-scroll gap-6">
                    {
                        list.map((item) => (<QuickLinkCard name={item.name} description={item.description} icon={item.icon} link={item.link}/>))
                    }
                    {/* <QuickLinkCard name={"Primer"} description={"This is the Primer description."} icon={"book"} link={"/resources/primer"}/>
                    <QuickLinkCard name={"Videos"} description={"This is the Videos description."} icon={"smart_display"} link={"/resources/videos"}/>
                    <QuickLinkCard name={"External Resources"} description={"This is the External Resources description."} icon={"article"} link={"/resources/external-resources"}/>
                    <QuickLinkCard name={"Learning Guides"} description={"This is the Learning Guides description."} icon={"import_contacts"} link={"/resources/learning-guides"}/>
                    <QuickLinkCard name={"Community"} description={"This is the Community description."} icon={"article"} link={"/resources/community"}/> */}
                </div>
            </div>
        </div>
    );
}

export default QuickLinksListDiv;