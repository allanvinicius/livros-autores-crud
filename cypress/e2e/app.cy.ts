describe("Library Management", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Books Component", () => {
    it("Display the list of books", () => {
      cy.contains("table", "Livro").within(() => {
        cy.get("thead").contains("ID");
        cy.get("thead").contains("Livro");
        cy.get("thead").contains("Páginas");
        cy.get("thead").contains("Ações");
        cy.get("tbody tr").should("have.length.at.least", 1);
      });
    });

    it("Cancel add a new book", () => {
      cy.contains("button", "Adicionar Livro").click();

      cy.get('[role="dialog"]').within(() => {
        cy.get("button").contains("Cancelar").click();
      });
    });

    it("Add a new book", () => {
      cy.contains("button", "Adicionar Livro").click();

      cy.get('[role="dialog"]').within(() => {
        cy.get('input[placeholder="Nome do Livro"]').type("Novo Livro");
        cy.get('input[placeholder="Nome do Autor"]').type("Autor Exemplo");
        cy.get('input[placeholder="Número de Páginas"]').type("300");
        cy.get("button").contains("Salvar").click();
      });

      cy.contains("table", "Livro").within(() => {
        cy.get("tbody tr").should("contain", "Novo Livro");
      });
    });

    it("Detail a book", () => {
      cy.contains("table", "Livro").within(() => {
        cy.get("tbody tr")
          .first()
          .within(() => {
            cy.get('button[aria-haspopup="dialog"]').eq(1).click();
          });
      });

      cy.get('[role="dialog"]').should("exist");
    });

    it("Cancel delete a book", () => {
      cy.contains("table", "Livro").within(() => {
        cy.get("tbody tr")
          .first()
          .within(() => {
            cy.get('button[aria-haspopup="dialog"]').eq(0).click();
          });
      });

      cy.get('[role="alertdialog"]').should("exist");

      cy.get('[role="alertdialog"] button').contains("Cancelar").click();
    });

    it("Delete a book", () => {
      cy.contains("table", "Livro").within(() => {
        cy.get("tbody tr")
          .first()
          .within(() => {
            cy.get('button[aria-haspopup="dialog"]').eq(0).click();
          });
      });

      cy.get('[role="alertdialog"]')
        .should("exist")
        .and("contain", "Você tem certeza? Esse livro será removido.");

      cy.get('[role="alertdialog"] button').contains("Remover").click();
    });
  });

  describe("Authors Component", () => {
    it("Display the list of authors", () => {
      cy.contains("table", "Nome").within(() => {
        cy.get("thead").contains("ID");
        cy.get("thead").contains("Nome");
        cy.get("thead").contains("E-mail");
        cy.get("thead").contains("Ações");
        cy.get("tbody tr").should("have.length.at.least", 1);
      });
    });

    it("Cancel add a new author", () => {
      cy.contains("button", "Adicionar Autor").click();

      cy.get('[role="dialog"]').within(() => {
        cy.get("button").contains("Cancelar").click();
      });
    });

    it("Add a new author", () => {
      cy.contains("button", "Adicionar Autor").click();

      cy.get('[role="dialog"]').within(() => {
        cy.get('input[placeholder="Nome do Autor"]').type("Novo Autor");
        cy.get('input[placeholder="E-mail do Autor"]').type(
          "autor@exemplo.com"
        );
        cy.get("button").contains("Salvar").click();
      });

      cy.contains("table", "Nome").within(() => {
        cy.get("tbody tr").should("contain", "Novo Autor");
      });
    });

    it("Detail an author", () => {
      cy.contains("table", "Nome").within(() => {
        cy.get("tbody tr")
          .first()
          .within(() => {
            cy.get('button[aria-haspopup="dialog"]').eq(1).click();
          });
      });

      cy.get('[role="dialog"]').should("exist");
    });

    it("Cancel delete an author", () => {
      cy.contains("table", "Nome").within(() => {
        cy.get("tbody tr")
          .first()
          .within(() => {
            cy.get('button[aria-haspopup="dialog"]').eq(0).click();
          });
      });

      cy.get('[role="alertdialog"]').should("exist");

      cy.get('[role="alertdialog"] button').contains("Cancelar").click();
    });

    it("Delete an author", () => {
      cy.contains("table", "Nome").within(() => {
        cy.get("tbody tr")
          .first()
          .within(() => {
            cy.get('button[aria-haspopup="dialog"]').eq(0).click();
          });
      });

      cy.get('[role="alertdialog"]')
        .should("exist")
        .and("contain", "Tem certeza? Esse autor será removido.");

      cy.get('[role="alertdialog"] button').contains("Remover").click();
    });
  });
});
