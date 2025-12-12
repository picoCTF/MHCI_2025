import { Skeleton } from "@heroui/react";
import type { Game } from "../../api_interfaces/2023_generated_interfaces/game/game";
import { useMockData } from "../../mock-data/utils/utils";
import gameMockData from "../../mock-data/MockGameResponse.json"

interface LearningPathResourceContentDivProps {
    gameID: number;
}

const LearningPathGameContentDiv: React.FC<LearningPathResourceContentDivProps> = ({/* gameID */}) => {

    //API_NEEDED - get refreshData function from API, pass the gameID to the API to get the game data
    const { data: gameData, isLoading: gameDataLoading/*, refetch: refetchGame */} = useMockData<Game>(gameMockData);

    if(gameData && !gameDataLoading) {
        return (
            <div className="flex flex-col w-full h-full min-h-fit gap-8">
                <h2>{gameData.name}</h2>
                <p>{gameData.description}</p>
                <p>{"Put the game image and link here: " + gameData.launch_image}</p>
            </div>
        );
    }
    else {
        return (
            <div className="flex flex-col w-full h-full min-h-fit gap-8">
                <Skeleton className="rounded-full">
                    <h2>Game Name</h2>
                </Skeleton>
                <Skeleton className="rounded-full">
                    <p>This is the game's descripiton.</p>
                </Skeleton>
                <Skeleton className="rounded-full">
                    <p>{"Put the game image and link here: BUILD URL"}</p>
                </Skeleton>
            </div>
        );
    }
}

export default LearningPathGameContentDiv;