QUnit.test('Testing flexbox styles of header element', function(assert) {
    const headerTag = document.getElementsByTagName('header')[0];
    const expectedStyles = {
       display: 'flex',
       'justify-content': 'space-between',
    };
    const headerStyles = window.getComputedStyle(headerTag, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = headerStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of <header> element`);
    }
 });

 QUnit.test('Testing flexbox styles of content class', function(assert) {
    const contentClass = document.getElementsByClassName('content')[0];
    const expectedStyles = {
       display: 'flex',
       'flex-wrap': 'wrap',
    };
    const contentStyles = window.getComputedStyle(contentClass, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = contentStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of content class`);
    }
 });

 QUnit.test('Testing flexbox styles of main-content class', function(assert) {
    const mainContentClass = document.getElementsByClassName('main-content')[0];
    const expectedStyles = {
       display: 'flex',
       'flex-wrap': 'wrap',
       'flex-grow': '1',
       'flex-basis': '70%',
    };
    const mainContentStyles = window.getComputedStyle(mainContentClass, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = mainContentStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of main-content class`);
    }
 });

 QUnit.test('Testing flexbox styles of title class', function(assert) {
    const titleClass = document.getElementsByClassName('title')[0];
    const expectedStyles = {
       display: 'flex',
       'align-items': 'baseline',
    };
    const titleStyles = window.getComputedStyle(titleClass, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = titleStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of title class`);
    }
 });

 QUnit.test('Testing flexbox styles of summary class', function(assert) {
    const summaryClass = document.getElementsByClassName('summary')[0];
    const expectedStyles = {
       display: 'flex',
       'justify-content': 'space-evenly',
       'flex-grow': '1',
       'flex-basis': '100%',
    };
    const summaryStyles = window.getComputedStyle(summaryClass, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = summaryStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of summary class`);
    }
 });


 QUnit.test('Testing flexbox styles of div child of div child of summary class', function(assert) {
    const divTag = document.querySelectorAll('.summary > div > p')[0];
    const expectedStyles = {
       display: 'flex',
       'justify-content': 'space-between',
    };
    const divStyles = window.getComputedStyle(divTag, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = divStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of summary class > div > p`);
    }
 });

 QUnit.test('Testing flexbox styles of ingredients and directions classes', function(assert) {
    const ingredientsClass = document.getElementsByClassName('ingredients')[0];
    const directionsClass = document.getElementsByClassName('directions')[0];
    const expectedStyles = {
       'flex-grow': '1',
       'flex-basis': '45%',
    };
    const ingredientsStyles = window.getComputedStyle(ingredientsClass, null);
    const directionsStyles = window.getComputedStyle(directionsClass, null);
 
    for (const expectedStyle in expectedStyles) {
       const ingredientsValue = ingredientsStyles.getPropertyValue(expectedStyle);
       const directionsValue = directionsStyles.getPropertyValue(expectedStyle);
 
       assert.equal(ingredientsValue, expectedStyles[expectedStyle], `${expectedStyle} of ingredients class`);
       assert.equal(directionsValue, expectedStyles[expectedStyle], `${expectedStyle} of directions class`);
    }
 });

 QUnit.test('Testing flexbox styles of related-content class', function(assert) {
    const relatedContentClass = document.getElementsByClassName('related-content')[0];
    const expectedStyles = {
       'flex-grow': '1',
       'flex-basis': '20%',
    };
    const relatedContentStyles = window.getComputedStyle(relatedContentClass, null);
 
    for (const expectedStyle in expectedStyles) {
       const value = relatedContentStyles.getPropertyValue(expectedStyle);
 
       assert.equal(value, expectedStyles[expectedStyle], `${expectedStyle} of content class`);
    }
 });