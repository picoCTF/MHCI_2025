import type { ProfileProps } from "../pages/Profile";

//All mock data for the profile page
export const mockProfile: ProfileProps = {
    activity: {
        numSolves: 39,
        streakLength: 3
    },
    skillDistribution: {
        numBinaryExploitationChallenges: 10,
        totalBinaryExploitChallenges: 100,
        numCryptographyChallenges: 5,
        totalCryptographyChallenges: 70,
        numForensicsChallenges: 10,
        totalForensicsChallenges: 153,
        numGeneralSkillsChallenges: 15,
        totalGeneralSkillsChallenges: 89,
        numReverseEngChallenges: 15,
        totalReverseEngChallenges: 40,
        numWebExploitChallenges: 5,
        totalWebExploitChallenges: 75
    },
    challengeCompletion: {
        numEasyChallenges: 20,
        numMediumChallenges: 30,
        numHardChallenges: 10,
        totalNumChallenges: 60
    },
    userInfo: {
        avatar: {},
        country: "United States",
        monthJoined: "August",
        username: "Username123",
        yearJoined: "2025"
    }
}