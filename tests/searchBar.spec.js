// @ts-check
const { test, expect } = require('@playwright/test');
const locators = require('../locators');
const helper = require('../helper');

test ('search bar has functional input', async () => {
    const page = await helper.newPage();

    try {
        const searchBar = await page.locator(locators.sbSearchBar);

        await searchBar.fill('Abcd1234');
        await expect(searchBar).toHaveValue('Abcd1234');
    }

    catch(err) {
        console.log(err);
        page.close();
        test.fail();
    }
});

test ('search function results in correct query', async () =>{
    const page = await helper.newPage();
  
    try {
        const searchBar = await page.locator(locators.sbSearchBar);
        const searchButton = await page.locator(locators.sbSearchButton);

        await searchBar.fill('Abcd1234');

        await searchButton.click();

        await expect(page.url()).toContain('Abcd1234');
    }

    catch(err) {
        console.log(err);
        page.close();
        test.fail();
    }
});

test ('"search in dropdown" results in department specific search', async () =>{
    const page = await helper.newPage();

    try {
        const searchBar = await page.locator(locators.sbSearchBar);
        const searchButton = await page.locator(locators.sbSearchButton);
        const searchDropdown = await page.locator(locators.sbSearchDropdown);

        await searchBar.fill('Abcd1234');

        await searchDropdown.selectOption('search-alias=amazon-pharmacy');

        await searchButton.click();

        await expect(page.url()).toContain('amazon-pharmacy');
    }
  
    catch(err){
        console.log(err);
        page.close()
        test.fail();
    }
})