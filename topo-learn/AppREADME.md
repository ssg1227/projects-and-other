# Evolving Smart Geographical Information System 
## User/ PM Requirement - initial frame and basic functionality
I want to develop a Geographical Information System app in angular 12-16.
1. Take a city as a central location. Let's take South Lake Tahoe as an initial hard coded example
2. The region should be a circle of X miles radius around the city. Take X = 100 miles as a hard coded example
3. A List of important cities, towns and villages in this region. Generate hard coded list as an example
4. App structure
    - common left nav bar, header bar, and  rectangular area top right corner just below the header bar
    - left nav bar contains links (router module), header bar contains login button, then Welcome message
    - Right rectangular area presents the matrix of city distances
5.  Items in 4 a. above should be placed under a shared module with child routing
6. Other functionalities will have their own module
7. Service class to return the matrix, let's keep it as a json for now

## 🌍 Use Case Recap
- Center: South Lake Tahoe-
- Radius: 100 miles
- Output: Distance matrix between South Lake Tahoe and nearby cities/towns
- UI: Shared layout with navigation, header, and content area
- Architecture: Shared module with child routing + service returning static JSON

## High level
    - created the app using ng-new
    - installed boostrap and font-awesome for styling using npm and updating angular.json - style and script (Script add may be redundant with versions used)
    - 