Project name: CarSalesApp
Update 2 (3/6/2019)
  - Refactored MileageSlider component to use SimilarCarsBtn component to reduce redundant code (code-reuse).
  - Added SimilarCarsBtn component.
  - Improved the behavior for scenarios where incorrect character or number is inserted to pagination component.
    - page will not refresh to first page for the incorrect input.
    - page will not go to first page for the incorrect input.
  - Reduced the code for pagination's behavior for incorrect input.
  - Fixed a bug where page input default value won't update on pressing "Next" or "Prev" buttons.
  - Fixed a bug where "Prev" or "Next" button won't correctly disable itself at the beginning of the page or end of the page.
  - Added a behavior where the page will scroll to the top of the page after page change.
  - Fixed a bug where entering new page didn't reload data from the appropriate API uri.
  - Refactored page change buttons ("Next" and "Prev") to use single handler function (code-reuse) and changed PropTypes in Pagination component accordingly.
  - Removed unused handler function from BrowseContainer.
  - TODO: more elegant alert (modal), elegant error handling for vehicles without data (redirect to previous list), more code reuse, organize readme update, fix the edge case where bootstrap carosel disappears when the user viewed a nth image of a car and then selects the nth image which the new car does not have, create margin around for "add to favorite" to have some space on left side in case for mobile use.

Update (Nov 2018)
  - Fixed issue where componentDidMount would cause problems when loading the selection. This degraded performance of the app.
  - Fixed the problem of losing images entirely when selecting other option while not on the first image of the carousel.
  - Partially fixed the problem where image carousel disappears when any images other than the first image is selected and "other mileage option" is clicked. However, if the currently selected image index is higher than the index of the "other mileage option" vehicle's last image, the problem persists. The partial fix was done by using the index value of the image API as the key attribute for element creation in the VehiclePicture component.
  - Added placeholder images for invalid image source links.
  - Enhancd user experience by adding indication to selected (current0) mileage option.
  - Fixed a small problem where the images would not line up if the proportions are different on the main product listing page.

Description:
  - This app is built to demonstrate my ability in frontend development and API handling.
  - User will be presented with a convenient view of the cars that are availabe for sale. 
  - The app will be responsive -- changes depending on the different viewing devices.

Sample Deployed App URL:
  - https://carsalesapp-3e608.firebaseapp.com/

Prerequisite:
  - You will need NPM to get started.

Installation:
  1. Perform "npm install" in Terminal at the root of the project folder.
  2. Use "npm run build" command at the root of the project folder to build bundle.js.
  3. Use "npm start" command at the root of the project folder to start webpack-dev-server.
  4. localhost:3000 will open in your default browser and load the app.
    - if there is a problem opening localhost:3000, please check if the port is being used.
    - alternatively, you can edit "scripts": {"start": ...} in package.json file to serve the app through a different port.

Overview:
  - Vehicle Listing Page (Browse page)
    - minimum: Make, Model, Trim, Year, Car image, Start fee, Monthly Fee
    - implement pagination using the data from index api
    - set/unset favorite
    - use results-page API
  - Vehicle Details Page
    - use vehicle-specific API
    - showcase the vehicle using provided design as guidance
    - implement a car image gallery
    - implement a mileage slider to allow viewing of different prices (see )
    - set/unset favorite
  - Vehicle Favoriting
    - favorite and unfavorite cars (in both Car Listing page and Details page)
    - data persistence
    - favorite/unfavorite status should be consistent on both pages

Main goals:
  - Clean separation of concerns
  - Clean code quality that is readable and maintainable
  - Clear comments and documentations
  - Focuses:
    - Delivery of "Car Listing" page, "Car Details" page and "Favorite Vehicles" feature
    - Simple and easy-to-use experience while maintaining performance and scalability
  - Security
  - Demonstrate tests and use of Proptypes
  - Demonstrate appropriate use of libraries, data storage / handling, architecture etc

Notes:
  - With the introduction of Babel 7, I decided to set up my own environment for React development instead of using the given React starter kit.
  - For organization of components and separation of concern, I follow a Container / Presentation pattern. Container component contains the logics while presentational components carry what interfaces the user. This method is useful in reusability of the components as well.
  - By use of modal, user will be shown more detailed view of the selected vehicle. 
  - I decided to take a different approach on implementation of range-slider. Please see Limitations section of this readme for more info (last bullet).

Technologies/Library used:
  - PWA for fast loading
  - LinkedDB for in-browser storage (alternative: cache)
  - Bootstrap for flexible and stable styling
  - Axios
  - ESLint - Airbnb rules
  - shortId - to generate unique key values for arrays
  - localStorage - to store session data (persistent favorite state)
  - Jest/Enzyme to test React components

Scalability Planning
  - Micro-service architecture used to separate different tasks which enables easier scalability when new features are added.
    - Separated services based on their purposes
  - Micro-service architecture also offers code-reuse which lowers the development time, easier maintenance and troubleshooting. 
    - VehicleSpec, VehiclePictures LoadingScreen presentational componenets are resued throughout the project
      - In case of VehicleSpec and VehiclePictures, the code has conditional that displays different vehicle information depending on "purpose"
  - Use of an object instead of an array for favorite list (see "Decisions" for more info)

Limitations:
  - Missing STK number - used "id" under financial_data in the API
  - Limited amount of vehicle information in the API so it was not possible to have as many description shown in the example screenshots.
    - Missing: STK, EXT, INT, Vehicle Features, 3Yr Loan Alternative, Etc.
  - Due to the nature of the API data available, implementation of the "Mileage slider" feature has some limitation. With the given API, I was still able to demonstrate my idea of "Mileage slider" feature. It utilizes the "result-page" API since it has the most comprehensive list of vehicles and their data. I also used a side-scrolling overflow (similar to carousel) mechanism instead of a range slider mechanism because I imagined the case where it will become inconvenient for mobile users to use such gesture on their small screen. It will become very difficult to click/see when there are too many cars to be listed in the range-slider.
  - API does not call pages other than page 1. This lead to limitations on pagination handling function and tests.

Known Problem:
  - There is a problem with image carousel not loading when the first Civic detail page (that has other images) is loaded through "Other Mileage Option" inside the second Civic (does not have other images) detail page.
    - Work around: if the first image (which exist for the second Civic) is loaded back and then the other Civic in "Other Mileage Option" is selected, this problem does not occur.
    - It appears that the carousel elements do exist but is hidden behind other elements when "Other Mileage Option" is used and images don't load. I am looking for solution to fix this, but due to time constraint and since the main features are fully functioning, I decided to submit the code with this feature to demonstrate this idea.
    - In case of production-deployment scenario, we can disable the "redirect" functionality and use this as "display-only" element to avoid this problem while still being helpful to the user.
  - Limited amount of testings performed. Limited assurance has been made for React PropTypes test.

Decisions:
  - Modal vs New page: My initial plan was to use modal as a detailed pop-up page for a consistent look of a SPA look since you still see the background. However, after doing some research, it appears that use of modal is recommended for simple and critical actions. It should not have too much information. In addition, it may not work very well in a mobile environment. Therefore decision has been made to display a clean new page for a detail page.
  - PWA vs local storage cache: PWA allows a web-app to deliver native-app-like experience to the user by persisting the entire web-app components. PWA keeps itself up to date whenever a network is available. This enables much faster loading time and enhance the user experience. However, PWA is still in development for many browsers and there may be possible incompatibility issues. Therefore local storage cache method was chosen as the goal of this project is to deliver a stable, readily-deployable web-app. 
  - Architecture design for performance: In accordance with the instruction of this assignment, I am calling a separate API to loading vehicle specific detail once the user clicks "Check this vehicle!", but in practice, I believe that it would be better to have a single API call at the ProductListing page (which also includes all the detailed information about each cars being displayed) and use the same data as the user clicks "Check this vehicle" button. This would significantly increase the performance of this app.
    - To make the transition more smooth, I have added loading screen for all components that require loading time.
  - Use of Array vs Object for managing favorites (backend performance): According to my research, for small datasets, array will usually have better performance, but with scalability in mind, use of object would be better for this specific use case. To lookup in an array, JavaScript will need to iterate through the list. At scale, this may become a problem. In addition, deletion would be faster in an object because it does not need to be re-organized its structure after deleting an element inside.
    - While using Object for storage, it is generally known that property "delete" is known to be slow. However, to efficiently maintain memory and improve overall web-app's performance, I decided to use "delete" because favoriting feature is not expected to be used frequently. I believed that cost-benefit of improving the overall performance would be more effective.
  - Use of localStorage: There is a known iOS issue where if localStorage is full, there will be an error. Also, the current implementation is acceptable for the simple task of persisting list of favorited vehicles. However, if localStorage is needed for more complex or diversified uses, it should be implemented differently. E.g. grouping the data into objects by using JSON.Stringify. For the simple implementation, I decided to use simple approach.

Security: 
  - React escapes most string variables automatically to prevent XSS injection. XSS injection is one of the most common vulnerability and it should be covered. With the current implementation, I have not found other potential vulnerabilities at the moment.