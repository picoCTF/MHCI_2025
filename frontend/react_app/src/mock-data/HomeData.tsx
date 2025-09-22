import type { HomepageProps } from "../pages/Home";

export const mockHomepage: HomepageProps = {
    assignmentsList: {
        isFocused: true,
        list: [
            {
                name: "Assignment 1",
                classroomName: "Classroom 1",
                completedChallenges: 5,
                totalChallenges: 10,
                time: {
                    days: 4,
                    hours: 3,
                    minutes: 2,
                    seconds: 1
                },
                id: 0
            },
            {
                name: "Assignment 2",
                classroomName: "Classroom 1",
                completedChallenges: 5,
                totalChallenges: 90,
                time: {
                    days: 0,
                    hours: 3,
                    minutes: 2,
                    seconds: 1
                },
                id: 1
            },
            {
                name: "Assignment 3",
                classroomName: "Classroom 2",
                completedChallenges: 3,
                totalChallenges: 7,
                time: {
                    days: 0,
                    hours: 0,
                    minutes: 2,
                    seconds: 1
                },
                id: 2
            }
        ]
    },
    classroomsList: {
        list: [
            {
                name: "Classroom 1",
                numMembers: 20,
                recentAssignments: [
                    {
                        name: "Assignment 1",
                        completedChallenges: 5,
                        totalChallenges: 7,
                        isActive: false,
                        time: {
                            days: 1,
                            hours: 5,
                            minutes: 35,
                            seconds: 10
                        },
                        dueDate: {
                            day: 23,
                            month: 7,
                            year: 2025
                        },
                        id: 0
                    },
                    {
                        name: "Assignment 2",
                        completedChallenges: 7,
                        totalChallenges: 7,
                        isActive: true,
                        time: {
                            days: 7,
                            hours: 9,
                            minutes: 35,
                            seconds: 0
                        },
                        dueDate: {
                            day: 23,
                            month: 7,
                            year: 2025
                        },
                        id: 1
                    }
                ],
                pendingMemberUsernames: [
                    {
                        username: "Username 1",
                        id: 0
                    },
                    {
                        username: "Username 2",
                        id: 1
                    },
                    {
                        username: "Username 3",
                        id: 2
                    }
                ],
                id: 0
            }
        ]
    },
    learningPathsList: {
        list: [
            {
                description: "This is the description of the learning path.",
                difficulty: {
                    Enum: 1
                },
                hasProgress: false,
                link: "/practice/learning-paths",
                name: "Learning Path 1",
                numCompletedChallenges: 0,
                numSolves: 215,
                numTotalChallenges: 14,
                id: 0
            }
        ]
    },
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
    quickLinksList: {
        list: [
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
}