function NumChallenges() {

    const getNumChallenges = (() => {
        return "######";
    })

    return (
        <div className="flex row gap-2 text-xs">
            <p>ICON</p>
            <p>{getNumChallenges()}</p>
            <p>challenges</p>
        </div>
    );
}

export default NumChallenges;