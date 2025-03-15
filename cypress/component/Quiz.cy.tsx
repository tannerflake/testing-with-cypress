/// <reference types="cypress" />

describe("Tech Quiz End-to-End Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("loads the quiz page", () => {
    cy.contains("Start Quiz").should("be.visible");
  });

  it("starts quiz and displays first question", () => {
    cy.contains("Start Quiz").click();
    cy.get("[data-testid=question-text]").should("be.visible");
    cy.get("[data-testid=answer-option]").should("be.visible");
  });

  it("answers all questions and sees final score", () => {
    cy.contains("Start Quiz").click();

    let lastQuestion = "";

    for (let i = 0; i < 10; i++) {
      // Wait for the question to load and store the question text
      cy.get("[data-testid=question-text]")
        .should("be.visible")
        .invoke("text")
        .then((questionText) => {
          expect(questionText).not.to.eq(lastQuestion); // ensures new question loaded
          lastQuestion = questionText;
        });

      // Wait for answers to be clickable, then click one
      cy.get("[data-testid=answer-option]")
        .should("be.visible")
        .first()
        .click();

      // explicitly wait for question text to disappear (indicating a transition)
      cy.get("[data-testid=question-text]").should("not.have.text", lastQuestion);
    }

    // After answering all 10, verify the score appears
    cy.get(".alert.alert-success")
      .should("be.visible")
      .and("contain.text", "Your score");
  });

  it("resets quiz after completion", () => {
    cy.contains("Start Quiz").click();

    let lastQuestion = "";

    for (let i = 0; i < 10; i++) {
      cy.get("[data-testid=question-text]")
        .should("be.visible")
        .invoke("text")
        .then((questionText) => {
          expect(questionText).not.to.eq(lastQuestion);
          lastQuestion = questionText;
        });

      cy.get("[data-testid=answer-option]")
        .should("be.visible")
        .first()
        .click();

      cy.get("[data-testid=question-text]").should("not.have.text", lastQuestion);
    }

    cy.get(".alert.alert-success")
      .should("be.visible")
      .and("contain.text", "Your score");

    cy.contains("Start New Quiz").click();
    cy.contains("Start Quiz").should("be.visible");
  });
});