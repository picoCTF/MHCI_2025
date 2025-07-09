function NumChallenges() {

    const getNumChallenges = (() => {
        return "######";
    })

    return (
        <div className="flex row gap-2 text-xs">
            <p>ICON</p>
            <div className="flex row gap-1">
                <p>{getNumChallenges()}</p>
                <p>challenges</p>
            </div>
        </div>
    );
}

export default NumChallenges;