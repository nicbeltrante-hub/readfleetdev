# ReadFleet

ReadFleet is a project aimed at making reading fun by gamifying a reading log within a space-themed application!

## Tech Stack

When fully developed, ReadFleet is going to be a full-stack application using Angular for the frontend, Java Spring Boot for the backend, and a PostgreSQL database.

## Current State

Currently, I have both the dashboard and book log pages created in Angular and connected to getBooks, addBook, and updateBook backend APIs. I am working off of dummy data for all other aspects of the application, and no other pages are created at this point.

As it is right now, this is a working reading tracker! A user is able to add and update books, and their progress is stored.

My next steps are: ensuring all parts of the dashboard come from the database, implementing a deleteBook api to remove unwanted book entries, and moving on to other pages!

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

## Running Locally

**Backend:**

1. Create a local PostgreSQL database
2. Copy `readfleetapi/src/main/resources/application.properties.example` to `application.properties` and fill in your credentials
3. Run `ReadfleetapiApplication` — Flyway will automatically set up the schema and seed data
4. API runs on `http://localhost:8080`

**Frontend:**

1. `cd readfleetfrontend`
2. `npm install`
3. `ng serve`
4. App runs on `http://localhost:4200`
