import { Card, CardBody, CardHeader } from "@heroui/react";

interface SkillDistributionProfileCardProps {
    
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

const SkillDistributionProfileCard: React.FC<SkillDistributionProfileCardProps> = ({ numBinaryExploitationChallenges, 
    numCryptographyChallenges, numForensicsChallenges, numGeneralSkillsChallenges, numReverseEngChallenges, numWebExploitChallenges,
    totalBinaryExploitChallenges, totalCryptographyChallenges, totalForensicsChallenges, totalGeneralSkillsChallenges,
    totalReverseEngChallenges, totalWebExploitChallenges }) => {

    const armLength = 100;

    function getBinaryExploitPos(){
        return (numBinaryExploitationChallenges / totalBinaryExploitChallenges * 100) * armLength;
    }
    
    return (
        <Card className="flex w-[825px] min-w-[825px] max-w-[825px] h-fit min-h-fit max-h-fit">
            <CardHeader className="flex flex-row w-full h-fit items-start justify-between">
                <h2>Skill Distribution</h2>
            </CardHeader>
            <CardBody className="flex flex-col w-full min-w-fit h-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="404" height="404" viewBox="0 0 404 404" fill="none">
                    <circle x="-50" y="-50" stroke="#C0C0C0" strokeWidth="1"/>
                    <path opacity="0.7" d="M202.206 402.992C313.329 402.992 403.412 312.909 403.412 201.786C403.412 90.6631 313.329 0.580078 202.206 0.580078C91.0831 0.580078 1 90.6631 1 201.786C1 312.909 91.0831 402.992 202.206 402.992Z" stroke="#C0C0C0" stroke-width="1.11781"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="315" height="315" viewBox="0 0 315 315" fill="none">
                    <path opacity="0.7" d="M157.207 314.28C243.636 314.28 313.7 244.215 313.7 157.786C313.7 71.3571 243.636 1.29248 157.207 1.29248C70.7775 1.29248 0.712891 71.3571 0.712891 157.786C0.712891 244.215 70.7775 314.28 157.207 314.28Z" stroke="#D0D0D0" stroke-width="1.11781"/>
                </svg>
                        <path d="M1.20703 201.786V0.57959" stroke="#E0E0E0" stroke-width="1.11781"/>
                        <path d="M1.20703 101.786L175.586 1.18262" stroke="#E0E0E0" stroke-width="1.11781"/>
                    
                <svg xmlns="http://www.w3.org/2000/svg" width="226" height="226" viewBox="0 0 226 226" fill="none">
                    <path opacity="0.7" d="M113.207 224.568C174.942 224.568 224.988 174.522 224.988 112.787C224.988 51.0515 174.942 1.00537 113.207 1.00537C51.4719 1.00537 1.42578 51.0515 1.42578 112.787C1.42578 174.522 51.4719 224.568 113.207 224.568Z" stroke="#E0E0E0" stroke-width="1.11781"/>
                </svg>

                <p>Cryptography</p>
                <p>Forensics</p>
                <p>General Skills</p>
                <p>Reverse Engineering</p>
                <p>Web Exploitation</p>
            </CardBody>
        </Card>
    );
}

export default SkillDistributionProfileCard;