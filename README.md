# OORM-Ecommerce-BackEnd
  
## Description:
This application focuses on the back end application for an ecommerce site. This application utilizes Express.Js API, sequelize and MySQL database. One troubleshoot that I was stuck on was the importance of our connection.js and how important it is to keep the same syntax when using our .env file to access our MySQL database. What this challenge helped me learn was the versatility to use javascript files to seed our data into our models. Overall, it helped me get more practice into finding the relationships between different files and routing correctly. 

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
Git clone Repository: [OORM-Ecommerce-BackEnd](https://github.com/RyanSKang/OORM-Ecommerce-BackEnd)  
Following Installation Needed:  
    -Node.js [v16.16.0](https://nodejs.org/en/blog/release/v16.16.0)  
    -MySQL2 [v2.1.0](https://www.npmjs.com/package/mysql2/v/2.1.0)  
    -Sequelize [v5.21.7](https://www.npmjs.com/package/sequelize/v/5.21.7)  
    -Express [v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)  
    -dotenv [v8.2.0](https://www.npmjs.com/package/dotenv/v/8.2.0)  
   

## Usage Instructions
1. Using a source code editor, open the cloned repository
2. Open integrated terminal in the root folder and execute an "npm i"
3. Run "mysql -uroot -p" on terminal
4. Need to run "source db/schema.sql
5. Need to run "use ecommerce_db"
6. Exit out of mySQL2 and go back to terminal  
7. Execute "npm run seed"
8. Execute "npm start"
9. Use Insomnia in order to navigate API routes (POST/GET/DELETE)
  

## Screenshots
### Figure 1. API Categories
![Screenshot 2023-08-02 at 6 54 36 PM](https://github.com/RyanSKang/SVG-Maker/assets/124969918/0da5d6c6-9c6a-4091-bb31-a519960b7c21)  
### Figure 2. API Products
![Screenshot 2023-08-02 at 6 54 59 PM](https://github.com/RyanSKang/SVG-Maker/assets/124969918/acaa7bb2-0750-4493-9dbe-b849ee5c9eb2)  
### Figure 3. API Tags
![Screenshot 2023-08-02 at 6 55 13 PM](https://github.com/RyanSKang/SVG-Maker/assets/124969918/2e1f9d61-e8af-46d1-a08a-a0de86226cf6)  
### Figure 4. Post Route
![Screenshot 2023-08-02 at 6 55 56 PM](https://github.com/RyanSKang/SVG-Maker/assets/124969918/45ec5a68-c084-4ca6-afdd-02ae79a799c7)  
### Figure 5. Delete Route
![Screenshot 2023-08-02 at 6 56 18 PM](https://github.com/RyanSKang/SVG-Maker/assets/124969918/c0ae53d0-e2fb-4641-834a-86c855f00750)  
### Figure 6. Put Route
![Screenshot 2023-08-02 at 6 57 18 PM](https://github.com/RyanSKang/SVG-Maker/assets/124969918/962eb46c-7550-4470-b741-de1aa1c5f462)

## Walkthrough Video

<a href="https://watch.screencastify.com/v/h4R6evwGE8X1bioRsXu5"> Walkthrough Video Link </a>

## Credits
-Office Hours  
-DU-Virt-FSF-PT-02-2023-U-LOLC | ORM Stu-Mini-Project  
-AskBCS learning assistant 




