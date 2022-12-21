# CODY'S SURVIVAL SHOP
### By: Cody Jennings
## Motivation for survivial themed shop

The world we live in is full of uncertainties and impending doom. Preppers, survival-enthusiasts, whatever names the general public may call them have many strategies and procedures in place for ensuring their survival. The store I have created can be a one-stop-shop for those wanting to by everything they need. The store is not complete and items can be added as need be. This is a cool place to shop and support a local store versus scouring the internet for different shops to buy the same items! 


### Youtube link for viewer pleasure
[Youtube]()
### Github link to view other repositories
[Cody's Survival Shop](https://github.com/Cody-Jennings/Project2-StoreApp.git)

## Access

You can fork or clone the repo by copy and pasting the following in your terminal 

`git clone https://github.com/Cody-Jennings/Project2-StoreApp.git`

### CODY'S SURVIVAL SHOP/ HOW TO 

The first page or landing page is a simple title and link to my index page which displays all of my store's current survival items and is reflected in my database as well. My store concept comes from my desire to build an underground bunker of survival neccessities and help others accomplish the same by providing a one-stop-shop for all their survival needs. Should my store not have a specific survival item, any can be added.

![Home Page](storeAppHome.png)


Once the user clicks "CODY'S SURVIVAL ITEM INVENTORY" on the home page they will be directed to the Index page. This page shows the user current survival items inventory. The user can view the item's price and by clicking the image, and is directed to the items show page. The top buttons include "ADD A NEW SURVIVAL ITEM" and "BACK TO CODY'S SURVIVAL HOME". These buttons direct the user to add or create a survival item or to go back to the home page.

![Index Page](indexPageTop.png)


Should the inventory of Cody's Survival Shop become very large the user can scroll to the bottom of the page and click "BACK TO TOP" to alleviate from constant scrolling back to the top of page.

![Index Page](indexPageBottom.png)


The Add a New Survival Item/create page allows the user to add a new survival item to the database and various pages. All the user needs to input is exactly what is on the page. In this case a name, inventory, price, and image jpg url are all that is needed. Once created the survival item is added to database, index page with other items, and individual show page to display properties that were entered into the form.

![New Page](newSurvivalItem.png)


Once the user clicks on a survival item they will be directed to it's show page. The show page displays the properties that the user already inserted into the form on the add new survival item page. The show page also has four buttons a "BUY", "DELETE", "EDIT THIS SURVIVAL ITEM", AND "BACK TO CODY'S SURVIVAL SHOP". The "BUY" button decrements the items inventory by one per click. The "DELETE" button deletes the item and erases it's show page and its position on the index page. The "EDIT THIS SURVIVAL ITEM" takes the user to the edit page, and "BACK TO CODY'S SURVIVAL SHOP" redirects the user to the index page. 

![Show Page](showSurvivalItem.png)


If an item's inventory hits 1 remaining and is purchased an "Out of Stock" message appears and the buy button will disapper.
![Show Page](showOOSSurvivalItem.png)


The "EDIT THIS SURVIVAL BUTTON" allows the users to edit the four different fields of that item. They can edit the name, price, inventory and even the image jpg url. These changes can reflect market prices or change of names and stock inventory. This is a great tool to test the out of stock feature. Once the changes are made the user can hit "SUBMIT CHANGES' and be redirected back to the show page. 

![Edit Page](editSurvivalItem.png)

All changes made in the index, show, edit, and new pages are reflected in the database.

## Technologies Used
- CSS
- VSCode
- MongoDB
- Mongoose
- Express
- React
- Node
- Github

## Resources

- https://www.markdownguide.org/cheat-sheet/
- https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3
- Youtube tutorials
- [MDN](https://developer.mozilla.org/en-US/)
- [w3Schools](https://www.w3schools.com/default.asp)
- [GetCssScan](https://getcssscan.com/css-buttons-examples)
- [Stack Overflow](https://stackoverflow.com/questions/4747520/simple-css-form-layout)
- [Amazon](https://www.amazon.com/)

## Acknowledgements
 
- Kasper Kain
- Tishana Trainor
- Hadia Shafique
- Arianna Bunn
- Sharon Ogbonna
- Long Hoang
- All other classmates who took time to look at my project and gave confidence boosters and feedback/criticism.
- Michael McMillan for his button creation on GetCssScan
- Amazon for use of survival item images

## Disclaimer

I am not affiliated with nor own any rights regarding this store app's pricing, inventory or image url source. No profits were generated from this project. All materials utilized were for educational and demonstration purposes only. 