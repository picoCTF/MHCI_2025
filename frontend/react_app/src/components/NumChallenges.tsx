interface NumChallengesProps {
    numChallenges: number;
}

const NumChallenges: React.FC<NumChallengesProps> = ({ numChallenges }) => {
    return (
        <div className="flex row gap-2 text-xs">
            <p>ICON</p>
            <div className="flex row gap-1">
                <p>{numChallenges}</p>
                <p>challenges</p>
            </div>
        </div>
    );
}

export default NumChallenges;