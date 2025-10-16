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
        badges: {
            results: [
            {
                shape: "pointed",
                bgColor: "green",
                strokeColor: "green",
                textColor: "green",
                icon: "flag",
                isUnlocked: true,
                id: 0,
                title: "Badge 1",
                isSelected: false
            },
            {
                shape: "rounded",
                bgColor: "yellow",
                strokeColor: "yellow",
                textColor: "yellow",
                icon: "flag",
                isUnlocked: true,
                id: 1,
                title: "Badge 2",
                isSelected: false
            },
            {
                shape: "pointed",
                bgColor: "yellow",
                strokeColor: "yellow",
                textColor: "yellow",
                icon: "flag",
                isUnlocked: true,
                id: 2,
                title: "Badge 3",
                isSelected: false
            },
            {
                shape: "rounded",
                bgColor: "green",
                strokeColor: "green",
                textColor: "green",
                icon: "flag",
                isUnlocked: true,
                id: 3,
                title: "Badge 4",
                isSelected: false
            },
            {
                shape: "rounded",
                bgColor: "purple",
                strokeColor: "purple",
                textColor: "purple",
                icon: "flag",
                isUnlocked: true,
                id: 4,
                title: "Badge 5",
                isSelected: false
            }
        ],
        count: 5
        },
        selectedBadges: {
            results: [
            {
                shape: "pointed",
                bgColor: "green",
                strokeColor: "green",
                textColor: "green",
                icon: "flag",
                isUnlocked: true,
                id: 0,
                title: "Badge 1",
                isSelected: false
            },
            {
                shape: "rounded",
                bgColor: "yellow",
                strokeColor: "yellow",
                textColor: "yellow",
                icon: "flag",
                id: 1,
                title: "Badge 2",
                isSelected: false,
                isUnlocked: false
            },
            {
                shape: "pointed",
                bgColor: "purple",
                strokeColor: "purple",
                textColor: "purple",
                icon: "flag",
                id: 2,
                title: "Badge 3",
                isSelected: false,
                isUnlocked: false
            },
            {
                shape: "rounded",
                bgColor: "green",
                strokeColor: "green",
                textColor: "green",
                icon: "flag",
                id: 3,
                title: "Badge 4",
                isSelected: false,
                isUnlocked: false
            }
        ],
        count: 4
        }
    },
    userInfo: {
        avatar: {},
        country: "United States",
        monthJoined: "August",
        username: "Username123",
        yearJoined: "2025"
    }
}