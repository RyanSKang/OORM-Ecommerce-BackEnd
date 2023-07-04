# OORM-Ecommerce-BackEnd
  
## Description:


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
2. Open integrated terminal on index.js and execute an "npm i"
3. Run "mysql -uroot -p" on terminal
4. Need to run "source db/schema.sql
5. Need to run "use ecommerce_db"
6. Exit out of mySQL2 and on terminal execute "npm run seed"
7. Execute "npm run seed"
8. Execute "npm start"
9. Use Insomnia in order to navigate API routes (POST/GET/DELETE)
  

## Screenshots
### Figure 1. 


## Walkthrough Video


## Credits
-Office Hours  
-DU-Virt-FSF-PT-02-2023-U-LOLC | ORM Stu-Mini-Project  
-AskBCS learning assistant 




