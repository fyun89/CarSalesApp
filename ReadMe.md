Introduction:
  - This app is built to demonstrate my ability in frontend development.
  - User will be presented with a convenient view of the cars that are availabe for sale. 

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
  - Micro-service architecture used to separate different tasks which enables easier scalability when new features are added
  - In addition, the architecture offers code-reuse which lowers the development time, easier maintenance and troubleshooting. 

Questions:
  - STK number - what is it and is it in the API
  - EXT and INT color - not avail in API

Decisions:
  - Modal vs New page: My initial plan was to use modal as a detailed pop-up page for a consistent look of a SPA look since you still see the background. However, after doing some research, it appears that use of modal is recommended for quick and very necessary actions. It should not have too much information. In addition, it may not work very well in mobile environment. Therefore I chose to display a clean new page for a detail page, while still being an SPA.
