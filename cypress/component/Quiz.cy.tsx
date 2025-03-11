/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress/react"; // Cypress helper to mount components
import Quiz from "../../client/src/components/Quiz";
import questions from "../fixtures/questions.json"; // Mock data

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.intercept("GET", "/api/questions", { body: questions }).as("getQuestions");
  });

  it("renders the Quiz component", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").should("exist");
  });

  it("starts quiz and shows first question", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");
    cy.get("[data-testid=question-text]").should("exist");
  });

  it("answers a question and moves to the next", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    cy.get("[data-testid=answer-option]").first().click(); // Click first answer
    cy.get("[data-testid=question-text]").should("not.contain", questions[0].question);
  });

  it("displays final score when quiz is completed", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    questions.forEach(() => {
      cy.get("[data-testid=answer-option]").first().click();
    });

    cy.contains("Your Score:").should("exist");
  });
});