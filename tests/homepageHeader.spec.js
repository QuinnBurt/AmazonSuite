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
        console.log(err);
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
        console.log(err);
        page.close();
        test.fail();
    }
});

test ('language can be changed to spanish via language dropdown', async () => {
    const page = await helper.newPage(locators.homeURL);

    try {
        await page.locator(locators.hLangDropdown).hover();

        await page.locator(locators.hLangEsButton).click();

        await expect(page.url()).toBe('https://www.amazon.com/?language=es_US');
    }

    catch(err){
        console.log(err);
        page.close();
        test.fail();
    }
});

test ('clicking on sign in dropdown opens sign in page', async () => {
    const page = await helper.newPage(locators.homeURL);

    try {
        await page.locator(locators.hSignInDropdown).click();

        await expect(page.url()).toContain('https://www.amazon.com/ap/signin');
    }

    catch(err){
        console.log(err);
        page.close();
        test.fail();
    }
});

test ('clicking on sign in button inside dropdown opens sign in page', async () => {
    const page = await helper.newPage(locators.homeURL);

    try {
        await page.locator(locators.hSignInDropdown).hover();

        await page.locator(locators.hSignInDropdownButton).click();

        await expect(page.url()).toContain('https://www.amazon.com/ap/signin');
    }

    catch(err){
        console.log(err);
        page.close();
        test.fail();
    }
});

test ('clicking the Cart button redirects to cart page', async () => {
    const page = await helper.newPage(locators.homeURL);

    try {
        await page.locator(locators.hCartButton).click();

        await expect(page.url()).toBe('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');
    }

    catch(err){
        console.log(err);
        page.close();
        test.fail();
    }
});