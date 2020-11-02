describe('Hello! testing paint Applicatioin', () =>{
    it('canvas should exist and height: 600px, width: 600px background-color: rgb(0, 0, 0)', () =>{
        cy.visit('./index.html')
        cy.get('#my-canvas').should('exist');
        cy.get('#my-canvas').should('have.css', 'width', '600px')
        cy.get('#my-canvas').should('have.css', 'height', '600px')
        cy.get('#my-canvas').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    })
    it('tool bar should exists', () =>{
        cy.visit('./index.html')
        cy.get('.toolbar').should('exist');
    })
    it('tool bar should be visible', () =>{
        cy.visit('./index.html');
        cy.get('.toolbar').should('exist')
        .then((toolbar) =>{
            expect(toolbar.is(':visible')).to.equal(true);
        });
    })
    it('tool bar should has Line tool', () =>{
        cy.visit('./index.html')
        cy.get('#line').should('exist');
    })
    it('tool bar should has circle tool', () =>{
        cy.visit('./index.html')
        cy.get('#circle').should('exist');
    })
    it('tool bar should has rectanle tool', () =>{
        cy.visit('./index.html')
        cy.get('#rectangle').should('exist');
    })
    it('tool bar should has clear tool', () =>{
        cy.visit('./index.html');
        cy.get('#clear').should('exist');
    })
    it('tool bar should contains color red green blue white', () =>{
        cy.visit('./index.html');
        cy.visit('#red').should('exist');
        cy.visit('#green').should('exist');
        cy.visit('#white').should('exist');
        cy.visit('#blue').should('exist');
    })
})

describe('one image drawing test', () =>{
    it('should be able to draw white Line', () =>{
        cy.visit('./index.html');
        cy.get('#line').click();
        cy.get('#white').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 100, 300)
        .trigger('mousemove', 300, 500)
        .trigger('mouseup', 300, 500);
        cy.get('#my-canvas').screenshot('line');
        cy.fixture('../screenshots/index.specs.js/line').then((line) => {
            cy.fixture('../fixtures/expec_line').then((expec_line) =>{
                expect(line).to.equal(expec_line);
            })
        })
    })
})

describe('one image drawing test', () =>{
    it('should be able to draw red Rectangle', () =>{
        cy.visit('./index.html')
        cy.get('#rectangle').click();
        cy.get('#red').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 20, 10)
        .trigger('mousemove', 100, 400)
        .trigger('mouseup', 100, 400);  
        cy.get('#my-canvas').screenshot('rectangle');
        cy.fixture('../screenshots/index.specs.js/rectangle').then((rectangle) => {
            cy.fixture('../fixtures/expec_rectangle').then((expec_rectangle) =>{
                expect(rectangle).to.equal(expec_rectangle);
            })
        })
    })
})

describe('one image drawing test', () =>{
    it('should be able to draw green Circle', () =>{
        cy.visit('./index.html');
        cy.get('#circle').click();
        cy.get('#green').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 150, 150)
        .trigger('mousemove', 200, 200)
        .trigger('mouseup', 200, 200);
        cy.get('#my-canvas').screenshot('circle');
        cy.fixture('../screenshots/index.specs.js/circle').then((circle) => {
            cy.fixture('../fixtures/expec_circle').then((expec_circle) =>{
                expect(circle).to.equal(expec_circle);
            })
        })
    })
})

describe('Clear tool Testing', () =>{
    it('Clear tool should clear complete canvas', () => {
        cy.visit('./index.html');
        cy.get('#line').click();
        cy.get('#white').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 100, 300)
        .trigger('mousemove', 300, 500)
        .trigger('mouseup', 300, 500);
        cy.get('#clear').click();
        cy.get('#my-canvas')
        .trigger('mousedown')
        .trigger('mouseup');
        cy.get('#my-canvas').screenshot('blank_image');
        cy.fixture('../screenshots/index.specs.js/blank_image').then((blank_image) =>{
            cy.fixture('../fixtures/expec_blank_image').then((expec_blank_imgae) =>{
                expect(blank_image).to.equal(expec_blank_imgae);
            })
        })
    })
})

describe('Multiple Images drawing test', () =>{
    it('Drawing Line, Rectangle, Circle one after another', () =>{
        cy.visit('./index.html');
        cy.get('#line').click();
        cy.get('#white').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 100, 300)
        .trigger('mousemove', 300, 500)
        .trigger('mouseup', 300, 500);
        cy.get('#rectangle').click();
        cy.get('#red').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 20, 10)
        .trigger('mousemove', 100, 400)
        .trigger('mouseup', 100, 400);  
        cy.get('#circle').click();
        cy.get('#green').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 150, 150)
        .trigger('mousemove', 200, 200)
        .trigger('mouseup', 200, 200);
        cy.get('#my-canvas').screenshot('pic_1');
        cy.fixture('../screenshots/index.specs.js/pic_1').then((pic_1) => {
            cy.fixture('../fixtures/expec_pic_1').then((expec_pic_1) =>{
                expect(pic_1).to.equal(expec_pic_1);
            })
          })
    })
})

describe('Drawing over shapers', () =>{
    it('Should be able to draw over shapes with default color as red' , () =>{
        cy.visit('./index.html');
        cy.get('#circle').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 150, 150)
        .trigger('mousemove', 300, 300)
        .trigger('mouseup', 300, 300);
        cy.get('#line').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 150, 150)
        .trigger('mousemove', 300, 300)
        .trigger('mouseup', 300, 300);
        cy.get('#my-canvas').screenshot('pic_2');
        cy.fixture('../screenshots/index.specs.js/pic_2').then((pic_2) => {
            cy.fixture('../fixtures/expec_pic_2').then((expec_pic_2) =>{
                expect(pic_2).to.equal(expec_pic_2);
            })
        })
    })
})

describe('while dragging expected image', () =>{
    it('while dragging expected image should be rended in drawing area (drawing blue rectangle)', () =>{
        cy.visit('./index.html');
        cy.get('#rectangle').click();
        cy.get('#blue').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 150, 150)
        .trigger('mousemove', 300, 300)
        .screenshot('pos1')
        .trigger('mousemove', 400, 400)
        .screenshot('pos2')
        .trigger('mousemove', 500, 500)
        .trigger('mouseup', 500, 500)
        .screenshot('finale');
        cy.fixture('../screenshots/index.specs.js/pos2').then((pos2) =>{
            cy.fixture('../fixtures/expec_pos2').then((expec_pos2) =>{
                expect(pos2).to.equal(expec_pos2);
            })
        })
        cy.fixture('../screenshots/index.specs.js/pos1').then((pos1) =>{
            cy.fixture('../fixtures/expec_pos1').then((expec_pos1) =>{
                expect(pos1).to.equal(expec_pos1);
            })
        })
        cy.fixture('../screenshots/index.specs.js/finale').then((finale) =>{
            cy.fixture('../fixtures/expec_finale').then((expec_finale) =>{
                expect(finale).to.equal(expec_finale);
            })
        });
    })
})

describe('drawing curves in any direction', () =>{
    it('drawing red rectangle in any direction', () =>{
        cy.visit('./index.html');
        cy.get('#rectangle').click();
        cy.get('#red').click();
        cy.get('#my-canvas')
        .trigger('mousedown', 300, 300)
        .trigger('mousemove', 200, 200)
        .screenshot('rp1')
        .trigger('mousemove', 400, 200)
        .screenshot('rp2')
        .trigger('mousemove', 400, 400)
        .screenshot('rp3')
        .trigger('mousemove', 200, 400)
        .trigger('mouseup', 200, 400)
        .screenshot('rp4');
        cy.fixture('../screenshots/index.specs.js/rp1').then((rp1) =>{
            cy.fixture('../fixtures/expec_rp1').then((expec_rp1) =>{
                expect(rp1).to.equal(expec_rp1);
            })
        });
        cy.fixture('../screenshots/index.specs.js/rp2').then((rp2) =>{
            cy.fixture('../fixtures/expec_rp2').then((expec_rp2) =>{
                expect(rp2).to.equal(expec_rp2);
            })
        });
        cy.fixture('../screenshots/index.specs.js/rp3').then((rp3) =>{
            cy.fixture('../fixtures/expec_rp3').then((expec_rp3) =>{
                expect(rp3).to.equal(expec_rp3);
            })
        });
        cy.fixture('../screenshots/index.specs.js/rp4').then((rp4) =>{
            cy.fixture('../fixtures/expec_rp4').then((expec_rp4) =>{
                expect(rp4).to.equal(expec_rp4);
            })
        });
    })
})