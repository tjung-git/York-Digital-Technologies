//Section 1
QUnit.test("Steve Jobs quote", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements for this question's answer
  const elements = getQuestionElements(0);

  // Make sure at least elements exist between
  assert.equal(
    elements.length,
    2,
    "Two paragraph elements exist for section 1's answer."
  );

  // Make sure both are instances of HTMLParagraphElement
  elements.forEach((element, i) => {
    assert.ok(
      element instanceof HTMLParagraphElement,
      `Element ${i + 1} in section 1's answer is a paragraph.`
    );
  });

  // Verify text content
  const expectedTexts = [
    "Your work is going to fill a large part of your life, and the only way to " +
      "be truly satisfied is to do what you believe is great work. And the only way " +
      "to do great work is to love what you do. If you haven't found it yet, keep " +
      "looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "-- Steve Jobs",
  ];

  // Verify that 1st paragraph is in italics
  let ital = elements[0].querySelector("i");
  assert.ok(ital !== null, "First paragraph has an <i> element.");
  assert.equal(
    ital.innerText,
    expectedTexts[0],
    "Text content of <i> in first paragraph."
  );

  assert.equal(
    elements[1].innerText,
    expectedTexts[1],
    "Text content in second paragraph."
  );
});

//Section 2

QUnit.test("Ampersand in an HTML comment", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements in the document body corresponding to this question (question #2)
  const elements = getQuestionElements(1);

  // The first element must be a paragraph
  assert.ok(elements.length > 0, "Answer for section 2 is not empty.");
  assert.ok(
    elements[0] instanceof HTMLParagraphElement,
    "Answer for question is inside a <p> tag."
  );

  // The paragraph's innerText must match the form: <!-- & -->
  const text = elements[0].innerText;
  const re = /<\!--[ ]*&[ ]*-->/;

  // Update October 2020 based on instructor feedback:
  // Some students might use &#8209, which is a non-breaking hyphen and is different from the minus sign (-)
  if (text.indexOf("\u2011") !== -1) {
    assert.ok(
      false,
      "Text should not contain non-breaking hyphen (&#8209;) " +
        "and should instead use the '-' character."
    );
  } else {
    assert.ok(text.startsWith("<!--"), "Text starts with <!--");
    assert.ok(text.endsWith("-->"), "Text ends with -->");
    assert.ok(re.test(text), "Comment properly formed with ampersand inside.");
  }
});

//Section 3

QUnit.test("Paragraph using character entities", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements in the document body corresponding to this question (question #3)
  const elements = getQuestionElements(2);

  // The first element must be a paragraph
  assert.ok(elements.length > 0, "Answer for section 3 is not empty.");
  assert.ok(
    elements[0] instanceof HTMLParagraphElement,
    "Answer for question is inside a <p> tag."
  );

  // Use a DIV's innerHTML so that the browser parses the text
  const tmpDiv = document.createElement("div");
  tmpDiv.innerHTML = elements[0].innerText;

  // If the text is correct, the <div> will have a child p element
  const pTags = tmpDiv.getElementsByTagName("p");
  assert.ok(
    pTags.length > 0,
    "Paragraph markup successfully parses as valid HTML."
  );

  // Get the paragraph and verify content
  assert.equal(pTags[0].textContent, "Nice!", "Paragraph's content");
});

//Section 4

QUnit.test("Link to stuff.html (1 point)", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements corresponding to this section
  const elements = getQuestionElements(3);

  // Should have 2 paragraphs
  assert.equal(
    elements.length,
    2,
    "Answer for section 4 has two <p> elements."
  );
  const link1 = elements[0].querySelector("a");
  const link2 = elements[1].querySelector("a");

  // Check link in first para
  assert.ok(link1 !== null, "First <p> has an anchor tag.");
  assert.ok(
    link1.href.toString().endsWith("fixit.html"),
    "First anchor tag's href attribute is set to fixit.html."
  );
  assert.equal(link1.textContent, "Fix it", "First link text is correct.");

  // Check link in second para
  assert.ok(link2 !== null, "Second <p> has an anchor tag.");
  assert.ok(
    link2.href.toString().endsWith("fixit.html#garbage-disposal"),
    "Second anchor tag's href attribute is set to fixit.html#garbage-disposal."
  );
  assert.equal(
    link2.textContent,
    "Fix your garbage disposal",
    "Second link text is correct."
  );
});

//Section 5

QUnit.test("Link to zyBooks.com (1 point)", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements corresponding to this question
  const elements = getQuestionElements(4);

  // The first element must be an <a>
  assert.ok(elements.length > 0, "Answer for section 5 is not empty.");
  const a = elements[0];
  assert.ok(
    a instanceof HTMLAnchorElement,
    "Answer for section 5 uses an anchor tag that isn't enclosed in anything else."
  );

  // Verify the link's href
  assert.equal(
    a.href.toString().toLowerCase(),
    "https://www.zybooks.com/",
    "Anchor tag links to https://www.zybooks.com/."
  );

  // Verify that the anchor has a child img element
  let aImg = a.getElementsByTagName("img");
  assert.ok(aImg.length > 0, "Anchor tag has child <img> element.");
  aImg = aImg[0];

  // Verify that the image's src is zyBooks_logo.png
  assert.ok(
    aImg.src.toLowerCase().endsWith("zybooks_logo.png"),
    "Image for link is zyBooks_logo.png."
  );

  assert.equal(aImg.alt, "zyBooks logo", "zyBooks image has correct alt text.");
});

//Section 6

QUnit.test("Ordered list with nested unordered lists", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements corresponding to this question
  const elements = getQuestionElements(5);

  // The first element must be an <ol>
  assert.ok(elements.length > 0, "Answer for section 6 is not empty.");
  const ol = elements[0];
  assert.ok(
    ol instanceof HTMLOListElement,
    "Answer for section 6 uses a single ordered list element."
  );

  // The ordered list must have 2 children
  assert.equal(ol.children.length, 2, "Ordered list has two child elements.");

  // The first of the 2 child list items must say "Desktop" ...
  const li1 = ol.children[0];
  assert.ok(
    li1.innerText.indexOf("Desktop") === 0,
    "First list item starts with text 'Desktop'."
  );
  // ... then have a child <ul>, ...
  const li1uls = li1.getElementsByTagName("ul");
  assert.ok(
    li1uls.length > 0,
    "'Desktop' list item contains unordered sublist."
  );
  const li1ul = li1uls[0];
  // ... which is the unordered list: Linux, Mac OS, Windows
  let expectedTexts = ["Linux", "Mac OS", "Windows"];
  expectedTexts.forEach((expectedText, i) => {
    assert.equal(
      li1ul.children[i].innerText,
      expectedText,
      `'Desktop' list item #${i + 1} of 3 has text '${expectedText}'.`
    );
  });

  // The first of the 2 child list items must say "Mobile" ...
  const li2 = ol.children[1];
  assert.equal(
    li2.innerText.indexOf("Mobile"),
    0,
    "Second list item starts with text 'Mobile'."
  );
  // ... then have a child <ul>, ...
  const li2uls = li2.getElementsByTagName("ul");
  assert.ok(li2uls.length > 0, "'Mobile' list item contains unordered sublist");
  const li2ul = li2uls[0];
  // ... which is the unordered list: Android, iOS
  expectedTexts = ["Android", "iOS"];
  expectedTexts.forEach((expectedText, i) => {
    assert.equal(
      li2ul.children[i].innerText,
      expectedText,
      `'Mobile' list item #${i + 1} of 2 has text '${expectedText}'`
    );
  });
});

//Section 7

QUnit.test("3x3 table (3 points)", function (assert) {
  let getQuestionElements = function (questionIndex) {
    // Find the sections
    const sections = document.querySelectorAll("section");
    assert.equal(sections.length, 7, "Seven <section> elements exist.");

    // Get an array of elements in the section minus the h2
    let result = [];
    for (let node of sections[questionIndex].children) {
      if (node instanceof HTMLElement && node.tagName != "H2") {
        result.push(node);
      }
    }
    return result;
  };

  // Get elements corresponding to this question
  const elements = getQuestionElements(6);

  // The first element must be an <ol>
  assert.ok(elements.length > 0, "Answer for section 7 is not empty");
  let table = elements[0];
  assert.ok(
    table instanceof HTMLTableElement,
    "Answer for section 7 has a table as the first element"
  );

  // The table must have 3 rows
  assert.equal(table.rows.length, 3, "Table has 3 rows");

  // Row 1 must have a single cell...
  assert.equal(table.rows[0].cells.length, 1, "Table's first row has 1 cell");
  // ... with a colSpan of 3 ...
  assert.equal(
    table.rows[0].cells[0].colSpan,
    3,
    "Cell in table's first row has a column span of 3"
  );
  // ... and innerText starting with "1"
  assert.ok(
    table.rows[0].cells[0].innerText.indexOf("1") === 0,
    "Cell in table's first row has text '1'"
  );

  // Row 2 must have a 3 cells
  assert.equal(table.rows[1].cells.length, 3, "Table's second row has 3 cells");
  // The first of cell must have a rowSpan of 2 ...
  assert.equal(
    table.rows[1].cells[0].rowSpan,
    2,
    "First cell in table's second row has a row span of 2"
  );
  // ... and innerText starting with "2"
  assert.ok(
    table.rows[1].cells[0].innerText.indexOf("2") === 0,
    "First cell in table's second row has text '2'"
  );
  // The remaining 2 cells have text "3" and "4"
  assert.ok(
    table.rows[1].cells[1].innerText.indexOf("3") === 0,
    "Second cell in table's second row has text '3'"
  );
  assert.ok(
    table.rows[1].cells[2].innerText.indexOf("4") === 0,
    "Third cell in table's second row has text '4'"
  );

  // Row 3 must have a 2 cells
  assert.equal(table.rows[2].cells.length, 2, "Table's third row has 2 cells");
  // The 2 cells have text "5" and "6"
  assert.ok(
    table.rows[2].cells[0].innerText.indexOf("5") === 0,
    "First (middle) cell in table's third row has text '5'");
  assert.ok(
    table.rows[2].cells[1].innerText.indexOf("6") === 0,
    "Second (rightmost) cell in table's third row has text '6'");
});
