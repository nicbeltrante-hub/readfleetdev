# ReadFleet
ReadFleet is a project aimed at making reading fun by gamifying a reading log within a space-themed application!

## Tech Stack
When fully developed, ReadFleet is going to be a full-stack application using Angular for the frontend, Java Spring Boot for the backend,
and a PostgreSQL database. Currently, I am working on getting the frontend to display correctly and function as expected before
beginning work on the backend, so it is working off of dummy data. All work done so far has been on the frontend.

## Explaining the App
There are multiple tabs/pages within the app. Here is a quick explanation for what each is/will be developed to be:
### Bridge
Overall user dashboard. It shows users their overall stats like books and pages read. It also displays quick summaries of the following pages.
### Fleet
Displays all ships user has earned in their fleet. Ships are unlocked by hitting page count milestones, and they can be used to be deployed to battles.
### Logs
The actual reading log that all other tabs rely on. This is where users log books as want to read, reading, or read.
### Missions
Regular, consistent default goals that reset either weekly or monthly. Will be generic and the same for all users.
### Battles
Individual goals that a user can set for themselves. A user can only have as many battles as they do ships, and "enemies" scale depending on goal difficulty.
### Medals
Lifetime user achievements. Stores achievement medals for milestones like 1000 pages read or 20 books logged.
### Home Base
A visual moon base that users can upgrade/unlock features for with XP earned from missions, battles, and medals.
