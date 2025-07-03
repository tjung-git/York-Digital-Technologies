QUnit.test('Test first <img>', function(assert) {
   
    // Make sure only three images exist in solution
    const imageElements = document.querySelectorAll('img');
    assert.equal(imageElements.length, 3, 'Correct number of <img> elements exist');
 
    // Get first image
    const img = imageElements[0];   
    assert.ok(img.srcset !== null && img.srcset !== '', 'First <img> has srcset attribute');  
    
    // Items must have comma separator
    const srcsetItems = img.srcset.split(/\s*,\s*/);
 
    assert.ok(srcsetItems.length === 2, 'One comma separates two srcset attribute values');
    
    // Two parts must have at least one space
    const firstItem = srcsetItems[0].split(/\s+/);
    assert.ok(firstItem.length === 2, 'Space separates first srcset attribute value');
    
    let items = [{ img:'', name:'' }, { img:'', name:'' }];
    
    if (firstItem[0] === 'images/egypt_1200.jpg') {
       items[0].img = firstItem[0];
       items[0].dpr = firstItem[1];
    }
    else {
       items[1].img = firstItem[0];
       items[1].dpr = firstItem[1];
    }
       
    const secondItem = srcsetItems[1].split(/\s+/);
    assert.ok(firstItem.length === 2, 'Space separates second srcset attribute value');
    
    if (secondItem[0] === 'images/egypt_1200.jpg') {
       items[0].img = secondItem[0];
       items[0].dpr = secondItem[1];
    }
    else {
       items[1].img = secondItem[0];
       items[1].dpr = secondItem[1];
    }
    
    assert.equal(items[0].img, 'images/egypt_1200.jpg', 'srcset specifies correct filename');
    assert.equal(items[0].dpr, '2x', 'srcset specifies correct DPR');
    assert.equal(items[1].img, 'images/egypt_1800.jpg', 'srcset specifies correct filename');
    assert.equal(items[1].dpr, '3x', 'srcset specifies correct DPR');
    
 });

 QUnit.test('Test second <img>', function(assert) {

    // Make sure only three images exist in solution
    const imageElements = document.querySelectorAll('img');
    assert.equal(imageElements.length, 3, 'Correct number of <img> elements exist');
 
    // Get second image
    const img = imageElements[1];   
    assert.ok(img.srcset !== null && img.srcset !== '', 'Second <img> has srcset attribute');  
    
    // Items must have comma separator
    const srcsetItems = img.srcset.split(/\s*,\s*/);
 
    assert.ok(srcsetItems.length === 3, 'Two commas separate three srcset attribute values');
    
    const images = [
       { name: 'images/luxor_600.jpg', width: '600w', actual: null },
       { name: 'images/luxor_800.jpg', width: '800w', actual: null },
       { name: 'images/luxor_1200.jpg', width: '1200w', actual: null }
    ];
    
    for (let i = 0; i < srcsetItems.length; i++) {
       // Values should be separated by at least one space
       const items = srcsetItems[i].split(/\s+/);
       
       for (const thisImg of images) {
          if (thisImg.name === items[0]) {
             thisImg.actual = items[1];
          }
       }
    }
    
    // Verify assigned widths are correct
    for (const thisImg of images) {
       assert.equal(thisImg.actual, thisImg.width, `Image ${thisImg.name} assigned correct width`);         
    }
    
    assert.ok(img.sizes !== null && img.sizes !== '', '<img> sizes attribute found');  
    
    // Items must have comma separator
    const sizesItems = img.sizes.split(/\s*,\s*/);
       
    assert.ok(sizesItems.length === 3, 'Two commas separate three sizes attribute values');
    
    const sizes = ['(min-width: 700px) 600px', '(min-width: 500px) 400px', '200px'];
    const sizesNoSpace = ['(min-width:700px) 600px', '(min-width:500px) 400px', '200px'];
    
    for (let i = 0; i < sizesItems.length; i++) {      
       // Replace multiple spaces with single space
       let item = sizesItems[i].replace(/\s+/g, " ");
       if (item === sizesNoSpace[i]) {
          assert.equal(item, sizesNoSpace[i], 'Correct sizes attribute value specified');
       }
       else {
          assert.equal(item, sizes[i], 'Correct sizes attribute value specified');      
       }
    }
    
 });


 QUnit.test('Test third image', function(assert) {

    // Make sure only three images exist in solution
    const imageElements = document.querySelectorAll('img');
    assert.equal(imageElements.length, 3, 'Correct number of <img> elements exist');
 
    // Get third image
    const img = imageElements[2];   
    assert.ok(img.parentElement !== null && img.parentElement.nodeName.toLowerCase() === 'picture', 
       'Third <img> is child of <picture> element');  
    
    const picture = img.parentElement;
    
    assert.equal(picture.children.length, 2, '<picture> has two child elements');
    assert.ok(picture.children[0].nodeName.toLowerCase() === 'source' ||
       picture.children[1].nodeName.toLowerCase() === 'source', '<picture> has <source> child element');
    
    let source = picture.children[0].nodeName.toLowerCase() === 'source' ? picture.children[0] : picture.children[1];
 
    assert.equal(source.media, '(min-width: 500px)', '<source> media attribute has correct value');
    assert.equal(source.srcset, 'images/hotel_wide.jpg', '<source> srcset attribute has correct value');
       
 });


 QUnit.test('Test SVG image', function(assert) {
   
    let foundRule = null;
    
    for (let rule of document.styleSheets[0].cssRules) {
       if (rule.selectorText === 'ul') {
          foundRule = rule;
       }
    }
    
    assert.ok(foundRule !== null, 'ul rule found in styles.css');
    
    assert.equal(foundRule.style.backgroundImage, 'url("images/check.svg")', 'Background image is correct');
    assert.equal(foundRule.style.backgroundPosition, 'center center', 'Background position is correct');
    assert.equal(foundRule.style.backgroundRepeat, 'no-repeat', 'Background repeat is correct');
    assert.equal(foundRule.style.backgroundSize, '60vw', 'Background size is correct');
    
 });