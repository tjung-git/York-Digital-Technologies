QUnit.test('Test display property', function(assert) {
   
    // Find CSS rule
    let searchRule = null;
    for (let rule of document.styleSheets[0].cssRules) {
       if (rule.selectorText === '#board') {
          if (searchRule === null) {
             searchRule = rule;
          }
          else {
             assert.ok(searchRule === null, 'Only one #board selector exists');
          }
       }
    }
    
    assert.ok(searchRule !== null, '#board selector exists');
    
    const expectedStyles = {
       'display': 'grid'
    };
    
    let ruleStyles = searchRule.style;   
    for (let expectedStyle in expectedStyles) {
       assert.equal(
          ruleStyles.getPropertyValue(expectedStyle),
          expectedStyles[expectedStyle],
          `${expectedStyle} property of rule`
       );
    }
 });


 QUnit.test('Test grid-template-columns property', function(assert) {
   
    // Find CSS rule
    let searchRule = null;
    for (let rule of document.styleSheets[0].cssRules) {
       if (rule.selectorText === '#board') {
          if (searchRule === null) {
             searchRule = rule;
          }
          else {
             assert.ok(searchRule === null, 'Only one #board selector exists');
          }
       }
    }
    
    assert.ok(searchRule !== null, '#board selector exists');   
    
    const expectedStyles = {
       'grid-template-columns': '100px 100px 100px'
    };
    
    let ruleStyles = searchRule.style;   
    for (let expectedStyle in expectedStyles) {
       assert.equal(
          ruleStyles.getPropertyValue(expectedStyle),
          expectedStyles[expectedStyle],
          `${expectedStyle} property of rule`
       );
    }
    
 });

 QUnit.test('Test grid-template-rows property', function(assert) {
   
    // Find CSS rule
    let searchRule = null;
    for (let rule of document.styleSheets[0].cssRules) {
       if (rule.selectorText === '#board') {
          if (searchRule === null) {
             searchRule = rule;
          }
          else {
             assert.ok(searchRule === null, 'Only one #board selector exists');
          }
       }
    }
    
    assert.ok(searchRule !== null, '#board selector exists');   
    
    const expectedStyles = {
       'grid-template-rows': '100px 100px 100px'
    };
    
    let ruleStyles = searchRule.style;   
    for (let expectedStyle in expectedStyles) {
       assert.equal(
          ruleStyles.getPropertyValue(expectedStyle),
          expectedStyles[expectedStyle],
          `${expectedStyle} property of rule`
       );
    }
    
 });

 QUnit.test('Test grid-gap (column-gap and row-gap) property', function(assert) {

    // Find CSS rule
    let searchRule = null;
    for (let rule of document.styleSheets[0].cssRules) {
       if (rule.selectorText === '#board') {
          if (searchRule === null) {
             searchRule = rule;
          }
          else {
             assert.ok(searchRule === null, 'Only one #board selector exists');
          }
       }
    }
    
    assert.ok(searchRule !== null, '#board selector exists');   
    
    // On Chrome, grid-gap is converted into column-gap and row-gap properties
    const expectedStyles = {
       'column-gap': '10px',
       'row-gap': '10px'
    };
    
    let ruleStyles = searchRule.style;   
    for (let expectedStyle in expectedStyles) {
       assert.equal(
          ruleStyles.getPropertyValue(expectedStyle),
          expectedStyles[expectedStyle],
          `${expectedStyle} property of rule`
       );
    }
 });

 QUnit.test('Test justify-content property', function(assert) {
    // Find CSS rule
    let searchRule = null;
    for (let rule of document.styleSheets[0].cssRules) {
       if (rule.selectorText === '#board') {
          if (searchRule === null) {
             searchRule = rule;
          }
          else {
             assert.ok(searchRule === null, 'Only one #board selector exists');
          }
       }
    }
    
    assert.ok(searchRule !== null, '#board selector exists');   
    
    const expectedStyles = {
       'justify-content': 'center'
    };
    
    let ruleStyles = searchRule.style;   
    for (let expectedStyle in expectedStyles) {
       assert.equal(
          ruleStyles.getPropertyValue(expectedStyle),
          expectedStyles[expectedStyle],
          `${expectedStyle} property of rule`
       );
    }
 });