import type { ProfileProps } from "../pages/Profile";

// Update Profile Mock Data
export const mockProfile: ProfileProps = {
    activityCard: {
        numSolves: 0,
        streakLength: 0
    },
    skillDistributionCard: {
        numBinaryExploitationChallenges: 0,
        totalBinaryExploitChallenges: 0,
        numCryptographyChallenges: 0,
        totalCryptographyChallenges: 0,
        numForensicsChallenges: 0,
        totalForensicsChallenges: 0,
        numGeneralSkillsChallenges: 0,
        totalGeneralSkillsChallenges: 0,
        numReverseEngChallenges: 0,
        totalReverseEngChallenges: 0,
        numWebExploitChallenges: 0,
        totalWebExploitChallenges: 0
    },
    challengeCompletionCard: {
        numEasyChallenges: 0,
        numMediumChallenges: 0,
        numHardChallenges: 0,
        totalNumChallenges: 0
    },
    badgesCard: {
        selectedBadges: []
    },
    userCard: {
        avatar: {},
        country: "United States",
        monthJoined: "August",
        username: "Username123",
        yearJoined: "2025"
    }
}