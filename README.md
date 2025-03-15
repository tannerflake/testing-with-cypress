# Tech Quiz Application

This repository contains a Tech Quiz application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to take a quiz of ten random questions and view their final score. This project includes both component and end-to-end tests using Cypress.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/tech-quiz.git
    cd tech-quiz
    ```

2. Install dependencies for the server:
    ```sh
    cd server
    npm install
    ```

3. Install dependencies for the client:
    ```sh
    cd ../client
    npm install
    ```

4. Rename the `.env.example` file to `.env` in the `server` directory and update the environment variables as needed.

### Running the Application

1. Start the server:
    ```sh
    cd server
    npm start
    ```

2. Start the client:
    ```sh
    cd ../client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3001` to use the application.

### Running Tests

1. Install Cypress as a dev dependency:
    ```sh
    npm install cypress --save-dev
    ```

2. Run the Cypress tests:
    ```sh
    npm run test
    ```

## Directory Structure

```
.
├── client/                 // the client application
├── cypress/                // Folder for Cypress
│   ├── component/          // Folder for component tests
│   │   └── Quiz.cy.tsx     // Component tests for the Quiz component
│   ├── e2e/                // Folder for end-to-end tests
│   │   └── quiz.cy.ts      // End-to-end tests for the Tech Quiz
│   ├── fixtures/           // Folder for test fixtures
│   │   └── questions.json  // Mock data for testing
│   └── tsconfig.json
├── server/                 // the server application
├── .gitignore
├── cypress.config.ts       // Cypress configuration
├── package.json
├── tsconfig.json
└── README.md               // App description, link to video, setup and usage instructions
```

## Walkthrough Video

[Link to Walkthrough Video](https://youtu.be/4FE48NtV9GM)

The walkthrough video demonstrates the component and end-to-end tests running and passing. It shows all tests passing from the command line and demonstrates how a user would invoke the application from the command line.