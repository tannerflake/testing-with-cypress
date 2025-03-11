/// <reference types="cypress" />

describe("Tech Quiz End-to-End Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001"); // Adjust if needed
    });
  
    it("loads the quiz page", () => {
      cy.contains("Start Quiz").should("exist");
    });
  
    it("starts quiz and displays first question", () => {
      cy.contains("Start Quiz").click();
      cy.get("[data-testid=question-text]").should("exist");
    });
  
    it("answers all questions and sees final score", () => {
      cy.contains("Start Quiz").click();
  
      for (let i = 0; i < 10; i++) {
        cy.get("[data-testid=answer-option]").first().click();
      }
  
      cy.contains("Your Score:").should("exist");
    });
  
    it("resets quiz after completion", () => {
      cy.contains("Start Quiz").click();
  
      for (let i = 0; i < 10; i++) {
        cy.get("[data-testid=answer-option]").first().click();
      }
  
      cy.contains("Your Score:").should("exist");
      cy.contains("Start New Quiz").click();
      cy.contains("Start Quiz").should("exist");
    });
  });