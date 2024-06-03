const { chromium } = require('playwright');

module.exports = {
    //new page initialization, defaults to homepage
    newPage : async (url = 'https://www.amazon.com/') => {
        const browser = await chromium.launch({ headless: true })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
        // Reload the page because sometimes the wrong version of the page loads. I don't know why.
        await page.reload();
        return page;
    }
}