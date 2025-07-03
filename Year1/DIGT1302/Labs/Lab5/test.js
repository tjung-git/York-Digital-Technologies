QUnit.test('Test hide class removed from formErrors div when no input submitted', function(assert) {
    const errorDiv = document.getElementById('formErrors');
    const submitElement = document.getElementById('submit');
 
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
    
    // Look for "hide" class 
    assert.ok(errorDiv.classList.contains("hide") === false, 
       'formsError <div> does not have "hide" class when empty form is submitted');   
 });


 QUnit.test('Testing validation: formErrors div with no input', function(assert) {
    const submitElement = document.getElementById('submit');
 
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
 
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, 6, 'Number of <li> elements (error messages)');
 
    const expectedErrorList = [
       'Missing full name.',
       'Invalid or missing email address.',
       'Password must be between 10 and 20 characters.',
       'Password must contain at least one lowercase character.',
       'Password must contain at least one uppercase character.',
       'Password must contain at least one digit.',
    ];
 
    expectedErrorList.forEach((expectedError, i) => assert.equal(liTags[i].innerText, expectedError, 
       `Error message in <li> element #${i+1}`));
       
    // Check error class
    assert.ok(document.getElementById('fullName').classList.contains('error'), 
       'Full Name input has "error" class.');
    assert.ok(document.getElementById('email').classList.contains('error'), 
       'Email input has "error" class.');
    assert.ok(document.getElementById('password').classList.contains('error'), 
       'Password input has "error" class.');
 });

 QUnit.test('Test validation message: Invalid email only', function(assert) {
    const submitElement = document.getElementById('submit');
    
    const formInputs = {
       'fullName': 'Full Name',
       'email': 'notvalid',
       'password': 'Az222222222',
       'passwordConfirm': 'Az222222222',
    };
    
    for (let input in formInputs) {
      document.getElementById(input).value = formInputs[input];
    }
      
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
    
    const expectedErrorList = [
       'Invalid or missing email address.',
    ];
    
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, expectedErrorList.length, 
       `Number of <li> elements (error messages) is ${expectedErrorList.length}`);
    expectedErrorList.forEach((expectedError, i) => assert.equal(liTags[i].innerText, expectedError, 
       `Error message in <li> element #${i+1}`));
    
    // Check for error class
    assert.ok(document.getElementById('email').classList.contains('error'), 'Email input has "error" class.');
 });

 QUnit.test('Test validation message: Short password', function(assert) {
    const submitElement = document.getElementById('submit');
    
    const formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'Az2',
       'passwordConfirm': 'Az2',
    };
    
    for (let input in formInputs) {
       document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
    
    const expectedErrorList = [
       'Password must be between 10 and 20 characters.',
    ];
    
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, expectedErrorList.length, 
       `Number of <li> elements (error messages) is ${expectedErrorList.length}`);
    expectedErrorList.forEach((expectedError, i) => assert.equal(liTags[i].innerText, expectedError, 
       `Error message in <li> element #${i+1}`));  
       
    // Check for error class
    assert.ok(document.getElementById('password').classList.contains('error'), 'Password input has "error" class.');
 });

 QUnit.test('Test validation message: Long password ', function(assert) {
    const submitElement = document.getElementById('submit');
 
    const formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'Az2ffffffffffffffffffffffff',
       'passwordConfirm': 'Az2ffffffffffffffffffffffff',
    };
   
    for (let input in formInputs) {
       document.getElementById(input).value = formInputs[input];
    }
   
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
 
    const expectedErrorList = [
       'Password must be between 10 and 20 characters.',
    ];
 
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, expectedErrorList.length, 
       `Number of <li> elements (error messages) is ${expectedErrorList.length}`);
    expectedErrorList.forEach((expectedError, i) => assert.equal(liTags[i].innerText, expectedError, 
       `Error message in <li> element #${i+1}`));  
    
    // Check for error class
    assert.ok(document.getElementById('password').classList.contains('error'), 'Password input has "error" class.');
 });

 QUnit.test('Test validation message: Password and confirm password do not match', function(assert) {
    const submitElement = document.getElementById('submit');
    
    const formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'ABCDefg23456',
       'passwordConfirm': 'ABCDefg23456XXX',
    };
    
    for (let input in formInputs) {
      document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
    
    const expectedErrorList = [
       "Password and confirmation password don't match.",
    ];
    
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, expectedErrorList.length, 
       `Number of <li> elements (error messages) is ${expectedErrorList.length}`);
    expectedErrorList.forEach((expectedError, i) => assert.equal(liTags[i].innerText, expectedError, 
       `Email message in <li> element #${i+1}`));
       
    // Check for error class
    assert.ok(document.getElementById('passwordConfirm').classList.contains('error'), 
       'Confirm password input has "error" class.');
 });

 QUnit.test('Test validation message: No lowercase or digit', function(assert) {
    const submitElement = document.getElementById('submit');
    
    const formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'aaaaaaaaaaaaa',
       'passwordConfirm': 'aaaaaaaaaaaaa',
    };
    
    for (let input in formInputs) {
      document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    let simulatedEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent);
    
    const expectedErrorList = [
       "Password must contain at least one uppercase character.",
       "Password must contain at least one digit.",
    ];
    
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, expectedErrorList.length, 
       `Number of <li> elements (error messages) is ${expectedErrorList.length}`);
    expectedErrorList.forEach((expectedError, i) => assert.equal(liTags[i].innerText, expectedError, 
       `Error message in <li> element #${i+1}`));
       
    // Check for error class
    assert.ok(document.getElementById('password').classList.contains('error'), 'Password input has "error" class.');
 });

 QUnit.test('Test password confirmation: Invalid then valid', function(assert) {
    const submitElement = document.getElementById('submit');
    
    // Invalid password confirmation
    let formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'ABCDEFghijk1234',
       'passwordConfirm': 'ABCDEFghijk1234ggg',
    };
    
    for (let input in formInputs) {
      document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    const simulatedEvent1 = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent1);
    
    const errorDiv = document.getElementById('formErrors');
    assert.ok(errorDiv.classList.contains("hide") === false, 
       'formsError <div> does not have "hide" class when empty form is submitted');
    
    // Check for the <li> error message exists
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, 1, 
       'Initial number of <li> elements (error messages) after invalid password confirmation');
          
    // Valid inputs
    formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'ABCDEFghijk1234',
       'passwordConfirm': 'ABCDEFghijk1234',
    };
    
    for (let input in formInputs) {
       document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    const simulatedEvent2 = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent2);
 
    // Check that formsError div is not displayed
    assert.ok(errorDiv.classList.contains("hide"), 'formsError <div> has "hide" class after supplying valid data');
    
    // Verify no inputs have error class
    assert.ok(!document.getElementById('fullName').classList.contains('error'), 
       'Full Name input does not have "error" class after supplying valid name.');
    assert.ok(!document.getElementById('email').classList.contains('error'), 
       'Email input does not have "error" class after supplying valid email.');
    assert.ok(!document.getElementById('password').classList.contains('error'), 
       'Password input does not have "error" class after supplying valid password.');
    assert.ok(!document.getElementById('passwordConfirm').classList.contains('error'), 
       'Confirm password input does not have "error" class after supplying valid password.');
 });

 QUnit.test('Test name and email: Invalid then valid', function(assert) {
    const submitElement = document.getElementById('submit');
    
    // Invalid name and email
    let formInputs = {
       'fullName': '',
       'email': '',
       'password': 'ABCDEFghijk1234',
       'passwordConfirm': 'ABCDEFghijk1234',
    };
    
    for (let input in formInputs) {
      document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    const simulatedEvent1 = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent1);
    
    const errorDiv = document.getElementById('formErrors');
    assert.ok(errorDiv.classList.contains("hide") === false, 
       'formsError <div> does not have "hide" class when empty form is submitted');
    
    // Check for the <li> error message exists
    const liTags = document.getElementsByTagName('li');
    assert.equal(liTags.length, 2, 
       'Initial number of <li> elements (error messages) after invalid password confirmation');
          
    // Valid inputs
    formInputs = {
       'fullName': 'Full Name',
       'email': 'valid@example.com',
       'password': 'ABCDEFghijk1234',
       'passwordConfirm': 'ABCDEFghijk1234',
    };
    
    for (let input in formInputs) {
       document.getElementById(input).value = formInputs[input];
    }
    
    // Trigger click event
    const simulatedEvent2 = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
    submitElement.dispatchEvent(simulatedEvent2);
 
    // Check that formsError div is not displayed
    assert.ok(errorDiv.classList.contains("hide"), 'formsError <div> has "hide" class after supplying valid data');
    
    // Verify no inputs have error class
    assert.ok(!document.getElementById('fullName').classList.contains('error'), 
       'Full Name input does not have "error" class after supplying valid name.');
    assert.ok(!document.getElementById('email').classList.contains('error'), 
       'Email input does not have "error" class after supplying valid email.');
    assert.ok(!document.getElementById('password').classList.contains('error'), 
       'Password input does not have "error" class after supplying valid password.');
    assert.ok(!document.getElementById('passwordConfirm').classList.contains('error'), 
       'Confirm password input does not have "error" class after supplying valid password.');
 });

