// USING PLAYWRIGHT TO HANDLE CRAWLING FOR LINKS
import playwright from 'playwright';
import VA from './models/vaModel.js';
import chunk from 'lodash/chunk.js';
// https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/chunk.js#L21
// import formattedVAData from '../utils/formatVAData.js'

export const crawler = async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  //*GET DATA FROM MongoDB
  const data = await VA.find();
  chunk(data,26)
  const vaData = data.map(async (item) => {
    const page = await context.newPage();
    // await page.goto(item.vaWebsite);
    await page.goto(item.vaWebsite, { timeout: 0, waitUntil:'commit' });
    //*GET ALL A TAGS ON WITH HORSE
    const linkUrls = await page.$$eval('a', (elements) =>
      elements
        .map((element) =>
          element?.href?.includes('horses') ||
          element?.href?.includes('horse') ||
          element?.href?.includes('equine')
            ? element?.href
            : undefined
        )
        .filter((item) => item)
    );

    if (data !== undefined) {
      // vaData;
      return await VA.findOneAndUpdate(item._id, {
        $set: { scrapedUrlResults: linkUrls},
      }).then((response) => console.log('RESPONSE---->', response));
    }
    console.log('LINKURLS', linkUrls);
    console.log("FINISHED")
    // await browser.close();
  });
};
