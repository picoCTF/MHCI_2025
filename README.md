# MHCI_2025

Work from the 2025 MHCI team: Melissa Gibney, Sanjna Subramanian, Lok Hang Hedy Hui, Megan Chai, and Zoe Mercado

Melissa Gibney wrote the majority of the code for this project, while the rest of the team designed the components. Ivan Liang contributed the Caddyfile and helped to set up integration with an internal Kepler server. The components designed by the team can be found by opening the Storybook session and navigating to the Figma tab for each component.

Please note that this repository contains future designs and ideas, so they will not be released immediately.

## TODO

### FRONTEND

- Finish the learning path flow.
    - Add in the next and prev buttons on the bottom left of the learning path detail page for navigating between modules. (In Progress)
    - ~~Add in a placeholder flag that allows us to test the challenge and learning path completion.~~
    - Add in the ~~challenge completion~~ and learning path completion pages/modals. (In Progress)
- Fix the BadgeSVG component—it does not show the symbols that should appear inside of the badge at the moment.
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

Each bullet point is the name of an interface and a description of where it is used

- LearningPath - This is used in LearningPathCard, and its ID is passed to the learning-paths/Path page
- LPChallengeInfo - Used to get the number of solves and whether the user has completed a given challenge. This is specifically used in the LearningPathContentNavCard
- LearningPathList - A count and array of LearningPaths. This is used on the learning-paths/Home page.
- LPModule - A list of task IDs and the name of the module, its completion (from 0% to 100%), and other info about it. This is used in the LearningPathContentNavCard
- LPModuleList - A count and array of LPModule IDs. This is used in the LearningPathContentNavCard
- LPTask - A task's ID, name, and status, along with the type and id of its content (ex: if the content type is "C", then the contentID is for a challenge)
- PagedLPModule - A count and list of LPModules. This is used in LearningPathContentNavCard
- PagedLPTask - A count and list of LPTasks. This is used in LearningPathContentNavCard