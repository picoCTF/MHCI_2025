import QuickLinkCard, { type QuickLinkCardProps } from "../general/QuickLinkCard";

export interface QuickLinksListDivProps {
    list: QuickLinkCardProps[];
}

const QuickLinksListDiv: React.FC<QuickLinksListDivProps> = ({ list }) => {
    return (
        <div className="flex flex-col w-[811px] min-w-[811px] max-w-[811px] h-fit bg-transparent gap-4 items-start">
            <div className="flex flex-row w-full h-fit">
                <h3>Discover more on picoCTF</h3>
            </div>
            <div className="w-full h-fit overflow-clip">
                <div className="flex flex-row w-full h-fit overflow-scroll gap-6">
                    {
                        list.map((item) => (<QuickLinkCard key={item.id} name={item.name} description={item.description} icon={item.icon} id={item.id} link={item.link}/>))
                    }
                </div>
            </div>
        </div>
    );
}

export default QuickLinksListDiv;