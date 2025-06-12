QUnit.test("Image styles", function (assert) {
  // Expect both images to have width of 300px.
  Array.from(document.getElementsByTagName("img")).forEach((imgTag, index) => {
    assert.equal(
      window.getComputedStyle(imgTag, null).getPropertyValue("width"),
      "300px",
      `Width of image ${index + 1}`
    );
  });
});

QUnit.test("Header styles", function (assert) {
  const expectedStyles = {
    padding: "5px",
    "font-family": "arial",
    "font-size": "24px",
    color: "rgb(255, 255, 255)",
    "background-color": "rgb(255, 0, 0)",
  };
  const h1Styles = window.getComputedStyle(
    document.getElementsByTagName("h1")[0],
    null
  );

  for (const expectedStyle in expectedStyles) {
    assert.equal(
      h1Styles.getPropertyValue(expectedStyle).toLowerCase(),
      expectedStyles[expectedStyle],
      `${expectedStyle} of <h1> element`
    );
  }
});

QUnit.test("Author name and date styles", function (assert) {
  const expectedStyles = {
    "font-family": "arial",
    "font-size": "12px",
    color: "rgb(128, 128, 128)",
  };
  const nameDateStyles = window.getComputedStyle(
    document.querySelector("p#author-name-and-date"),
    null
  );

  for (const expectedStyle in expectedStyles) {
    assert.equal(
      nameDateStyles.getPropertyValue(expectedStyle).toLowerCase(),
      expectedStyles[expectedStyle],
      `${expectedStyle} of <p> element with id of author-name-and-date`
    );
  }
});

QUnit.test("Article text styles", function (assert) {
  // Check <p> tag styles.
  const pTags = document.getElementsByTagName("p");
  const expectedStyles = {
    "font-family": '"times new roman"',
    "font-size": "16px",
    color: "rgb(47, 79, 79)",
  };

  for (let i = 1; i < pTags.length; i++) {
    const pStyles = window.getComputedStyle(pTags[i], null);

    for (const expectedStyle in expectedStyles) {
      assert.equal(
        pStyles.getPropertyValue(expectedStyle).toLowerCase(),
        expectedStyles[expectedStyle],
        `${expectedStyle} of <p> element ${i + 2}`
      );
    }
  }

  // Check <ol> tag styles.
  const olStyles = window.getComputedStyle(
    document.getElementsByTagName("ol")[0],
    null
  );

  for (const expectedStyle in expectedStyles) {
    assert.equal(
      olStyles.getPropertyValue(expectedStyle).toLowerCase(),
      expectedStyles[expectedStyle],
      `${expectedStyle} of <ol> element`
    );
  }
});

QUnit.test("Link styles", function (assert) {
  const expectedStyles = {
    "font-family": "arial",
    "font-size": "12px",
    color: "rgb(0, 0, 255)",
  };

  Array.from(document.getElementsByTagName("a")).forEach((aTag, index) => {
    const aStyles = window.getComputedStyle(aTag, null);

    for (const expectedStyle in expectedStyles) {
      assert.equal(
        aStyles.getPropertyValue(expectedStyle).toLowerCase(),
        expectedStyles[expectedStyle],
        `${expectedStyle} of <a> element ${index + 1}`
      );
    }
  });
});
