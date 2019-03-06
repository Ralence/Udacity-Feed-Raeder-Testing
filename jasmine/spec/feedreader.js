/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each feed should have a defined "url" property and it should not be empty', function() {
             // Using the for of loop to check that all entries in allFeeds meet the specs
             for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
         });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each feed should have a defined "name" propert and it should not be empty', function() {
             // Using the for of loop to check that all entries in allFeeds meet the specs
             for (let feed of allFeeds) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toBe('');
             }
         })
    });

    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
         /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('The menu element should be hidden by default', function() {
            // When the page is loaded if the body element contains the 'menu-hidden' class it will be hidden  
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('shoul change visibility every time when the menu icon is clicked', function() {
            // Selecting the menu icon
            let menuIcon = document.querySelector('.menu-icon-link');
            // Simulate a click on the icon
            menuIcon.click();
            // Check if the 'menu-hidden' class has been removed from the body element
            expect(document.querySelector('body').classList.contains('menu-hidden')).not.toBe(true);
            // Simulate another click
            menuIcon.click();
            // Check if the 'menu-hidden' class has been added back to the body element
            expect(document.querySelector('body').classList.contains('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        // loadFeed is asynchronous, beforeEach and done() will make sure it runs before the rest of the suite is executed
        beforeEach(function(done) {
            loadFeed(0);
            done();
        });

        it('it should have at least one .entry element within .feed container', function() {
            // Store the feeds in the feed variable
            let feed = document.querySelectorAll('.feed');
            // Check if the feeds variable has more than zero entries
            expect(feed.length).not.toBe(0);
        });
    })
    /* TODO: Write a new test suite named "New Feed Selection" */
    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        // Declare initialFeed and newFeed
        let initialFeed;
        let newFeed;
        // loadFeed() is asynchronous, we are using beforeEach and done()
        // to make sure it finishes running before the rest of the suite continues
        beforeEach(function(done) {
            // Loads the first feed with the index of 0 (zero)
            loadFeed(0);
            // Stores the first feed in the initialFeed variable
            initialFeed = document.querySelectorAll('.feed');
            // Loads the next feed with the index of 1 (one)
            loadFeed(1);
            // Stores the feed in the newFeed variable
            newFeed = document.querySelectorAll('.feed');
            done();
        });

        it('it should change the content when a new feed is loaded', function() {
            // Compares the initialFeed to newFeed to make sure the contend has been changed
            expect(newFeed).not.toBe(initialFeed);
        });
    });
}());