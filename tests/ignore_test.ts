Feature('testing scenarios');

Scenario('Ignore element for screenshot visual diff', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com');
  // await I.scrollTo('[href*="/dropdown"]')
  I.wait(1);
  // I.scrollTo(0, 120);
  await I.saveScreenshot('I_FRAMES_test1.png');
  await I.seeVisualDiff('I_FRAMES_test1.png', { ignoredElement: '[href*="/dropdown"]' });
});

Scenario('Ignore all same elements', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com');
  await I.saveScreenshot('MULTIPLE_pw.png');
  await I.seeVisualDiff('MULTIPLE_pw.png', { ignoredQueryElementAll: '//ul/li/a' });
});

Scenario('Ignore 2 elements for screenshot visual diff', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/shadowdom');
  I.saveScreenshot('imageAA.png');
  await I.seeVisualDiff('imageAA.png', { ignoredElement: { shadow: ['my-paragraph'] } });
});

// xScenario('my screenshot test', async ({ I }) => {
//   I.amOnPage('http://the-internet.herokuapp.com/');
//   I.saveScreenshot('SHADOW_1.png', true)
//   //I.seeElement({ shadow: ['my-paragraph'] })
//   //I.waitForVisible({ shadow: ['my-paragraph'] }, 5)
//   //I.dontSee('My default text', { shadow: ['my-paragraph', 'p'] })
//   //I.see("Let's have some different text!", { shadow: ['my-paragraph', 'p'] })
//  // await I.seeVisualDiff('SHADOW.png', { ignoredElement: "{ shadow: ['my-paragraph', 'p'] }" });
// });

// Feature('ignore something with ShadowDOM');

Scenario('IgnoredElement with shadowDOM', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/shadowdom');
  I.saveScreenshot('shadow_ignoredElement.png');
  await I.seeVisualDiff('shadow_ignoredElement.png', { ignoredElement: { shadow: ['my-paragraph'] } });
  I.amOnPage('https://the-internet.herokuapp.com/shadowdom');
  I.wait(4);
});

Scenario('IgnoredElements with shadowDOM', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/shadowdom');
  I.saveScreenshot('shadow_ignoredElements.png');
  await I.seeVisualDiff('shadow_ignoredElements.png', { ignoredElements: [{ shadow: ['my-paragraph'] }, { shadow: ['my-paragraph', 'p'] }] });
});

Scenario('IgnoredQueryElementAll with shadowDOM', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/shadowdom');
  I.saveScreenshot('shadow_ignoredQueryElementAll.png');
  await I.seeVisualDiff('shadow_ignoredQueryElementAll.png', { ignoredQueryElementAll: { shadow: ['my-paragraph'] } });
});

// Scenario.only('See visual diff with global tolerance', async ({ I }) => {
//   I.amOnPage('https://the-internet.herokuapp.com/');
//   I.saveScreenshot('ABC.png');
//   await I.seeVisualDiff('ABC.png', { tolerance: 0.5 });
//   I.amOnPage('https://the-internet.herokuapp.com/shadowdom');
//   I.wait(4);
// });

Scenario('Shadow test', async ({ I }) => {
  I.amOnPage('http://the-internet.herokuapp.com/shadowdom');
  I.waitForElement({ shadow: ['my-paragraph'] });
  I.waitForVisible({ shadow: ['my-paragraph'] }, 5);
  I.dontSee('My default text', { shadow: ['my-paragraph', 'p'] });
  I.see("Let's have some different text!", { shadow: ['my-paragraph', 'p'] });
  I.wait(2);
});

Scenario('Check context menu page with screenshot visual diff', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/context_menu');
  I.see('Context Menu');
  await I.saveScreenshot('VISUAL_TEST.png');
  await I.seeVisualDiff('VISUAL_TEST.png');
});

Scenario('ignoring selectorov v selectore', async ({ I }) => {
  I.amOnPage('https://www.seznam.cz');
  // screenshotElement(selector, name)
  await I.screenshotElement('.draggable-content', 'TUKTUK.png');
  I.wait(1);
  await I.seeVisualDiffForElement('.draggable-content', 'TUKTUK.png');
  // await I.seeVisualDiffForElement('h2.d-flex.align-items-center.gadget__title','moj_element.png')
  // await I.seeVisualDiffForElement('moj_element.png', {ignoredElement: 'h2.d-flex.align-items-center.gadget__title' })
});

Scenario('SHIT TASK: context menu ignorovanie elementu v elemente', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/context_menu');
  // skoro??
  // await I.saveScreenshot('MUHAHA.png');
  // await I.seeVisualDiff('MUHAHA.png', { ignoredElement: '#content' });
  // element image screenshoted to root/output
  await I.screenshotElement('#content', 'SHIT11.png');
  await I.seeVisualDiffForElement('#content', 'SHIT11.png', { ignoredElement: '#hot-spot' });
});

Scenario('SHITT TASK: context menu ignorovanie elementu v elemente', async ({ I }) => {
  // vypada že ffunguje
  I.amOnPage('https://the-internet.herokuapp.com/drag_and_drop');
  // element image screenshoted to root/output
  await I.screenshotElement('.no-js', 'column.png');
  await I.seeVisualDiffForElement('.no-js', 'column.png', { ignoredElement: '#column-b' });
});

Scenario('SHIT TASK: checkboxy', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
  // element image screenshoted to root/output
  await I.screenshotElement('#content', 'SHI__.png');
  await I.seeVisualDiffForElement('#content', 'SHI__.png', { ignoredElement: '#checkboxes' });
});

Scenario('fdfdfdIgnore element for screenshot visual diff', async ({ I }) => {
  I.amOnPage('https://the-internet.herokuapp.com/context_menu');
  I.saveScreenshot('IGNORED.png');
  await I.seeVisualDiff('IGNORED.png', { ignoredElement: '#hot-spot' });
});

Scenario('ignoredElements WTF IS THIS SHIT pre screenovanie elementov', async ({ I }) => {
  // bullshit zas polovica nejde edit: ide, som debil
  I.amOnPage('https://the-internet.herokuapp.com/dynamic_content');
  I.screenshotElement('div.example', 'IGNORED_ELEMENTS_IN_ELEMENT.png');
  await I.seeVisualDiffForElement('div.example', 'IGNORED_ELEMENTS_IN_ELEMENT.png', { ignoredElements: ['.large-2', 'div.row:nth-of-type(3)'] });
});

Scenario('blablabla kill meeee', async ({ I }) => {
  //
  I.amOnPage('https://the-internet.herokuapp.com/dynamic_content');
  // element image screenshoted to root/output
  await I.screenshotElement('div.example', 'suradniceeee1.png');
  await I.seeVisualDiffForElement('div.example', 'suradniceeee1.png', { ignoredElement: 'div.row:nth-of-type(3)' });
});

xScenario('blablabla kill meeee fuck this shit', async ({ I }) => {
  //
  I.amOnPage('https://the-internet.herokuapp.com/dynamic_content');
  // element image screenshoted to root/output
  await I.screenshotElement('div.example', 'suradniceeee2.png');
  await I.seeVisualDiffForElement('div.example', 'suradniceeee2.png', { ignoredQueryElementAll: '.large-2' });
});

Scenario.only('monday I have nothing to do', async ({ I }) => {
  //
  I.amOnPage('https://the-internet.herokuapp.com/dynamic_content');
  // element image screenshoted to root/output
  await I.screenshotElement('div.example', 'MONDAY1.png');
  await I.seeVisualDiffForElement('div.example', 'MONDAY1.png', { ignoredQueryElementAll: '.large-2' });
});
