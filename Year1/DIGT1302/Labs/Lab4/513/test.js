QUnit.test('body has proper styles', function(assert) {
    const body = document.querySelector("body");
    const bodyStyle = window.getComputedStyle(body);
 
    assert.equal(bodyStyle.fontFamily.toLowerCase(), "arial",
       "Font family uses correct font");
 
    assert.ok(bodyStyle.background.includes("radial-gradient"), "radial-gradient() function is called");
 
    const regex = /radial-gradient\(.+?\)\)/;
    const radialMatch = bodyStyle.background.match(regex);
    
    // Color might be specified as "rgb(255, 255, 255)" or "white", so search for both possibilities
    let colorMatch = bodyStyle.background.match(/radial-gradient\((rgb.+?\)),/);   
    
    if (colorMatch !== null && colorMatch.length === 2) {
       assert.equal(colorMatch[1], "rgb(255, 255, 255)", "First radial gradient color is white");
    }
    else {
       colorMatch = bodyStyle.background.match(/radial-gradient\((.+?),/);
       assert.equal(colorMatch[1], "white", "First radial gradient color is white");
    }
    
    colorMatch = bodyStyle.background.match(/radial-gradient\(.+?, (rgb.+\))\)/);
    
    if (colorMatch !== null && colorMatch.length === 2) {
       assert.equal(colorMatch[1], "rgb(211, 211, 211)", "Second radial gradient color is light gray");
    }
    else {
       colorMatch = bodyStyle.background.match(/radial-gradient\(.+, (\w+?)\)/);
       assert.equal(colorMatch[1], "lightgray", "Second radial gradient color is light gray");
    }
 });

 QUnit.test('h1 has proper styles', function(assert) {
    const h1 = document.querySelector("h1");
    const h1Style = window.getComputedStyle(h1);
 
    const fontColor = h1Style.color.toLowerCase();
    
    if (fontColor.includes("rgb")) {
       assert.equal(fontColor, "rgb(0, 0, 139)", "Font color is dark blue");
    }
    else {
       assert.equal(fontColor, "darkblue", "Font color is dark blue");
    }
 
    assert.equal(h1Style.padding, "8px", "Padding is 8px");
    
    assert.ok(h1Style.textShadow !== "none", "text-shadow property exists");
    
    let remainingValues = "";
    const colorMatch = h1Style.textShadow.match(/rgb\(.+?\)/);
    if (colorMatch !== null ) {
       assert.equal(colorMatch[0], "rgb(128, 128, 128)", "Shadow color is gray");
       remainingValues = h1Style.textShadow.replace(colorMatch[0] + " ", "");
    }
    else {
       assert.equal(h1Style.textShadow, "gray", "Shadow color is gray");
       remainingValues = h1Style.textShadow.remove("gray ");
    }
    
    // "5px 5px 6p" remain
    remainingValues = remainingValues.split(" ");
    assert.ok(remainingValues.length === 3, "offset-x, offset-y, and blur-radius are specified");
    assert.equal(remainingValues[0], "5px", "offset-x is 5px");
    assert.equal(remainingValues[1], "5px", "offset-y is 5px");
    assert.equal(remainingValues[2], "6px", "blur-radius is 6px");
 });

 QUnit.test('p has proper styles (part 1)', function(assert) {
    const paras = document.querySelectorAll("p");
    for (let i = 0; i < 4; i++) {
       const paraStyle = window.getComputedStyle(paras[i]);
       
       const fontColor = paraStyle.color.toLowerCase();            
       if (fontColor.includes("rgb")) {
          assert.equal(fontColor, "rgb(255, 255, 255)", `Paragraph ${i + 1} font color is white`);
       }
       else {
          assert.equal(fontColor, "white", `Paragraph ${i + 1} font color is white`);
       }
    
       assert.equal(paraStyle.width, "350px", `Paragraph ${i + 1} width is 350px`);      
       assert.equal(paraStyle.fontSize, "16px", `Paragraph ${i + 1} font size is 16px`);      
       
       assert.ok(paraStyle.background.includes("linear-gradient"), 
          `Paragraph ${i + 1} linear-gradient() function is called`);
 
       /* Browsers modify linear-gradient values internally, so the best we can do is 
          just confirm linear-gradient() function is called. */
 
       // Look for property in "linear-gradient(to right bottom, darkblue, blue)"
       /*
       // The following code does not work in the new Advanced Labs platform.
       const regex = /linear-gradient\((.+?)\)/;
       const gradientMatch = paraStyle.background.match(regex);
       
       const args = gradientMatch[1].split(", ");  
       assert.equal(args.length, 3, `Paragraph ${i + 1}'s background uses linear-gradient with three values`);
       
       assert.equal(args[0], "to right bottom", 
          `Paragraph ${i + 1} linear-gradient direction goes towards bottom-right corner`);
          
       assert.equal(args[1], "darkblue", `Paragraph ${i + 1} linear-gradient top-left is dark blue`);      
       assert.equal(args[2], "skyblue", `Paragraph ${i + 1} linear-gradient bottom-right is sky blue`);
       */
    }
 });


 QUnit.test('p has proper styles (part 2)', function(assert) {
    const paras = document.querySelectorAll("p");
    for (let i = 0; i < 4; i++) {
       const paraStyle = window.getComputedStyle(paras[i]);
       
       assert.equal(paraStyle.padding, "10px", `Paragraph ${i + 1} padding is 10px`);
       
       assert.ok(paraStyle.boxShadow !== "none",  `Paragraph ${i + 1} box-shadow property exists`);
       
       // boxShadow is "rgb(128, 128, 128) 5px 5px 6px 0px"
       
       // Extract color
       const regex = /rgb\(.+?\)/;
       const colorMatch = paraStyle.boxShadow.match(regex);
       assert.equal(colorMatch, "rgb(128, 128, 128)", `Paragraph ${i + 1} box-shadow color is gray`);
       
       const remainingValues = paraStyle.boxShadow.replace(colorMatch + " ", "");
       
       const args = remainingValues.split(" ");      
       assert.ok(args.length === 4, 
          `Paragraph ${i + 1} box-shadow specifies offset-x, offset-y, and spread-radius`);
          
       assert.equal(args[0], "5px", `Paragraph ${i + 1} box-shadow offset-x is 5px`);
       assert.equal(args[1], "5px", `Paragraph ${i + 1} box-shadow offset-y is 5px`);
       assert.equal(args[2], "6px", `Paragraph ${i + 1} box-shadow spread-radius is 6px`);
       
       assert.equal(paraStyle.borderRadius, "5px",  `Paragraph ${i + 1} border-radius is 5px`);
    }
 });