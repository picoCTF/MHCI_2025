import type { HomepageProps } from "../pages/Home";

export const mockHomepage: HomepageProps = {
    banners: [{
        buttonText: "Test",
        id: "123",
        title: "This is a test",
        eventTime: "May 20th, 2026"
    }],
    learningPathsList: [
        {
            description: "This is the description of the learning path.",
            difficulty: {
                difficultyLvl: "Easy"
            },
            hasProgress: false,
            link: "/practice/learning-paths",
            name: "Learning Path 1",
            numCompletedChallenges: 0,
            numSolves: 215,
            numTotalChallenges: 14,
            id: 0,
            variant: "standard"
        },
        {
            description: "This is the description of the learning path.",
            difficulty: {
                difficultyLvl: "Easy"
            },
            hasProgress: false,
            link: "/practice/learning-paths",
            name: "Learning Path 2",
            numCompletedChallenges: 0,
            numSolves: 215,
            numTotalChallenges: 14,
            id: 1,
            variant: "compact"
        },
        {
            description: "This is the description of the learning path.",
            difficulty: {
                difficultyLvl: "Easy"
            },
            hasProgress: false,
            link: "/practice/learning-paths",
            name: "Learning Path 3",
            numCompletedChallenges: 0,
            numSolves: 215,
            numTotalChallenges: 14,
            id: 2,
            variant: "compact"
        }
    ],
    profileSummary: {
        challengesCompleted: {
            numEasyChallenges: 0,
            numMediumChallenges: 0,
            numHardChallenges: 0,
            totalNumChallenges: 0,
            showAdditionalInfo: false
        },
        numActiveDays: 4,
        numBadges: 1,
        numStreakWeeks: 2,
        username: "Username123"
    },
    quickLinksList: [
        {
            name: "Community",
            description: "This is the Community description.",
            icon: "article", // TODO - Replace this with a Discord icon
            link: "/resources/community",
            id: 0
        },
        {
            name: "External Resources",
            description: "This is the External Resources description.",
            icon: "article",
            link: "/resources/external-resources",
            id: 1
        },
        {
            name: "Learning Guides",
            description: "This is the learning guides description",
            icon: "book",
            link: "/resources/learning-guides",
            id: 2
        },
        {
            name: "Primer",
            description: "This is the primer description",
            icon: "book",
            link: "/resources/primer",
            id: 3
        },
        {
            name: "Videos",
            description: "This is the Videos description.",
            icon: "smart_display",
            link: "/resources/videos",
            id: 4
        }
    ]
}