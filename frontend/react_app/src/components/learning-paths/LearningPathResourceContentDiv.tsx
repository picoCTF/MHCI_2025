interface LearningPathResourceContentDivProps {
    resourceGroupID: number;
}

//This assumes ResourceGroup is a set of resource types and ids
//Array prototype every resource has data and isLoading
//if (resourceGroup.every()) { [render them] } else { skeleton }

//Put useMockData here for the resource group array

const LearningPathResourceContentDiv: React.FC<LearningPathResourceContentDivProps> = ({/* resourceGroupID */}) => {

    //Use mockData on the id of the resourceGroup to get a list of resource IDs
    

    //Use mockData on each resource ID to get the resource data

    // resourceDatas = []
    // resourceLoadings = []
    // for id in resourceIds {
    // const { data, isLoading } = useMockData(resource + “id”)
    // resourceDatas.append(data)
    // resourceLoadings.append(isLoading)
    // }

    // if resourceDatas.every()
    // if !resourceLoadings.any()

    return (
        <div className="flex flex-col w-full h-full min-h-fit gap-8">
            <div className="flex flex-col text-start gap-4">
                    <h2>{"REPLACE ME"}</h2>
                    <p>{"REPLACE ME"}</p>
                    {/* {resourceList.resources.map((resource) => (
                        resource.type == "Video" ? 
                            <VideoResourceCard description={resource.description} youtubeID={resource.link}/> : 
                            <PrimerResourceCard/>
                    ))} */}
            </div>
        </div>
    );
}

export default LearningPathResourceContentDiv;