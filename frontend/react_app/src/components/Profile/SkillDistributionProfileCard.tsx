import { Card, CardBody } from "@heroui/react";
import Icon from "../general/Icon";

export interface SkillDistributionProfileCardProps {
    
    numBinaryExploitationChallenges: number;
    totalBinaryExploitChallenges: number;

    numCryptographyChallenges: number;
    totalCryptographyChallenges: number;

    numForensicsChallenges: number;
    totalForensicsChallenges: number;

    numGeneralSkillsChallenges: number;
    totalGeneralSkillsChallenges: number;

    numReverseEngChallenges: number;
    totalReverseEngChallenges: number;

    numWebExploitChallenges: number;
    totalWebExploitChallenges: number;
}

// A hexagonal visualization of the user's progress
const SkillDistributionProfileCard: React.FC<SkillDistributionProfileCardProps> = ({ numBinaryExploitationChallenges, 
    numCryptographyChallenges, numForensicsChallenges, numGeneralSkillsChallenges, numReverseEngChallenges, numWebExploitChallenges,
    totalBinaryExploitChallenges, totalCryptographyChallenges, totalForensicsChallenges, totalGeneralSkillsChallenges,
    totalReverseEngChallenges, totalWebExploitChallenges }) => {

    // Calculate the positions needed to draw the user's progress
    const svgSize = 372;
    const armLength = svgSize/2
    const svgCenter = svgSize/2;

    const svgTopPointX = svgCenter + armLength*Math.cos(Math.PI/2);
    const svgTopPointY = svgCenter + armLength*-Math.sin(Math.PI/2);
    const svgTopRightPointX = svgCenter + armLength*Math.cos(Math.PI/6);
    const svgTopRightPointY = svgCenter + armLength*-Math.sin(Math.PI/6);
    const svgTopLeftPointX = svgCenter + armLength*Math.cos(5*Math.PI/6);
    const svgTopLeftPointY = svgCenter + armLength*-Math.sin(5*Math.PI/6);
    const svgBottomPointX = svgCenter + armLength*Math.cos(-Math.PI/2);
    const svgBottomPointY = svgCenter + armLength*-Math.sin(-Math.PI/2);
    const svgBottomRightPointX = svgCenter + armLength*Math.cos(-Math.PI/6);
    const svgBottomRightPointY = svgCenter + armLength*-Math.sin(-Math.PI/6);
    const svgBottomLeftPointX = svgCenter + armLength*Math.cos(-5*Math.PI/6);
    const svgBottomLeftPointY = svgCenter + armLength*-Math.sin(-5*Math.PI/6);

    const columnPadding = svgTopLeftPointY - 20;

    let binaryExploitArmLength = numBinaryExploitationChallenges / totalBinaryExploitChallenges * armLength;
    let binaryExploitXPos = svgCenter + binaryExploitArmLength*Math.cos(-Math.PI/6);
    let binaryExploitYPos = svgCenter + binaryExploitArmLength*-Math.sin(-Math.PI/6);

    let cryptographyArmLength = numCryptographyChallenges / totalCryptographyChallenges * armLength;
    let cryptographyXPos = svgCenter + cryptographyArmLength*Math.cos(Math.PI/6);
    let cryptographyYPos = svgCenter + cryptographyArmLength*-Math.sin(Math.PI/6);

    let forensicsArmLength = numForensicsChallenges / totalForensicsChallenges * armLength;
    let forensicsXPos = svgCenter + forensicsArmLength*Math.cos(-Math.PI/2);
    let forensicsYPos = svgCenter + forensicsArmLength*-Math.sin(-Math.PI/2);

    let generalSkillsArmLength = numGeneralSkillsChallenges / totalGeneralSkillsChallenges * armLength;
    let generalSkillsXPos = svgCenter + generalSkillsArmLength*Math.cos(-5*Math.PI/6);
    let generalSkillsYPos = svgCenter + generalSkillsArmLength*-Math.sin(-5*Math.PI/6);

    let reverseEngineeringArmLength = numReverseEngChallenges / totalReverseEngChallenges * armLength;
    let reverseEngineeringXPos = svgCenter + reverseEngineeringArmLength*Math.cos(5*Math.PI/6);
    let reverseEngineeringYPos = svgCenter + reverseEngineeringArmLength*-Math.sin(5*Math.PI/6);

    let webExploitArmLength = numWebExploitChallenges / totalWebExploitChallenges * armLength;
    let webExploitXPos = svgCenter + webExploitArmLength*Math.cos(Math.PI/2);
    let webExploitYPos = svgCenter + webExploitArmLength*-Math.sin(Math.PI/2);
    
    // Draw the hexagon in the center and place the text and progress markers
    return (
        <Card className="flex w-full h-fit bg-content1-base border-small border-default-300 p-10" radius="md" shadow="none">
            <CardBody className="flex flex-col w-full min-w-fit h-full min-h-fit p-0 m-0 gap-8">
                <h2>Skill Distribution</h2>
                <div className="flex flex-col w-full h-full min-w-fit min-h-fit justify-center items-center overflow-auto">
                    <div className="flex flex-col w-full h-fit">
                        <div className="flex flex-row w-full min-w-fit h-fit gap-1 justify-center">
                            <p>Web Exploitation</p>
                            <Icon name={"language"} size={"lg"} weight={"normal"} color={"primary"}/>
                        </div>
                        <div className="flex flex-row w-fit h-fit min-h-fit max-w-full">
                            <div style={{paddingTop: columnPadding, paddingBottom: columnPadding}} className={"flex flex-col w-fit min-w-fit justify-between items-end"}>
                                <div className="flex flex-row w-fit h-fit gap-1">
                                    <p>General Skills</p>
                                    <Icon name={"code"} size={"lg"} weight={"normal"} color={"primary"}/>
                                </div>
                                <div className="flex flex-row w-fit h-fit gap-1">
                                    <p>Reverse Engineering</p>
                                    <Icon name={"build"} size={"lg"} weight={"normal"} color={"primary"}/>
                                </div>
                            </div>
                            <svg className="flex inset-0" xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox={"0 0 " + (svgSize+2) + " " + (svgSize+2)} fill="none">
                                <polygon className="stroke-default-200" points={svgTopPointX + " " + svgTopPointY + "," + svgTopRightPointX + " " + svgTopRightPointY + "," + svgBottomRightPointX + " " + svgBottomRightPointY + "," + svgBottomPointX + " " + svgBottomPointY + "," + svgBottomLeftPointX + " " + svgBottomLeftPointY + "," + svgTopLeftPointX + " " + svgTopLeftPointY}/>
                                <path className="stroke-default-200" d={"M" + svgTopPointX + " " + svgTopPointY + " L " + svgBottomPointX + " " + svgBottomPointY}/>
                                <path className="stroke-default-200" d={"M" + svgTopLeftPointX + " " + svgTopLeftPointY + " L " + svgBottomRightPointX + " " + svgBottomRightPointY}/>
                                <path className="stroke-default-200" d={"M" + svgBottomLeftPointX + " " + svgBottomLeftPointY + " L " + svgTopRightPointX + " " + svgTopRightPointY}/>
                                <polygon className="stroke-success-500 fill-success-50/10"  points={webExploitXPos + " " + webExploitYPos + "," + cryptographyXPos + " " + cryptographyYPos + "," + binaryExploitXPos + " " + binaryExploitYPos + "," + forensicsXPos + " " + forensicsYPos + "," + generalSkillsXPos + " " + generalSkillsYPos + "," + reverseEngineeringXPos + " " + reverseEngineeringYPos}/>
                                <circle className="fill-success-500" cx={webExploitXPos} cy={webExploitYPos} r={6}/>
                                <circle className="fill-success-500" cx={cryptographyXPos} cy={cryptographyYPos} r={6} fill="green"/>
                                <circle className="fill-success-500" cx={binaryExploitXPos} cy={binaryExploitYPos} r={6} fill="green"/>
                                <circle className="fill-success-500" cx={forensicsXPos} cy={forensicsYPos} r={6} fill="green"/>
                                <circle className="fill-success-500" cx={generalSkillsXPos} cy={generalSkillsYPos} r={6} fill="green"/>
                                <circle className="fill-success-500" cx={reverseEngineeringXPos} cy={reverseEngineeringYPos} r={6} fill="green"/>
                            </svg>
                            <div style={{paddingTop: columnPadding, paddingBottom: columnPadding}} className={"flex flex-col w-fit min-w-fit h-fill justify-between items-start"}>
                                <div className="flex flex-row w-fit h-fit gap-1">
                                    <p>Cryptography</p>
                                    <Icon name={"key"} size={"lg"} weight={"normal"} color={"primary"}/>
                                </div>
                                <div className="flex flex-row w-fit h-fit gap-1">
                                    <p>Binary Exploitation</p>
                                    <Icon name={"memory"} size={"lg"} weight={"normal"} color={"primary"}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full min-w-fit h-fit gap-1 justify-center">
                            <p>Forensics</p>
                            <Icon name={"search"} size={"lg"} weight={"normal"} color={"primary"}/>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default SkillDistributionProfileCard;