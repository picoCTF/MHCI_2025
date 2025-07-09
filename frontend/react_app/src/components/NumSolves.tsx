function NumSolves() {

    const getNumSolves = (() => {
        return "#####";
    })

    return (
        <div className="flex row gap-2 text-xs">
            <p>ICON</p>
            <p>{getNumSolves()}</p>
            <p>solves</p>
        </div>
    );
}

export default NumSolves;