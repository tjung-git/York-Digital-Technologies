QUnit.test('parseScores("91 63 18 4 97 71 84") returns ["91", "63", "18", "4", "97", "71", 84")', function(assert) {

    assert.ok(typeof parseScores === 'function', 'parseScores() is defined');
 
    const input = "91 63 18 4 97 71 84";
    const expected = input.split(" ");
    const actual = parseScores(input);
 
    assert.ok(Array.isArray(actual), "parseScores() returns an array");
 
    // Verify that the arrays are of equal length
    assert.equal(actual.length, expected.length,
      "Array returned by parseScores() has proper length");
 
    // Verify equality of each array item
    for (let i in expected) {
      assert.equal(actual[i], expected[i], `Returned array element ${i}`);
    }
 });


 QUnit.test('buildDistributionArray(["79", "91", "2", "64", "93", "82", "97", "82"]) returns [3, 2, 1, 1, 1]', function(assert) {
   
    assert.ok(typeof buildDistributionArray === 'function', 'buildDistributionArray() is defined');
 
    //            C     A     F    D     A     B     A     B
    const input = ["79", "91", "2", "64", "93", "82", "97", "82"];
    const expected = [3, 2, 1, 1, 1];
    const actual = buildDistributionArray(input);
 
    assert.ok(Array.isArray(actual), "buildDistributionArray() returns an array");
 
    // Verify that the arrays are of equal length
    assert.equal(actual.length, expected.length,
      "buildDistributionArray (1 of 2) generates array with proper length");
 
    // Verify equality of each array item
    for (let i in expected) {
      assert.equal(actual[i], expected[i], `Content of generated array element ${i}`);
    }
 });

 QUnit.test('buildDistributionArray(["88", "84", "83", "88", "89", "78", "81", "82", "89"]) returns [0, 8, 1, 0, 0]', function(assert) {
   
    assert.ok(typeof buildDistributionArray === 'function', 'buildDistributionArray() is defined');
    
    //            B     B     B     B     B     C     B     B     B
    const input = ["88", "84", "83", "88", "89", "78", "81", "82", "89"];
    const expected = [0, 8, 1, 0, 0];
    const actual = buildDistributionArray(input);
 
    assert.ok(Array.isArray(actual), "buildDistributionArray() returns an array");
 
    // Verify that the arrays are of equal length
    assert.equal(actual.length, expected.length,
      "buildDistributionArray (2 of 2) generates array with proper length");
 
    // Verify equality of each array item
    for (let i in expected) {
      assert.equal(actual[i], expected[i], `Content of generated array element ${i}`);
    }
 });

 QUnit.test('setTableContent("88 64 73 77 81 79 14 92 71") produces correct graph', function(assert) {
    const letters = ["A", "B", "C", "D", "F"];
 
     // Create a string with grades
     const input = "88 64 73 77 81 79 14 92 71";
     // Note: input string has 1 A, 2 Bs, 4 Cs, 1 D and 1 F
 
    // Get the table and assert non-null
     const tblEl = document.getElementById("distribution-table");
     assert.ok(tblEl !== null,
         "Table element with id=\"distribution-table\" exists");
         
     // Remove any potential table contents which could be present if
     // student calls setTableContent() themselves and is appending
     // to table instead of setting table contents.
     tblEl.rows[0].innerHTML = '';
     
     assert.ok(typeof setTableContent === 'function', 'setTableContent() is defined');
 
     setTableContent(input);
 
     // Assert that the table has 3 rows
     assert.equal(tblEl.rows.length, 3, "Table has 3 rows");
 
     // Row must have 5 cells
     const row1 = tblEl.rows[0];
     assert.equal(row1.cells.length, 5, 'First table row has 5 cells');
 
     // Verify cell content
     const expectedHeights = ["10px", "20px", "40px", "10px", "10px"];
     expectedHeights.forEach((expectedHeight, i) => {
       const cell = row1.cells[i];
 
        // The first child in each cell must be an HTMLDivElement
        const divChild = cell.children[0];
        assert.ok(divChild instanceof HTMLDivElement, 
             "First child in cell is a <div>");
 
        // The height must match the expected
        assert.equal(divChild.style.height, expectedHeight,
             `<div> for '${letters[i]}' bar graph has correct height`);
 
        // Note: The aspect of the assignment that asks for a different CSS 
        // class for each bar so that each has a different color is mainly 
        // for the student's visual benefit and is not verified here.
    });
 });

 QUnit.test('setTableContent("99 66 65 77 90 95") produces correct graph', function(assert) {
    const letters = ["A", "B", "C", "D", "F"];
 
     // Create a string with grades
     const input = "99 66 65 77 90 95";
 
    // Get the table and assert non-null
     const tblEl = document.getElementById("distribution-table");
     assert.ok(tblEl !== null,
         "Table element with id=\"distribution-table\" exists on page");
         
     // Remove any potential table contents which could be present if
     // student calls setTableContent() themselves and is appending
     // to table instead of setting table contents.
     tblEl.rows[0].innerHTML = '';
         
     assert.ok(typeof setTableContent === 'function', 'setTableContent() is defined');
     
     setTableContent(input);
 
     // Assert that the table has 3 rows
     assert.equal(tblEl.rows.length, 3, "Table has 3 rows");
 
     // Row must have 5 cells
     const row1 = tblEl.rows[0];
     assert.equal(row1.cells.length, 5, 'First table row has 5 cells');
 
     // Verify cell content
     const expectedHeights = ["30px", "0px", "10px", "20px", "0px"];
     expectedHeights.forEach((expectedHeight, i) => {
       const cell = row1.cells[i];
 
        // The first child in each cell must be an HTMLDivElement
        const divChild = cell.children[0];
        assert.ok(divChild instanceof HTMLDivElement, 
             "First child in cell is a <div>");
 
        // The height must match the expected
        assert.equal(divChild.style.height, expectedHeight,
             `<div> for '${letters[i]}' bar graph has correct height`);
 
        // Note: The aspect of the assignment that asks for a different CSS 
        // class for each bar so that each has a different color is mainly 
        // for the student's visual benefit and is not verified here.
    });
 });

 QUnit.test('setTableContent("88 64 73 77 81 79 14 92 71") produces correct distribution', function(assert) {
    const letters = ["A", "B", "C", "D", "F"];
 
     // Create a string with grades
     const input = "88 64 73 77 81 79 14 92 71";
     // Note: input string has 1 A, 2 Bs, 4 Cs, 1 D and 1 F
 
     // Get the table and assert non-null
     const tblEl = document.getElementById("distribution-table");
     assert.ok(tblEl !== null,
         "Table element with id=\"distribution-table\" exists on page");
         
     // Remove any potential table contents which could be present if
     // student calls setTableContent() themselves and is appending
     // to table instead of setting table contents.
     tblEl.rows[2].innerHTML = '';
         
     assert.ok(typeof setTableContent === 'function', 'setTableContent() is defined');
 
     setTableContent(input);
 
     // Assert that the table has 3 rows
     assert.equal(tblEl.rows.length, 3, "Table has 3 rows");
 
     // Third row should have cells containing: 1, 2, 4, 1, 1
     const row3 = tblEl.rows[2];
     assert.equal(row3.cells.length, 5, 'Third table row has 5 cells');
     const row3Expected = ["1", "2", "4", "1", "1"];
     row3Expected.forEach((expected, i) => {
         assert.equal(row3.cells[i].textContent, expected,
             `Row 3, cell ${i + 1} content is ${expected}`);
    });
 });

 QUnit.test('setTableContent("99 66 65 77 90 95") produces correct distribution', function(assert) {
    // Create a string with grades
    const input = "99 66 65 77 90 95";
	// Note: input string has 1 A, 2 Bs, 4 Cs, 1 D and 1 F

    // Get the table and assert non-null
	const tblEl = document.getElementById("distribution-table");
	assert.ok(tblEl !== null,
	    "Table element with id=\"distribution-table\" exists on page");
	    
	// Remove any potential table contents which could be present if
	// student calls setTableContent() themselves and is appending
	// to table instead of setting table contents.
	tblEl.rows[2].innerHTML = '';
	    
    assert.ok(typeof setTableContent === 'function', 'setTableContent() is defined');

	setTableContent(input);

	// Assert that the table has 3 rows
	assert.equal(tblEl.rows.length, 3, "Table has 3 rows");

	// Third row should have cells containing: 3, 0, 1, 2, 0
	const row3 = tblEl.rows[2];
	assert.equal(row3.cells.length, 5, 'Third table row has 5 cells');
	const row3Expected = ["3", "0", "1", "2", "0"];
	row3Expected.forEach((expected, i) => {
    	assert.equal(row3.cells[i].textContent, expected,
		    `Row 3, cell ${i + 1} content is ${expected}`);
   });
});