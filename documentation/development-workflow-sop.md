# Boilerplate Developer SOP

#### Section: Table of Contents

1. [Table of Contents](#section-1-table-of-contents)
2. [Overview](#section-2-portfolio-overview)
3. [Methodology](#section-4-methodology)
4. [Project Planning for Requirements](#section-4-project-planning-for-requirements)
5. [Release Workflow](#section-5-release-workflow)
6. [Sprint Workflows](#section-6-1-sprint-workflows)
    1. [Overview](#section-6-1-overview)
    2. [Ceremonies](#section-6-2-ceremonies)
    3. [Pre-Development Workflow](#section-6-3-pre-development-workflow)
        1. [Validation](#section-6-3-1-validation)
        2. [Elaboration](#section-6-3-2-elaboration)
        3. [Estimation](#section-6-3-3-estimation)
    4. [UX Workflow](#section-6-4-ux-workflow)
    5. [Development Workflow](#section-6-5-development-workflow)
    6. [Execute Sprint Tasks](#section-6-6-execute-sprint-tasks)
    7. [Common Task Syntax](#section-6-7-common-task-syntax)
7. [Recommended Boards and Settings](#section-7-recommended-boards-and-settings)
    1. [The Development Scrum Board](#section-7-1-the-development-scrum-board)
    2. [The Pre-Development Kanban Board](#section-7-2-the-development-scrum-board)
8. [JIRA Style Guide](#section-8-jira-style-guide)
9. [KPI Description, Collection, and Analysis](#section-10-kpi-description-collection-and-analysis)
10. [Appendices](#section-12-appendices)
    1. [Example User Story Description](#section-12-1-example-user-story-description)
    2. [PSA](#section-12-2-psa)
    3. [PSM](#section-12-3-psm)
    4. [Valid Tasks](#section-12-4-valid-tasks)
11. [Glossary](#section-13-glossary)
12. [Citations](#section-14-citations)

#### Section 2: Overview

This document provides a standard operating procedure for the creation, estimation, tracing, and completion of tasks.

Without revision, this workflow applies most directly to [CICD](https://en.wikipedia.org/w/index.php?title=CI/CD&oldid=901408478) [agile scrum software development](https://www.agilealliance.org/agile101/subway-map-to-agile-practices/) in a cloud environment with [Atlassian stack](https://www.atlassian.com/enterprise/stack). The recommended workflow leverages modified [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) and modified [Behavior Driven Development](https://en.wikipedia.org/w/index.php?title=Behavior-driven_development&oldid=901182913) (BDD).

The modified BDD approach includes creation and elaboration of functional test scenarios to be created and understood before development, but automated tests are developed at end of sprint. This Test-Last Development (TLD) approach allows for higher productivity and low defect density[[1]](#section-12-citations).

The development workflow occurs after a planning, or pre-development, workflow. The recommended planning approach leverages Progressive Elaboration and a continuous implementation of Three Amigos, in addition to the traditional planning ceremonies.

This development workflow document describes the contribution guidelines and broader development process for [Afterecon](https://github.com/Vandivier/afterecon-2.0). This process can be seen as an optional but recommended compliment to the [Ella Framework](https://github.com/Vandivier/ella-framework).

This document is also recommended as a boilerplate process document for all sorts of software projects. Simply overwrite this document section-by-section in accordance with your project's information. This document greatly expands on project contribution guidelines.

While contribution guidelines are now a standard component of any software project README, this broader development process document is intended to capture concerns relevant to a project which may be exterior to an open source repository. For example, this document includes opinionated agile process rules, UX and QA process considerations, task management considerations, and more.

This procedure is intended to hold across multiple projects. Multiple projects sharing similar conventions can be viewed as a portfolio, or line of business. As a best practice, project-specific concerns should be described within the project README. In order to keep the README small and standard, project-specific concerns can also be added to a distinct file in the `./documentation` folder.

TODO: In each section, call out differences between standard and recommended process. For example, estimating with points is standard, but the triple estimation approach is recommended.

TODO: Add clint, the custom linter, to the framework and make it extract TODOs to `documentation/todo.md` from the code, md files, and github issues page. [title]

TODO: Support atlassian stack, github, and aws because that's what everyone does, but later also implement Open HR Via GitLab w/ their open issues API.

TODO: correct section numbers and align to table of contents

#### Section 3: Project Planning for Requirements

This section describes the intitialization steps for a project, from discovery through sprint planning. Additional detail on sprint level planning, as well as information about implementation is given later in this document.

1. Identify opportunity and obtain funding
    1. Contract-oriented Process
        1. Business Development team identifies request for proposal and drafts a proposal.
        2. Proposal is accepted and project is awarded.
    2. Entrepreneurial Process
        1. Entrepreneur identifies an opportunity.
        2. Entrepreneur obtains funding.
    3. Corporate Process
        1. Corporate entrepreneur identifies an opportunity.
        2. Corporate entrepreneur obtains budget allocation from authorized individuals.
2. Regroup and Prebacklog
    1. The implementation team is born. This team includes a critical mass of founding business, design, quality assurance, and development resources.
    2. The founding implementation team receives an initial knowledge share from the opportunity discovery team.
    3. The founding implementation team essentially begins refinement, but initial refinement is typically unusually large.
    4. An initial list of requirements is collected by the implementation team. This list is called a prebacklog and it is not expected to be refined, but it will serve as a starting point for visioning.
    5. For contract-oriented software development, it is recommended that the implementation team and their client sign a Project Scope Agreement (PSA) as an output of the first iterative visioning.
        1. Iterative visioning is discussed in section 3.3.
        2. Visioning may only once for some short-term contract-oriented projects.
        3. A Project Scope Agreement protects the vendor from scope creep. Changes to the PSA are fully at the discretion of the vendor and may involve contract modification, an exchange of scope, a change in timeline, or the creation of a new contract.
        4. Changes to the Project Scope Agreement require the signature of a formal Project Scope Modification (PSM).
        5. See Appendix A for a draft Project Scope Agreement and an Appendix B for a draft Project Scope Modification.
        6. A similar process can be conducted under non-contract development work, but the usual practice is that incentives are tied to a manager's performance bonus instead of a client contract.
3. Iterative Visioning
    1. Iterative visioning is the first iterative step. Prior steps are initialization steps.
    2. Iterative visioning is sometimes called [multi-sprint planning](https://www.sciencedirect.com/science/article/pii/S0164121213001039), program increment planning, innovation planning, or release planning.
        1. I will use the term [innovation planning](https://www.scaledagileframework.com/innovation-and-planning-iteration/), which is common in projects emphasizing [design thinking](https://www.ideou.com/blogs/inspiration/what-is-design-thinking) or the scaled agile framework.
        2. Do not feel like you are required to follow those other processes, but they should be compatible with the present document.
        3. I encourage scaled agile on teams of more than two scrum teams, where I also recommend following the [two-pizza rule](https://www.cnbc.com/2018/04/30/jeff-bezos-2-pizza-rule-can-help-you-hold-more-productive-meetings.html) to size a scrum team.
    3. Experienced designers will help you set up an effective design visioning session or workshop. It's a common design event. [Here's one](https://medium.com/thumbtack-design/a-practical-guide-to-design-visioning-e16a45967656) of a billion articles on the topic.
    4. This event should validate and invalidate items in the prebacklog as valuable design goals, epics, or user stories from the customer point of view.
    5. This event should expand the prebacklog to include missing items of actual or potential value.
    6. Prebacklog items should be grouped into logically related feature groups. These are now considered agile epics.
    7. Epics in the prebacklog should be t-shirt sized for both customer value and implementation difficulty. Value divided by implementation cost equals adjusted value.
    8. Epics should be prioritized by adjusted value, and some threshold cutoff will need to be imposed account for what can be done within the program increment. That is, within the set of sprints the vision is meant to cover. A recommended program increment length is a quarter of a year.
4. Sprint Planning
    1. Sprint planning narrowly refers to a single event, meeting, or ceremony which occurs once per sprint, but it more broadly refers to a collection of related tasks including grooming, planning, and elaboration.
    2. Tickets or issues are a generic term which includes epics, stories, and tasks.
    3. Refinement and clarification are synonyms for grooming. [Grooming](https://www.agilealliance.org/glossary/backlog-grooming/) is a continuous process of revising user story content, changing point estimates, changing backlog item prioritization, and changing other issue details as new learning are acquired by team members.
    4. Elaboration is also often used as a synonym for grooming, but I mean something slightly different and more technical when I talk about Progressive Elaboration in this document. For the purposes of this document, elaboration begins when a developer is assigned to a ticket, but before the ticket is ready for development. That is, the elaboration process is the process of a specific, assigned developer clarifying their own ticket with the ticket's product owner.
    5. Elaboration is critical for confident development. When a product owner creates the user story to their own satisfaction, it does not follow that the team knows how to implement that story. Even when the team as a whole has agreed on a point estimate for the story, it still does not follow that the assigned developer is ready to implement the story. Only when the assigned developer is ready to implement the story can the story be considered fully elaborated.
    6. Point estimates should be given by the team, but time estimates should be given by the assigned developer. Point estimates should be estimated relative to a hypothetical average-skilled developer, not relative to any specific individual. When specific individuals accomplish more points in a shorter time, this can therefore be interpreted as evidence of high skill.
    7. While sprint planning is sometimes used to assign developers to tickets, I don't recommend that process here.
        1. Instead, tickets should be assigned for elaboration a sprint ahead of time, so that hourly estimates can be ready for sprint planning and a more accurate capacity planning conversation can take place.
        2. The developer who is assigned to elaborate a story does not need to be the developer to implement that story, although obviously that makes things easier. If the developer needs to hand a story off then the receiving developer may need to elaborate that story again for their own confidence.

#### Section 5.1: Release Workflow

The recommended workflow is a CI/CD pattern with 5 environments. The environments are:
1 - LOCAL. On each developer's local machine, these environments are for development.
2 - DEV. On a remote server, this environment is for developers to initially interact with deployed code.
3 - QA. On a remote server, this environment is for product owners and testers to interact with semi-stable code, and for sprint demos.
4 - PRE. On a prod-like remote server, this environment is for testing highly stable code in prod-like conditions prior to a production deployment, and it can act as a public failover.
5 - PROD. On a prod-like remote server, this environment is the preferred location for end user access.

The local environment should be able to point to services from any other environment, and these combinations can be called local-dev, local-qa, and so on. LOCAL-LOCAL should indicate a local environment using a local mock server which is immune to third party disruption.

Following Gitflow, the `master` branch of the project repository should reflect PROD. Development should occur in feature branches on a fork of the project repository. Pull requests should be executed from the fork feature branch to the upstream `dev` branch. The `dev` branch should be continuously and instantly deployed to the DEV environment. The `dev` branch should be continuously deployed to the QA environment on a nightly basis, with push-button additional deployments as needed.

Whenever a code revision has been approved by product owners in QA, it should be merged into `master`. This should be continuously deployed to PRE. Automated and manual testing should be redone in this prod-like environment, and push-button deployment to PROD can be executed.

Verions will be named as follows:

    [Major Version].[Minor Version].[Patch Version]

Because Afterecon is a full-stack monorepo and includes an API, [semver](https://semver.org/) is used to communicate whether new versions are backwards-compatible.

#### Section 6.1: Sprint Workflows

Design, business, elaboration, development, and testing tasks all occur concurrently, but they also need to allow individuals driving different workstreams to cross over, hand-off, or facilitate other work streams in real time. This is facilitated by clearly defining processes in this sprint workflows section.

#### Section 6.2: Sprint Ceremonies

Sprint demo, sprint retrospective, and sprint planning occur on the first day of each sprint, which is every other Wednesday. Because the sprint demo occurs on Wednesday, acceptance testing for the sprint is intended to conclude on Monday, allowing Tuesday in case emergency demo prep is needed. Stories should be submitted for acceptance by Thursday COB so that testers and product owners can provide feedback by Friday COB, allowing through Monday to remediate findings, otherwise stories will be accepted with defect or failed and pushed to the next sprint. The retro is held before planning so that lessons learned can be incorporated into planning.

##### Section 6.3: Pre-Development Workflow

##### Section 6.3.1: Validation

Every task originates as an idea, which may or may not ever be a requirement. This potential requirement should be refined and accepted or rejected by the business and development teams. Traceability at this level is important because a record of rejected requirements is as informative as a record of accepted requirements for the purpose of understanding by current and future business analysts, developers, testers, and others.

The Pre-Development Workflow begins in one of two ways:

1. UX Handoff
2. Business Analyst Idea Request

Regardless of the origination workflow, ideas will be tracked as JIRA tickets in the same workflow:

1. ELAB - TODO
    1. reporter assigned
    2. BA: technical owner assigned
2. ELAB - IN PROGRESS
    1. BA: met with reporter
    2. BA: update title and tags for convention
    3. BA: draft AC
    4. BA: validate AC as required
    5. BA: update AC
    6. BA: dependencies recorded
    7. BA: attend three amigos
    8. TEST: attend three amigos
    9. DEV: attend three amigos
    10. TEST: draft scenarios
    11. DEV: understand AC
    12. UX: validate AC and scenarios
3. ELAB - DONE

The difference in origination workflow will simply alter the subtasks associated with the idea. ELAB is short for elaboration, which is also called refinement or clarification in Agile vocabulary. The elaboration process is synonymous with the Pre-Development Workflow.

From a JIRA perspective, the Pre-Development Workflow is part of the same physical workflow as the development workflow. It also belongs to the same project as the development project, but it is tracked on a Kanban board which is not pinned to iteration. It relates to the UX workflow, but it is seperate. Because the development and predevelopment workflows share a single physical workflow in JIRA, they cannot have the same workflow status or column titles. As a result, we use the "ELAB -" prefix.

UX Handoff is described under the UX workflow. Once UX Handoff completes, an idea is already a validated requirement ready for elaboration by a developer. See [Section 6.3.2: Elaboration](#section-6-3-2-elaboration), the next section, for the details of that process.

In the alternate Business Analyst Idea Request process, validation is required. The validation process is described as follows:

1. Task: Idea Generated
    1. It’s worth tracing who came up with the idea for reference. This subtask should be marked at 0 hours.
2. Task: Ticket Created
    1. SBA must translate the idea into a JIRA ticket, written to convention, except that scenarios do not need to be described during validation.
    2. This ticket is placed in the Pre-Dev backlog in TODO. It should be moved to In Progress when the client is contacted for validation.
    3. SBA adds a comment to the JIRA ticket stating an initial opinion about whether the requirement is in PSA scope.
3. Task: Decision Obtained
    1. Time spent communicating with the client on the ticket is added to this task, as well as any time spent updating the description and so on.
    2. This task is complete when the client decides to accept or reject the requirement.
4. Task: PSM Completed
    1. This optional task must be completed before elaboration begins, in the event that the development team deems the requirement outside PSA.

The Business Analyst is the technical owner for any ticket in Pre-Dev, or on the Pre-Dev JIRA board. Every task originates as an idea. An idea becomes a requirement, or not, at the end of the validation process. For many tickets, validation occurs at project, release, or sprint planning. Other ideas may spring up spontaneously and must be continuously maintained by the business analysis team.

Traceability at this level is important because a record of rejected requirements is as informative as a record of accepted requirements for current and future business analysts, developers, testers, and others.
An example scenario of a spontaneous idea would be that a tester encounters an unexpected result and finds that the client-required behavior is not specified anywhere. The tester should communicate their expectation or idea to a senior business analyst (SBA). The SBA maintains knowledge of the existing requirements and may inform the idea creator that the idea is already addressed elsewhere. If that is not the case, the ticket should be created and worked according to the following process:

##### Section 6.3.2: Elaboration

In the first week of the sprint, developers must develop. This means that the developer must understand the scenarios and the requirement before Sprint Day 1. For the scenarios to be written, the tester must understand the requirement. This process is called elaboration.
Elaboration for Sprint 1 occurs in Sprint 0. QA and BA will elaborate in week 1 of Sprint 0 in order to produce scenarios. In week 2 of Sprint 0 the developer will coordinate mainly with the BA to understand the requirement because QA will be executing manual tests during that week, but QA will still make time for a 30-minute Three Amigos Session. The overall process follows these steps:

1. Task: QA Draft Scenarios
2. Task: BA Validate Scenarios
3. Task: QA Attend Three Amigos
4. Task: BA Attend Three Amigos
5. Task: Developer Attend Three Amigos

##### Section 6.3.3: Estimation

A 3+ Estimation procedure is recommended in order to obtain eventual consistency and high confidence in hourly scheduling. 3+ Estimation involves estimating every ticket at project planning time in terms of points, then re-estimating at sprint planning time. During sprint planning the ticket receives a point estimate and an hourly estimate. An hourly estimate for a ticket is simply the sum of the task estimates, and it thereby includes elaboration, testing, and development time. Optionally, additional estimates may be conducted. For example, re-estimation can occur during release planning, hourly estimates can be attempted at project planning, or T-Shirt Sizing can be used at project planning before refining into points.

Points are not expected to initially correlate with hourly estimates, but as the project reaches a development rhythm there is likely to arise a statistically significant correlation between point and estimate hours. The correlation may be nonlinear and heteroskedastic, and it is also unlikely to be generalizable to other projects, but it is likely to be significantly stable in the context of a single project, and therefore becomes a strong project capacity and schedule validation measure.
Points are not expected to initially correlate with hourly estimates, but developers should approach estimation with a common expectation on the meaning of a point. For that reason, the following initial heuristics are suggested:

1. 1 point is an item which is already fixed or can be confidently fixed in under an hour.
2. 3 points is roughly a day of work.
3. 5 points is roughly 2-3 days of work.
4. 8 points is roughly a week of work.
5. 13 points or more cannot be completed in-sprint.

Confident estimation is assisted by the collection of important Key Performance Indicators (KPIs) and non-performance variable data, in conjunction with proper statistical analysis. Such analysis can be expensive in terms of time, and it is not always the case that the time investment is profitable, but it can be a great help to have such analysis available as a tool on an as-needed basis. Moreover, some metrics have cross-project validity and therefore may provide for superior cross-project productivity and reliable estimation over time.
Estimation by each developer should proceed in a pseudonymous fashion, such that no developer knows the estimate of any other developer until the full set of estimates is submitted, but that a manager can access individual estimates with identification. This way it’s possible to eventually detect which developers tend to over or under estimate tickets in general or of particular kind, and efficiently allocate tickets to developers skilled in that area. This approach also avoids peer effects on estimation.

Estimation should be completed both in terms of points and separately in terms of hours. A software tool developed by Lizard Brain exists which fills these needs[[2]](#section-12-citations). This tool also integrates as a JIRA plugin. This plugin is recommended for use during estimation.

1. Pre-Development Workflow
1. Triple estimation
1. Definition of a point and eventual consistency
1. Recommended KPIs
1. UX Workflow
1. Development Workflow

##### Section 6.4: UX Workflow

The UX Team is considered a distinct project in JIRA, with their own Kanban board that is not pinned to development sprint rhythm.

UX has the following workflow steps:

1. TODO
    1. Clarify and document requirement
2. In UX
    1. Generate - Wires
    2. Internal Design Review - Wires
    3. Post-IDR Revisioning - Wires
    4. Sent to Client - Wires
    5. Client Revisioning - Wires
    6. Approved - Wires
3. In Viz
    1. Generate - Comps
4. Review
    1. Internal Design Review - Comps
    2. Post-IDR Revisioning - Comps
    3. Sent to Client - Comps
    4. Client Revisioning - Comps
5. Approved
    1. Approved - Comps
    2. Draft Removed from Title
    3. UX Designer Assigned Ticket to BA
6. Done

Expectations:

1. UX will seek to understand the requirement in collaboration with the business team.
    1. A requirement statement will be added to the relevant JIRA ticket
2. Wires and comps will be reviewed at an Internal Design Review between the UX Team and the development team prior to client presentation.
    1. This meeting will take place while the ticket is in the Review step of the workflow.
    2. Developers, business analysts, and QA can ask questions and express concerns with technical feasibility at the Internal Design Review.
3. Understanding the screen and its functionality is expected from all participants after this design review conversation.
4. The ideal process is as follows:
    1. UX generates wires, completes the Internal Design Review, then receives government approval;
    2. Viz generates comps from approved wires, completes the Internal Design Review, then receives government approval;
    3. The wires/comps are ready for development.
5. When comps are ready, UX will work with a business analyst to initialize a development ticket.
    1. The development ticket will go through the pre-development elaboration process
    2. UX may specify a preferred UX contact for the ticket.
    3. When elaboration is completed, UX will have a chance to review the finalized AC, QA scenarios, and planned implementation

There is also an animation handoff process for animations which uses CodePen and a maintained storybook of animations. [Storybook](https://storybook.js.org/docs/guides/guide-angular/) utilization for components is also recommended.

##### Section 6.5: Development Workflow

This section deals with the whole requirement lifecycle as an in-iteration process. An example scenario would be that a tester encounters an unexpected result and finds that the actual expectation is not documented anywhere, so the tester’s expectation becomes a suggestion for a new requirement. The next section deals with a special case of requirements which are defined at the beginning of the project. Certain task validation steps documented in this section will be taken care of at the start of the project for the special case.

After a ticket is considered Ready, or Done on the Pre-Development Kanban board, it is eligible to be pulled into sprint or planned. Development work can start while the ticket is in the backlog if we don't want to commit to delivery in the current sprint, but in that case it is technically still in elaboration.

When a ticket is transitioned to sprint development, it is moved into TODO on the sprint board. The sprint board has three columns: TODO, In Progress, and Done.

A typical set of tasks might be as follows:

1.  BIZ: update version field
2.  UI-DEV: update component style
3.  UI-DEV: update component logic
4.  BE-DEV: update database
5.  BE-DEV: create service
6.  BE-DEV: create controller
7.  UI-DEV: create pull request
8.  UI-DEV: execute peer review
9.  UI-DEV: verify component
10. UI-DEV: create unit test
11. TEST: execute test scenarios

For example, a UI developer might complete a style change, send it to QA, and QA return the ticket with additional requirements. Now suppose the UI developer thinks they fixed it but it gets returned again. On the third time it gets passed. The ticket should have at least:

1. UI-DEV: update template and style
2. FIX: UI-DEV: update template and style
3. FIX: UI-DEV: update template and style
4. TEST: execute functional test

The issue lifecycle consists of several steps:

1.  Origination
2.  Original handoff to UX
3.  UX workflow
4.  UX handoff to Development
5.  Development elaboration
6.  Development workflow
7.  Development handoff to QA
8.  QA workflow
9.  Closing out
10. Promotion through PROD

The following describes the convention for QA handoff:
the test team is notified when the developer adds the following comment to the issue:
[~TEST USERNAME] Ready for testing.

For example,
[~james.dean] Ready for testing.

You can use the @ character to find the person’s name and JIRA will update with the [~TEST USERNAME] piece. The whole test team should be notified when an issue is ready for testing, not just the one tester assigned to execute the test cases.

Visual QA is also important for issues which involve design. This process can begin and execute simultaneous with manual functional testing. When the test team is notified Ready for testing, member(s) of UX responsible for Visual QA should be tagged along with other testers.

Commenting to individuals that an item is ready for testing results in an uninformative hipchat message and a comment which will likely not be ready, but it also creates an informative email notification and an entry on the In Test Dashboard.

Once the tester has seen the request they should acknowledge like the following example:
[~john.vandivier] Acknowledged. Until and unless an assigned tester acknowledges, the hand off is not complete and it is the responsibility of the developer to continue following up.

It is important to use the exact string `Ready for testing.` because it is used in the automated query to dashboard these issues. The dashboard should be consulted daily by UX and the test team for status. While an item is In Test, the test team is responsible for owning the issue and communicating any changes in status.

An example of an important change in status is when an issue doesn't pass and the developer needs to execute additional work. The test team needs to notify the developer of that and then the developer will comment with `Ready for retest.` to notify the test team that it is ready to be tested again.

While it's not required, one beneficial practice some testers are using is to create an Outlook Rule which sends emails containing the text 'ready for retest' to a seperate folder. This increases visibility of which items are ready for retest.

The standard practice for notifying a developer that additional work is needed is to create a subtask with the prefix `BUG` and to assign the developer to the ticket. This method of notification is effective because the developer should be referring to their open subtasks daily before stand up. Other options including comments, hipchat messages, email, and personal discussion are welcome additional steps but they do not replace the standard practice.

NOTE: The standard syntax using `BUG` does not comply with Section 6.7: Common Task Syntax. In the future this SOP will harmonize these two processes by accepting the `BUG` naming convention or by changing this section to use approved syntax. For now this exception to 6.7 is allowed.

Another important example of communication which the tester needs to own is communication from the UX team regarding visual QA. The results of visual QA should be reported to the lead tester, and it is the lead tester's responsibility to ensure the developer is made aware if additional work is required.

##### Section 6.6: Execute Sprint Tasks

Sprints contain a collection of regular and ad hoc meetings, ceremonies, and administrative tasks. Instead of committing these to memory or tracking via email, these tasks should be tracked as any other tasks. They can be attributed to a special user story which should exist for each sprint. That story is called "Execute Sprint." Some relevant tasks include:

1. BIZ: verify user stories
2. BIZ: execute retrospective
3. BIZ: update documentation
4. BIZ: execute demo
5. BIZ: execute planning
6. BIZ: execute ad hoc meeting\*
7. BIZ: execute ad hoc meeting\*

\*Multiple entries for ad hoc meeting may exist if there are different meetings. The description field can be used to include details on the differences. The hours worked should reflect total labor time, which means the hours the meeting took multiplied by the number of participants. Those factors can be independently specified in the description as well.

##### Section 6.7: Common Task Syntax

The use of common tasks facilitates estimation, productivity management, implementation expectations, and task pattern identification.

Common tasks can be maintained in a list from which workers can draw. A similar approach is to have a standard syntax with common components. The latter is discussed here.

The common syntax is: `[skillset]-[task type]: [modifier] [verb] [noun]`.

The `[skillset]-[task type]:` portion is called the prefix.

The `-[task type]:` portion of the prefix is optional for skillsets other than BE and UI. It's required for those.

Example task names include:

BE-DEV: Update Service
UI-DEV: Create Component
BIZ: Clarify AC
TEST: Execute Test Cases
TEST-ELAB: Clarify AC
TEST-DEV: Create Automated Tests

Valid modifiers:

1. Fix
2. Support

Valid nouns include:

1.  AC
2.  Animation
3.  Component
4.  Component Logic
5.  Component Structure
6.  Component Style
7.  Controller
8.  Database
9.  Deployment Pipeline
10. Documentation
11. Automated Tests
12. Environment Configuration
13. Mock Data
14. Model
15. Peer Review
16. Service
17. Test Cases
18. Unit Tests
19. View
20. Visual QA
21. 508 compliance
22. WCAG compliance

Valid skillsets include:

1. BE
2. BIZ
3. INFRA
4. TEST
5. UI
6. UX

Valid task types include:

1. ELAB
2. DEV

Valid verbs include:

1. Clarify
2. Create
3. Delete
4. Execute
5. Read
6. Support
7. Update
8. Verify

The total number of possible tasks is capped at the product of the number of each element in the syntax, but in reality the total number of valid tasks is smaller as many combinations produce nonsense. For example, `TEST: execute controller` doesn't make sense in multiple ways. In addition, it's valid, in fact usual, not to use a modifier.

New nouns, prefixes, and verbs can be created whenever deemed valuable. To decide if a new task is valuable, consider whether it communicates any meaningful planning information. Two examples of meaningful planning information include skill data and time data. If two tasks require different skill sets or lenths of time, it may be useful to identify them using different descriptions.

For example, suppose the team begins creating and frequently updating technical whitepapers. They also begin creating and frequently updating user documentation. Notice that technical whitepapers are mainly written by developers while user documentation is written by business analysts, so for planning purposes it might not be practical to have one labor resource executing both kinds of tasks. Moreover, these tasks may take different lengths of time. As a result, if this were to happen, the team should consider approving two new nouns:

1. technical documentation
2. user documentation

Instead of simply lumping both tasks under `documentation`.

Here is a more full set of the reasons to create a distinct task:

1. Estimate with confidence
2. Identify skillset needed
3. Faciliate implementation planning
4. Communicate a status
5. Reduce cognitive load: Even if a task is minor and quick, identifying it as a distinct task prevents a worker from forgetting to complete it.

One reason you may not want to create a new task is because there is a certain volume of tasks needed to create a statistical estimate with confidence. If a task is likely not to be repeated many times it may not be useful to identify it as a distinct task.

2/1/18 update: for consistency, every word in the subtask name should have it's first letter capitalize, and the whole prefix should be capitalized.

This is reflected in the example task above. This is in case we want to use, intentionally or by accident, case-sensitive queries.

#### Section 7: Recommended Boards and Settings

A single sprint board is recommended to capture design, business, and development work for each sprint. TODO, In Progress, and Done are the only columns required on the board. Any to any workflow state enablement is recommended. Tracking sprint progress at the task level enables higher accuracy, and tasks can also exist with the same simple column and workflow organization called out for user stories.

Epics can also use the same simple column and workflow schema, although they progress outside of sprints. As a result, a single Kanban board is recommended to capture epic progress.

Because the sprint board focuses on the work for the current sprint, elaboration tasks for out-of-sprint issues will exist within the sprint.

##### Section 7.1: Pre-Development States

1. Definition of NOT READY TO GROOM
    1. Someone has an idea, but it has no associated JIRA issue.
1. Definition of READY TO GROOM
    1. Child of the TODO column.
    2. Someone has reported an idea to the PO/BA.
    3. The issue is not yet READY TO ELABORATE
1. Definition of READY TO ELABORATE
    1. Child of the TODO column.
    2. The PO/BA has validated that the idea is not elsewhere addressed.
    3. The PO/BA has validated that the idea is a requirement.
    4. The PO/BA has written the tags, title, AC, scenarios, and other ticket components to convention.
    5. The PO/BA has added in the comments an opinion that the idea is a requirement.
    6. The PO/BA has added a task capturing the previously stated items.
1. Definition of READY TO DEVELOP
    1. Child of the TODO column
    2. The ticket has been prioritized.
    3. Blocking dependencies have been cleared.
    4. The ticket has been understood and estimated by developers. One of the estimating developers has been assigned as the tentative developer-owner. Note: Changing the developer-owner of a requirement may result in an estimate change.
1. Definition of NO FIX
    1. Child of the Done column.
    2. The client has expressed that they do not demand the described idea, or
    3. The team has identified the idea as out of scope and the client has expressed unwillingness to modify existing prioritization, or
    4. The team had a late identification of the requirement as duplicative, OBE, or otherwise invalid.

##### Section 7.2: Development S

1. Definition of TODO
    1. Child of the TODO column
    2. The ticket meets the status of Will Fix for the Pre-Development Board.
    3. The ticket has been assigned to one or more persons in each of the following roles: developer, tester, and business analyst.
    4. All assigned individuals understand the requirement.
    5. One developer has been identified as the developer-owner who is responsible for the overall timely delivery of the requirement.
2. Definition of Done
    1. Child of the Done column
    2. The ticket has been made available for testing in the TEST environment.
    3. The ticket has passed manual and automated functional testing in the TEST environment.
    4. The ticket has passed peer review and static analysis.
    5. The ticket has had all subtasks marked as complete and times have been entered.
    6. A ticket on the deployment board has been created and referenced in the description.
    7. The ticket has no errors when it is checked for accessiblity.

#### Section 8: JIRA Style Guide

TODO: talk about HR as Code and Performance Analysis as Code using JIRA and Github queries.

JIRA style, or conventions, are equally informed by existing process norms, client expectations, and idealized process. Over time, with additional lessons learned, these are expected to change in the direction of idealized process.

User Stories should be described according to principles of Be

1. The SOP should describe any special syntactical requirements for naming JIRA tickets, writing the description, the AC, or any other miscellaneous rules which are recommended.
2. The SOP should identify acceptable task names.
3. What does a story look like, what goes in a story, what constitutes a groomed story. What is an epic vs a story? What is the definition of ready and the definition of done.
4. Test-Last Development (TLD) and Behavior Driven Development (BDD)

Conventions fall into 4 groups:

1. Title Syntax
    1. Technical, Scaffolding, or Integration
2. Description
    1. Follow example in appendix
3. Task Names
    1. Select from approved list in appendix
4. Tags
    1. ux, business, technical, mocked, integration, front-end, back-end, infrastructure, and any other useful qualitative information which might correlate with the actual hours metric

#### Section 9: KPI Description, Collection, and Analysis

TODO:

1. What can be automatically captured in JIRA
2. What must be manually captured outside JIRA
3. What must be visibility-restricted as in an ISR
4. What can Sonar, Node-oriented automated testing, bitbucket, and git provide?

It is expected that full and regular data collection is not feasible. Several of these measures, however, can be automatically captured and reported.
At the project level, the following metrics are recommended:

1. Total Capacity
2. Total Requirement Estimate
3. Database, Back-End Language, Front-End Language, and related technologies, as tags or regression Booleans.
4. Client
5. Prime Status
6. Revenue
7. Cost
8. Number of Workers
9. Number of Developers by Skill

At the developer level, the following metrics are recommended:

1. Average Point Estimate
2. Average Hourly Estimate
3. Average Actual Hours
4. Average Actual Hours by Tag
5. Points per sprint
6. Hours per sprint
7. Hours per point
8. Defect Density
9. Rejected Pull Requests
10. Lines of Code
11. Remote Status

At the ticket level, the following metrics are recommended for collection:

1. Estimated points
2. Estimated hours
3. Actual hours
4. Epic
5. Tags
6. Developer-Owner Name

At the task level, the following metrics are recommended:

1. Task Text
2. Estimated Hours
3. Actual Hours

#### Section 12: Appendices

##### Section 12.1: Example User Story Description

Scenario/Specification based on [this Wikipedia entry](https://en.wikipedia.org/w/index.php?title=Behavior-driven_development&oldid=821085959#Behavioral_specifications).

Abstract, high level description:

    Acceptance Criteria:
    [Acceptance Criteria]

    Scenario(s)
    [Scenario(s)]

    Other Information
    [Other Information]

Acceptance Criteria Template:

    As a [role]
    I would like to [functionality]
    So that I can [value statement]

Scenario Template, also called Specification Template:

    Scenario [#]
    Given [condition 1]
    And [condition 2, optional line]
    ...
    And [condition n, optional line]
    When [trigger]
    Then [expectation 1]
    And [expectation 2, optional line]
    ...
    And [expectation n, optional line]

Other information contains things like "Here is the URL for the wireframes."

Concrete example of a complete description:

    [Story Title, in the Title field not Description] Scaffolding: Account Holder withdraws cash

    Acceptance Criteria
    As an Account Holder
    I want to withdraw cash from an ATM
    So that I can get money when the bank is closed

    Scenario(s)
    Scenario 1: Account has sufficient funds
    Given the account balance is \$100
    And the card is valid
    And the machine contains enough money
    When the Account Holder requests \$20
    Then the ATM should dispense \$20
    And the account balance should be \$80
    And the card should be returned

    Scenario 2: Account has insufficient funds
    Given the account balance is \$10
    And the card is valid
    And the machine contains enough money
    When the Account Holder requests \$20
    Then the ATM should not dispense any money
    And the ATM should say there are insufficient funds
    And the account balance should be \$20
    And the card should be returned

    Other Information:
    The link to the wireframe for the withdrawal form is at example.com.

##### Section 12.2: PSA

TODO

##### Section 12.3: PSM

TODO

##### Section 12.4: Valid Tasks

TODO

#### Section 13: Glossary

1. elaboration: The process of defining, validating, prioritizing, clarifying, assigning, estimating, and planning for the implementation of requirements. It may include some prototyping development work, but it's process which is distinct from the main development process, and it generally should occur before the start of a development sprint.
2. three amigos: A group of a business analyst, a developer, and a test team representative. The four amigos also include a UX team member.
3. validation: Determining whether a requirement is desired by the client. Closely related to prioritization, which

#### Section 14: Citations

1. Thomas, Christopher M. (2014) "An Overview of the Current State of the Test-First vs. Test-Last Debate," Scholarly Horizons: University of Minnesota, Morris Undergraduate Journal: Vol. 1: Iss. 2, Article 2. Available at: http://digitalcommons.morris.umn.edu/horizons/vol1/iss2/2
2. https://marketplace.atlassian.com/plugins/agile.estimation.3.0_private/cloud/overview
3. Our conventions added to North, Dan (11 February 2007). "What's in a Story?". Dan North. Retrieved 12 August 2012. https://dannorth.net/whats-in-a-story/

#### Section 18: Some Style Guidelines

18.1 Rule Meta Information

    1 - For the purposes of these rules, a `component` is any entity contained under `ui/src/app`.
    2 - In contrast to 18.1.1, an `Angular component` is the specific entity associated with the Angular `@Component` syntax.
    3 - `The app component`, in constrast with `an app component` refers ambiguously to the top-level Angular component located in `ui/src/app`, as well as the associated app module and app routing module files which are siblings within the same folder. This top-level component may also be called the root component or the top-level component.
    4 - In contrast to 18.1.1 - 18.1.3, a non-Angular component refers to the loose usage of the term in programming. For example, the entire UI may be considered a single component of the larger application architecture, a css file may be considered one component of our application, and business models may be considered a component of the server-side MVC implementation.
    5 - A solution is significantly, importantly, or meaningfully preferred when benefit and cost information is available and it generates marginal value in excess of its marginal cost.
    5 - When benefit and cost information is not available, the 10% rule is used as a heuristic. As an example, suppose we know faster solutions tend to be preferred, but we don't know the relevant marginal value to use when comparing against a solution which would slow down the application. Ceteris paribus, we will consider solutions which result in a slow down of up to 10%.

18.2 - Project Organized Properly

    1 - The app component is the only component which should be directly contained in the `/app` folder without an intermediary component wrapping folder.
    2 - The app component is the only component which should not be neither bookend-named nor app-namespaced.
    3 - Components should not be nested. Every component folder should be a sibling of the app component.

18.3 - Components Generated Properly

    1 - Angular components must be generated using Angular CLI.
    2 - When a new component is generated, the pure generated code should be immediately commited as an initial commit.
    3 - By convention, only Angular components and Angular services should be generated. Pipes, filters, and other constructs are not preferred for simplicity.
    4 - Components should be generated using bookend naming, app namespacing, and using a wrapper folder. An example of a component generated this way would be `ng g c ae2-c-table --flat=false`. Using `ae2-component-table` is encouraged if the more concise syntax is confusing to developers.
    5 - Component grouping by feature should be accomplished by naming, not nesting. For example `ae2-c-table-row` is appropriate to indicate association with `ae2-c-table`. This way when the files are sorted by name they will be near each other.

18.4 - Prefer Customer-Centered Solutions

    1 - All pages should load in under 2 seconds, and faster implementations are preferred when the difference is meaningful.
    2 - Pages should be SEO friendly. [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights) and Chrome DevTools Audits are great tools in this regard.
    3 - Pages should be accessible. A recommended tool to this end is the [axe tool](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US).

18.5 - Prefer Developer-Enabling Solutions

    1 - Optimizing code and process for developers is a secondary goal which enables high velocity in service of the primary goal of enabling customers.
    2 - Similar features should be implemented according to existing patterns in order to facilitate developer intuition and programmatic code manipulation.
    3 - Follow DRY and YAGNI architectural principles. Guard against overarchitecting as much as under-architecting. An example of using YAGNI to guard against overengineering is by declaring a function in a controller, and only moving to a service once other components need access instead of creating a service by default.
    4 - Prefer custom state and http request management services which wrap browser-native and Angular built-in services over calling those lower-level functions directly. This allows better caching, centralized and debuggable data storage, and standardized, low-effort error handling.
    5 - Log statements and browser events should always include a unique string.
    6 - Prefer VS Code and standard extensions to ensure consistent code formatting. Set your workspace to include 4 space indentation.

18.6 - Prefer Readable Solutions

    1 - Declare variables, functions, imports, and all the things in alphabetical order.
    2 - When declaring variables alphabetically, ignore the decleration keyword and focus on the variable name itself. So `let a` before `const b`.
    3 - HTML attributes should be named with CSS naming. When using CSS naming, spell numbers using number characters to avoid the three-before-two problem illustrated below:

```
.my-elements { height: 6px; }

.my-element-three { height: 7px; }

.my-element-two { height: 8px; }
```

    4 - Use only letters when naming functions or variables, except as described in 18.6.3.

18.7 - Technical Style Guidelines

    1 - Use atomic style when elements aren't repeated.
