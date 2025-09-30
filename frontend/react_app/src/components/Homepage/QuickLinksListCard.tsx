import QuickLinkCard, { type QuickLinkCardProps } from "../general/QuickLinkCard";
import FocusWrapperCard, { type FocusWrapperCardProps } from "../general/FocusWrapperCard";

export interface QuickLinksListDivProps {
    isFocused: FocusWrapperCardProps["isFocused"];
    list: QuickLinkCardProps[];
}

// This needs a pagination components when it is being used on desktop
const QuickLinksListDiv: React.FC<QuickLinksListDivProps> = ({ isFocused, list }) => {
    return (
        <div className="flex flex-col w-full h-fit bg-transparent gap-4 items-start">
            <div className="flex flex-row w-full h-fit">
                <h3>Discover more on picoCTF</h3>
            </div>
            <FocusWrapperCard isFocused={isFocused}>
                {list.map((item) => (<QuickLinkCard key={item.id} name={item.name} description={item.description} icon={item.icon} id={item.id} link={item.link}/>))}
            </FocusWrapperCard>
        </div>
    );
}

export default QuickLinksListDiv;