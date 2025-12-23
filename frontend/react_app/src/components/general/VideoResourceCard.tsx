import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface VideoResourceCardProps extends React.PropsWithChildren {
    description: string;
    youtubeID: string;
}

const VideoResourceCard: React.FC<VideoResourceCardProps> = ({ description, youtubeID }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit border-small m-0 p-6" radius="md" shadow="none">
            <CardBody className="flex flex-col h-fit min-h-fit p-0 gap-6">
                <div className="flex flex-row gap-3">
                    <Icon icon={"material-symbols:smart-display-outline"}/>
                    <p>Video Tutorial</p>
                </div>
                <p>{description}</p>
                <iframe className='flex video w-full h-fit min-h-fit rounded-small'
                    title='Youtube Player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}/>
            </CardBody>
        </Card>
    );
}

export default VideoResourceCard;