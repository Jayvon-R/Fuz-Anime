// const puppeteer = require('puppeteer');

// const scrapeReviewsForAnime = async (animeName, numReviews) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to MyAnimeList and search for the anime
//   await page.goto('https://myanimelist.net/');
//   await page.type('#myanimelist-search-bar', animeName);
//   await page.keyboard.press('Enter');
//   await page.waitForSelector('.search-page .hoverinfo_trigger');

//   // Click on the first search result to go to the anime page
//   await page.click('.search-page .hoverinfo_trigger');

//   // Navigate to the Reviews section of the anime
//   await page.waitForSelector('.horiznav_active .list')
//   await page.click('.horiznav_active .list');

//   // Scrape reviews
//   const reviews = await page.evaluate((numReviews) => {
//     const reviewElements = document.querySelectorAll('.borderDark');
//     const reviewData = [];

//     for (let i = 0; i < numReviews && i < reviewElements.length; i++) {
//       const review = reviewElements[i];
//       const reviewer = review.querySelector('.spaceit h2 a').textContent.trim();
//       const score = review.querySelector('.borderLight .spaceit .dark_text').textContent.trim();
//       const content = review.querySelector('.spaceit.textReadability').textContent.trim();

//       reviewData.push({ reviewer, score, content });
//     }

//     return reviewData;
//   }, numReviews);

//   await browser.close();
//   return reviews;
// };

// module.exports = {
//   scrapeReviewsForAnime,
// };
