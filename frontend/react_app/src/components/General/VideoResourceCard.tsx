import { Card, CardBody, CardHeader } from "@heroui/react";

interface VideoResourceCardProps extends React.PropsWithChildren {
    description: string;
    youtubeID: string;
}

const VideoResourceCard: React.FC<VideoResourceCardProps> = ({ description, youtubeID }) => {
    return (
        <Card className="w-[706px] min-w-[706px] h-fit min-h-fit">
            <CardHeader>
                <p>ICON</p>
                <p>Video Tutorial</p>
            </CardHeader>
            <CardBody className="h-fit min-h-fit">
                <p>{description}</p>
                <iframe className='video h-fit min-h-fit'
                    title='Youtube Player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                </iframe>
            </CardBody>
        </Card>
    );
}

export default VideoResourceCard;