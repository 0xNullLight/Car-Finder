

# Car Finder

A repository for finding car make, model, and price with purchasing functionality. This project includes two primary APIs: one for vehicle data retrieval and another for shopping cart management.

## Features

- **API 1:** Provides the make, model, and price of vehicles.
- **API 2:** Handles shopping cart functionality for purchasing cars.

## User Story

As a user, I want to search for cars by specific criteria such as make, model, price, and year, compare different vehicles, and purchase a selected vehicle using a shopping cart.

## Table of Contents

 - [User Story](https://github.com/Bugatti1982/Car-Finder?tab=readme-ov-file#user-story)
 - [Project Setup](https://github.com/Bugatti1982/Car-Finder?tab=readme-ov-file#project-setup)
 - [Project Description](https://github.com/Bugatti1982/Car-Finder?tab=readme-ov-file#project-description)
 - [Required Modules](https://github.com/Bugatti1982/Car-Finder?tab=readme-ov-file#required-modules)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Testing](#testing)
 - [Contributing](#contributing)
 - [Questions](#questions)

## Acceptance Criteria

- The system should prompt the user for details such as vehicle type, price range, make, model, and year.
- The user should be able to view and compare vehicles in a structured table format.
- Once a car is selected, the user can add it to a shopping cart for purchase.

## Project Setup

![Car Selection Database](Assets/diagram-export-10-2-2024-9_05_09-pm_720.png)

* Cars
  * id: Name String
  * make: id name string
  * Model: id name string
  * Year: id year int
  * Price: id amount decimal


### Frontend Details

The front end will provide the user interface for vehicle search, comparison, and shopping cart management.

### Backend Details

The backend will manage vehicle data retrieval and process transactions, similar to the front-end functionality but focused on API calls and data handling.

## Project Description

Car Finder enables users to easily search for vehicles, compare them side-by-side, and complete a purchase, all in one seamless experience.

### Required Modules

- **PostgreSQL** - For managing the car database and storing vehicle and user information.
- **Node.js** - For server-side API development.



## Installation

1. Clone the repository:  
   `git clone https://github.com/Bugatti1982/Car-Finder`
2. Install dependencies:  
   `npm install`
3. Set up the PostgreSQL database using the provided schema.
4. Run the application:  
   `npm start`

   [Installation Video](https://www.youtube.com/watch?v=cf6SuK6Np_E)

## Video Demonstration

_A video demonstration link will be added here once the project is fully implemented._

## Usage

After installation, launch the app to search for vehicles, compare them and add your preferred vehicle to the shopping cart for purchase.

* Npm Build
* Npm Seed
* Npm Start

## Testing

Testing functionality is not currently implemented. Future updates will include testing configurations.

## Contributors

Bee Vang

Rachel Reyes

Brandon Welch

Mattison Anderson

Brandi Rasmussen

Marcellus Khanyoo-Moona



### Resources

- [Markdown Editor](https://stackedit.io/)
- [AI co-pilot ‍for technical design](https://eraser.io)
- [Product Price Comparison in SQL](https://stackoverflow.com/questions/19841022/product-price-comparison-in-sql)
- [HTML & CSS Price Comparison Table Tutorial](https://www.youtube.com/watch?v=Ki2HbIMZTgg)
- [Learn Express JS in 35 minutes](https://www.youtube.com/watch?v=SccSCuHhOw0)
- [Setup React with Vite](https://dev.to/mcbarna/setup-react-with-vite-on-vscode-a-step-by-step-tutorial-591g)
- [React Tutorial #8](https://www.youtube.com/watch?v=XrtZynBLpXo)
- [Creating Databases on pgAdmin](https://www.youtube.com/watch?v=6DzCWzeVFD0)
- [The Rest API Handbook](https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/)
- [How to Create a Wire Frame](https://www.springboard.com/blog/design/how-to-create-a-wireframe/)
- [Javascript for Kids](https://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf)
- [REACT TOKENS](https://www.youtube.com/watch?v=nI8PYZNFtac)
- [REACT JWT](https://www.npmjs.com/package/react-jwt)
- [pull JSON information from an API and SQL data](https://chatgpt.com/share/6710327c-a9e8-800f-851b-4a4a1b788c7f)
- [github Deployment](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)


## Questions

For questions or further assistance, feel free to reach out via GitHub or raise an issue in the repository.


### Production Notes from Meetings

### Meeting Notes from Oct 5, 2024

Rachel is working on SQL & Scheema

* We need to look at if we should create a database from scratch or just use the database that we pulled

* Is it more time efficient?

* We are asking Chat GPT and Nate their options on it

* Rachel worked on power point presentation

API

Brandon is working on Routing

* He is doing research and BEE and Rachel are working with him in support

* We are trying to figure out what we need to do on this currently to support Brandon

Bee has updated the Front end and we have a good Outline and look for website

* Bee will lead with the the front end of the site. 

* Bee and Brandi are going to sit down and discuss the vision of the site on Monday Oct 7.

* Bee will explain the code and ideas behind it.

* Bee will supervise the technical aspect and review code and lean in when necessary.
	
Brandi is going to do Production supervision

* Brandi work on front end with Bee

* Brandi will lean in and write markdown

* Brandi will assist with Bee on the vision and front end

* Brandi will also be taking production notes to keep us on task and have a good timeline

* Brandi will also look at how to keep things effient so that we don't get lost in the minutia.
   

Marcellus will meet with us on Sunday Oct 6 10:00am to discuss assigned tasks we will assign his tasks at that time.

Mattison has not contacted us yet on a time he can meet so we can discuss his tasks.

### Meeting Notes Oct 6, 2024

Brandon and Nate got our server connected 

API is functioning

### Meeting Notes Oct 7, 2024

* Updated crew on the work done on Sunday

* Brandon fixed the template and has it connected to his server.

* Brandon demo'd the backend stuff

* We went through the Server files and explained the connections. 

* Brandi updated the README,  Resources and gave the rest of the crew the REACT tutorials.

* Marcellus, Bee and Brandi are going to work on the REACT issue to get front end tied to back end but everyone is looking into this to help out.

* Rachel is working on SQL Brandon will assist her on this challenge

* Mattison and Marcellus are working on the voting system add on

* We have basic functionality working

* Brandi is going to do forensics and review the changes on the filenames so we can figure out what connects to what, so that we can connect our front to the back and will notate it out.

* Agreed upon that there will be a meeting Tuesday Oct 8, 2024 6:00pm

* The Crew watched the REACT Tutorials

### Meeting Notes Oct 9, 2024

* Mattison and Marcellus will do the hook up to front end and will add the Token They will also focus on the add on of the voting system.

* Bee will keep working on design and tweaking it.  He will send files to Rachel and Brandi for Power Point and Video production.

* Rachel is going to work on power Point presentation EMV, React, Helped with Sceema connection and will review the notes of our code to understand better.

* Brandon is taking lead as consulting for all code on back end and will assist Mattison and Marcellus on Front end. He is also shooting a video so that we can add it to the usage area of the readme.

* Brandi will continue mark down, get graphics on videos and video editing and analysis on the overall project to keep us on time.

### Meeting Notes on Oct 10, 2024

* Everyone was in attendance.

* We have front and back connected and working.

* Mattison and Marcellus will have connection established and token inputed by Saturday.  

* Rachel is working on Power Point and updating graphics. Power Point must have: Front End, Back End, Connection, Add On Video of Installation

* Brandi & Bee are meeting at 11:40 am for a design hudle

* Brandon is leading tech consultant on back end to front end connection for Mattison and Marcellus

### Meeting Notes on Oct 14, 2024

* Marcellus was missing from meeting.

* We continued to have trouble connecting front end to back end.  

* Mattison added the code for the connection but we are not sure where the error is coming from.

* The group studied up on the token and how to install it.

### Meeting Notes on Oct 15, 2024

* Marcellus added the token

* We tried to get the client to talk to the server.  We will do presentation with the sample data.

* The front end is mostly fixed, the back end is done and then it just isn't talking to each other.

* 
