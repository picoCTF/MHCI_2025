# MHCI_2025

Work from the 2025 MHCI team: Melissa Gibney, Sanjna Subramanian, Lok Hang Hedy Hui, Megan Chai, and Zoe Mercado

Melissa Gibney wrote the majority of the code for this project, while the rest of the team designed the components. Ivan Liang contributed the Caddyfile and helped to set up integration with an internal Kepler server. The components designed by the team can be found by opening the Storybook session and navigating to the Figma tab for each component.

Please note that this repository contains future designs and ideas, so they will not be released immediately.

## TODO

### FRONTEND

- Finish the learning path flow.
    - Add in the next and prev buttons on the bottom left of the learning path detail page for navigating between modules. (In Progress)
    - ~~Add in a placeholder flag that allows us to test the challenge and learning path completion.~~
    - ~~Add in the challenge completion and learning path completion pages/modals.~~
- Fix the BadgeSVG component—it needs inner text and decoration options
- Fix the sorting in the EventCard modal—it does not show and hide events in the modal according to the selected tags.
- Add the D3 library for graphs and update the Activity, Challenge Completion, and Skill Distribution widgets on the profile page.
- Add Skeletons across the website for each page and subcomponent. Refer to the BadgesProfileDiv on the profile page and the assignment and classroom areas in the homepage.
    - Add in mock JSON files for all components as needed (look for the API_NEEDED comments)
    - Add in a Skeleton version for each component that appears on a page.
- Make the components react to the size of the screen and other device settings.
    - Refer to the Tailwind screens in the Figma design system file to see what to use for screen size breakpoints.
    - Allow light/dark mode in device settings to change whether the website uses light/dark mode colors, or have a toggle available under device settings.
- Update any HTML to use semantic tags rather than simple divs.
- Add aria-labels and other accessibility features to make the website more compatible with screen readers and keyboard navigation.
- Update the Storybook components to reflect any changes and new components.
- Link each Storybook component to its page in the Figma design system file. Some components may not have Figma counterparts.

### API INTERFACES

#### Prioritization

In terms of priority, interfaces relevant to the learning paths should take priority, with the homepage coming second and the profile being last.
We should focus on the interfaces that enable new interactions first and then circle back for ones that provide more information to the user.

#### Interfaces

##### Learning Path Interfaces

These interfaces all appear somewhere within the learning path flow.

- LearningPath (Added) - This is used in LearningPathCard, and its ID is passed to the learning-paths/Path page
- LPChallengeInfo (Added) - Used to get the number of solves and whether the user has completed a given challenge. This is specifically used in the LearningPathContentNavCard
- LearningPathList (Added) - A count and array of LearningPaths. This is used on the learning-paths/Home page.
- LPModule (Added) - A list of task IDs and the name of the module, its completion (from 0% to 100%), and other info about it. This is used in the LearningPathContentNavCard
- LPModuleList (Added) - A count and array of LPModule IDs. This is used in the LearningPathContentNavCard
- LPTask (Added) - A task's ID, name, and status, along with the type and id of its content (ex: if the content type is "C", then the contentID is for a challenge)
- PagedLPModule (Added) - A count and list of LPModules. This is used in LearningPathContentNavCard
- PagedLPTask (Added) - A count and list of LPTasks. This is used in LearningPathContentNavCard

- ResourceGroup (Added) - Used in the LearningPathContent component within the learning-paths/Path page
- Resource (Added) - Can be a Primer or Video resource. The link either links to the video on YouTube or links to the page/section in the primer.

- Challenge (Modified) - Used in the LearningPathContent component. Wiil be used in the ChallengeCards in the Gym, though that is not implemented yet.
- Walkthrough - Used to get the AI summary of the walkthrough for a challenge and a link to the official written walkthrough (or a video walkthrough).

##### Homepage Interfaces

These interfaces are all used somewhere within the homepage components.

- MemberRequest (WIP) - A request to become a part of a classroom. Will be used in the PendingMemberRequestCard and possibly in the Classrooms page.
    - accepted: boolean - whether or not the request to become a classroom member was accepted
    - id: number - The user's ID
    - pending: boolean - Whether the request is pending or not 
    - username: string

- ProfileInfo (WIP) - Brings over data from the profile and displays it to the user on the homepage. Will be used in the ProfileSummaryDiv component
    - challengesCompleted: ChallengeCompletionDivProps;
    - numActiveDays: number - The number of days the user has been active this week (0 to 7)
    - numBadges: number - The number of badges the user has earned
    - numStreakWeeks: number - The number of weeks the user has maintained their current streak
    - username: string - The user's username

- QuickLink (WIP) - A link to another location on the website, typically a page like the Gym or Primer. Used to fill in QuickLinkCards on the homepage
    - name: string
    - description: string
    - icon: string
    - id: number
    - link: string

##### Profile Interfaces

These interfaces are all used somewhere within the profile page.

- Day (WIP) - The user's activity on a given day.
    - date: string - The date the activity was recorded
    - dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 - Sunday through Saturday
    - challengeNames: string[] - The names of the challenges attempted on this day (maybe we should change this to completed so that it's easier to track?)
    - curStreak: number - The number of weeks the user has maintained their streak as of this date
- Week (WIP) - A list of 7 days of activity, with Sunday at 0 and Saturday at 6.
- Month (WIP) - A list of 28/30/31 Days worth of activity data.
- Year (WIP) - A list of 12 months worth of activity data, with an index of 0 being January and 11 being December
- Lifetime (WIP) - A list of some number of years worth of activity
- Badge (Added) - An interface used to customize badges. The Badge component itself has an issue with showing symbols at the moment, but that is irrelevant to the interface implementation
- BadgeList - A count and list of Badges. In hindsight, it may be a good idea to create a list of numbers rather than a list of Badges. That way, I could just fetch the necessary Badge info at each component rather than at the higher list level.