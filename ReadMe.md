Introduction:
  - This app is built to demonstrate my ability in frontend development.
  - User will be presented with a convenient view of the cars that are availabe for sale. 
  - The app will be responsive -- change depending on the users' devices' different screen sizes

Overview:
  - Car Listing Page
    - minimum: Make, Model, Trim, Year, Car image, Start fee, Monthly Fee
    - implement pagination using the data from index api
    - set/unset favorite
  - Car Details Page
    - use API
    - showcase the vehicle using provided design as guidance
    - implement a car image gallery
    - implement a mileage slider to allow viewing of different prices
    - Set/unset favorite
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
  - Demonstrate appropriate use of libraries, data storage / handling, architecture etc.

Notes:
  - With the introduction of Babel 7, I decided to set up my own environment for React development instead of using the given React starter kit.
  - For organization of components and separation of concern, I follow a Container / Presentation pattern. Container component contains the logics while presentational components carry what interfaces the user. This method is useful in reusability of the components as well.
  - By use of modal, user will be shown more detailed view of the selected vehicle. 

Possible technology/library to be used:
  - PWA for fast loading
  - LinkedDB for in-browser storage (alternative: cache)
  - Bootstrap for flexible and stable styling
  - Axios
  - ESLint - Airbnb rules
  - shortId - to generate unique key values for arrays
  - localStorage - to store session data (persistent favorite state)

Scalability Planning
  - Micro-service architecture used to separate different tasks which enables easier scalability when new features are added.
  - Micro-service architecture also offers code-reuse which lowers the development time, easier maintenance and troubleshooting. 
  - Use of an object instead of an array for favorite list (see "Decisions" for more info)

Limitations:
  - Missing STK number - used "id" under financial_data in the API
  - Limited amount of vehicle information in the API so it was not possible to have as many description shown in the example screenshots.
    - STK, EXT, INT, Vehicle Features, 3Yr Loan Alternative, Etc.

Decisions:
  - Modal vs New page: My initial plan was to use modal as a detailed pop-up page for a consistent look of a SPA look since you still see the background. However, after doing some research, it appears that use of modal is recommended for quick and very necessary actions. It should not have too much information. In addition, it may not work very well in mobile environment. Therefore I chose to display a clean new page for a detail page, while still being an SPA.
  - PWA vs local storage cache: PWA essentially downloads the entire web-app in a device and allows a user to use the web-app even in situations where there is no network. PWA keeps itself up to date when network is available. This enables much faster loading time and enhance the user experience. However, PWA is still in development for many browsers and there may be possible incompatibility issue. Therefore I chose to use local storage cache as the goal of this project is stable, readily-deployable web-app. 
  - Architecture design for performance: Due to the instruction for this assignment, I am calling a separate API to loading vehicle specific detail once the user clicks "Check this vehicle!", but in practice, I think it would be better to have a single API call at the ProductListing page (which also includes all the detailed information about each cars being displayed) and use the data as the user clicks "Check this vehicle" button. This would significantly increase the performance of this app.
    - But for now, to make the transition more smooth, I have added a loading screen. 
  - Use of Array vs Object for managing favorites (Backend performance): According to my research, for small datasets, array will usually have better performance, but with scalability in mind, use of object would be better for this specific use case. To lookup in an array, JavaScript will need to iterate through the list. At scale, this may become a problem. In addition, deletion would be faster in an object because it does not need to be re-organized its structure after deleting an element inside.
    - While using Object for storage, it is generally known that property "delete" is known to be slow. However, to efficiently maintain memory and improve overall web-app's performance, I decided to use "delete" because favoriting feature is not expected to be used frequently. I believed that cost-benefit of improving the overall performance would be more effective.
  - Use of localStorage: There is a known iOS issue where if localStorage is full, there will be an error. Also, the current implementation is acceptable for the simple task of persisting list of favorited vehicles. However, if localStorage is needed for more complex or diversified uses, it should be implemented differently. E.g. grouping the data into objects by using JSON.Stringify. For the simple implementation, I decided to use simple approach.
  - Security Check:
    1. XSS
    2. Script injection