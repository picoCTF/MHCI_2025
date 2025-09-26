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
    badges: {
        selectedBadges: [
            {
                shape: 1,
                bgColor: 1,
                strokeColor: 1,
                textColor: 1,
                icon: "flag",
                id: "1",
                title: "Badge 1"
            },
            {
                shape: 2,
                bgColor: 2,
                strokeColor: 2,
                textColor: 2,
                icon: "flag",
                id: "1",
                title: "Badge 2"
            },
            {
                shape: 1,
                bgColor: 3,
                strokeColor: 3,
                textColor: 3,
                icon: "flag",
                id: "1",
                title: "Badge 3"
            },
            {
                shape: 2,
                bgColor: 1,
                strokeColor: 1,
                textColor: 1,
                icon: "flag",
                id: "1",
                title: "Badge 4"
            }
        ]
    },
    userInfo: {
        avatar: {},
        country: "United States",
        monthJoined: "August",
        username: "Username123",
        yearJoined: "2025"
    }
}