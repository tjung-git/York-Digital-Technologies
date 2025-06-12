QUnit.test("Test for <header>", function (assert) {
  let header = document.querySelectorAll("body > header");
  assert.ok(header.length === 1, "<header> exists in <body>");
});

QUnit.test("Test header's <h1> tag", function (assert) {
  let h1 = document.querySelectorAll("header > h1");
  assert.ok(h1.length === 1, "<h1> exists in <header>");

  let text = h1[0].innerText;
  assert.ok(text.length > 0, "<h1> contains text");
});

QUnit.test("Test for <main> tag", function (assert) {
  let main = document.querySelectorAll("body > main");
  assert.ok(main.length === 1, "<main> exists in <body>");
});

QUnit.test("Test main's first <p>", function (assert) {
  let para = document.querySelectorAll("main > p");
  assert.ok(para.length >= 1, "<p> exists in <main>");
  assert.ok(para[0].innerText.length >= 1, "<p> contains text");
});

QUnit.test("Test main's second <p>", function (assert) {
  const para = document.querySelectorAll("main > p");

  // Finding more than 2 paras can happen if <ol> or <ul> is used inside <p> element,
  // so do some more inspecting to see if this could be the problem.
  if (para.length > 2) {
    let lists = document.querySelectorAll("main > ol");
    if (lists.length > 0) {
      assert.equal(
        para.length,
        2,
        "Number of <p> elements in <main>. " +
          "Warning: Placing an <ol> inside of a <p> element can cause the browser to create " +
          '"phantom" <p> elements. <ol> should only be used OUTSIDE of <p> elements.'
      );
    }

    lists = document.querySelectorAll("main > ul");
    if (lists.length > 0) {
      assert.equal(
        para.length,
        2,
        "Number of <p> elements in <main>. " +
          "Warning: Placing an <ul> inside of a <p> element can cause the browser to create " +
          '"phantom" <p> elements. <ul> should only be used OUTSIDE of <p> elements.'
      );
    }
  }

  assert.ok(para.length >= 2, "Second <p> exists in <main>");
  const link = para[1].querySelectorAll("a");
  assert.ok(link.length >= 1, "Second <p> contains at least one <a> element");
  assert.ok(link[0].getAttribute("href") !== null, "<a> has href attribute");
});

QUnit.test("Test <footer>", function (assert) {
  const footers = document.querySelectorAll("body > footer");
  assert.ok(footers.length === 1, "<footer> exists in <body>");

  const paras = footers[0].querySelectorAll("p");
  assert.equal(paras.length, 1, "<footer> contains a single <p>");
  assert.ok(paras[0].innerText.length >= 1, "<p> in <footer> contains text");
});
