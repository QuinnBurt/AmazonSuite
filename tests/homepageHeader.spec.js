// @ts-check
const { test, expect } = require('@playwright/test');
const locators = require('../locators');
const helper = require('../helper');

test ('logo button redirects to main page', async () => {
    const page = await helper.newPage();

    try {
        await page.locator(locators.hLogo).click();

        expect(page.url()).toBe('https://www.amazon.com/ref=nav_logo')
    }

    catch(err) {
        page.close();
        test.fail();
    }
});

test ('update location button opens location modal', async () => {
    const page = await helper.newPage(locators.homeURL);

    try {
        await page.locator(locators.hLocationButton).click();

        const modal = await page.locator(locators.hLocationModal);

        await expect(modal).toBeEnabled();
    }

    catch(err){
        page.close();
        test.fail();
    }
});
