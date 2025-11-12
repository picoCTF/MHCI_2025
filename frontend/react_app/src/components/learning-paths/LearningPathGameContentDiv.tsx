import type { Game } from "../../api_interfaces/2023_generated_interfaces/game/game";

interface LearningPathResourceContentDivProps {
    game: Game;
}

const LearningPathGameContentDiv: React.FC<LearningPathResourceContentDivProps> = ({ game }) => {
    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-8">
            <div className="flex flex-col text-start gap-4">
                <h2>{game.name}</h2>
                <p>{game.description}</p>
                <p>{"Put the game image and link here: " + game.launch_image}</p>
            </div>
        </div>
    );
}

export default LearningPathGameContentDiv;