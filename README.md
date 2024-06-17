# Wikibite
 
## Description

Welcome to Wikibite!

 One of the few things that people cannot go without is food.  It is a great cultural force that can cross barriers and is one of the primary means in which people interact, through meals, whither preparing them for others or for themselves.  Though many things have changed in previous decades and will occur in coming decades, food and the preparation of it can convey so much.

 This project began with the desire to provide a simple and effective way to access international cuisine while alowing freedom of exploration.  Additionally, if a person finds a particular recipe that they would like to access for future use, it allows the user to save the recipe.  

 As stated earlier, changes have occurred in previous years and decades, and will continue to change.  Increased access to out of home dining, while an amazing innovation, has created issues of it's own.  On average, these meals tend to be hyper-palatable and calorically dense.  Additionally, while they may appear on face value to be time effective, they typically cost more per meal. 
 
 The solution may seem to be to practice meal preparation, but this often fails due to a number of issues, chief among them is lack of variety.  While there is a segment of the population that are capable of monotony in diet, these people tend to be outliers.  While there have been previous attempts to provide this service with encompassed food delivered to be prepared by the customer, this may have not been the optimal model for most due to issues with pre-selected sizes & food stuff.

 Also, in an increasingly connected international community with increased daily demands, one may prefer to access a meal that they no longer have access to using.  Maybe it was made by a family member who no longer is able to prepare food, or through a community in which they are no longer in touch with.

 This project has delivered on the autonomy portion with room to spare. The collaborators learned that there are resources to be leveraged to provide a variety of international food, while still allowing the ability to select from preferred recipes in a pinch.

 In further detail, this project provides a landing page that provides interaction via a modal to select from fourteen different choice.  when selected, the modal fetches 3 random recipes recipes containing the type of food selected.  if desired, a person can select one of the three recipes.  JSON compiles data from themealdb.com and returns a second page containing a card, with ingredients and the recipe. On the same recipe page, wikipedia information pertaining to key aspect of the food type and culture of orgin are returned, as well as potential relevent information provided on the right hand side for further exploration.  If someone wants to view the recipe later, they can simply save it via the favorite button.  

 When they return, they can select the favorite button to find the entailed food item.  Additionally, if wanting to simply explore different cuisine, on the landing page a user can select the random button for a completely random food item.

 These profiles are all provided in a formal aesthetic via use of the materialize framework for CSS.


## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [Roadmap](#roadmap)
- [License](#license)

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.
1. Kendra Defransisco @https://github.com/defrak2
2. Cody Barnes @https://github.com/CodyBarnes9624
3. Whitney Burnette @https://github.com/wcburnette
4. Michael Bayat @https://github.com/mikebayat

Below are the sourced materials utilized in Wikibite:

- [the meal DB](https://www.themealdb.com/)
- [wikipedia](https://www.wikipedia.org/)
- [Materialize](https://materializecss.com/)


## Roadmap

this is the initial phase of the product,  Anticipated phases of development are as follow
- [x] provide ability to acquire random meal based off of selected food type
- [x] provide secondary information pertaining to meal country of origin, as well as other relevent information
- [x] have ability to cache particular meals for future reference
- [x] provide variety to explore via a random button
in phase two, the addition of the following features is what is desired.
- [] Provide scaleability by adjusting quantity of ingredients by number of people served
- [] Provide ability to have multiple criteria for modal to parse back recipes, such as country of origin

At a future date after completion of phase two, the next step would be the ability to provide a palette for the user based off of previous favorites, as well as potential like and dislike button to further help with selection.

## License

Copyright (c) 2024 defrak2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
