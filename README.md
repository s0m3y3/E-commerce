# E-Commerce-Back-End


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Screenshots/videos](#Screenshots/videos)
- [Installation](#Installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Description
This code builds the back-end for an E-commerce website with sample seed data. You can jump-start your E-commerce store (back-end) using this base code. The database uses four tables: 

Categories  
  id, category_name
Product  
  id, product_name, price, stock, category_id
ProductTag  
  id, product_id, tag_id  
Tags
*  id, tag_name

The tables has the following relationship: 
* Product belongsTo Category
* Category hasMany Product
* Product belongsToMany Tag
* Tag belongsToMany Product

You can access the database with the following API routes. The "..." below is the location of the server. If you are running on a local server, the server may be: http://localhost:3001/

Router GET & POST  
.../api/products  
.../api/categories  
.../api/tags  

Router GET, PUT & Delete:   
.../api/products/:id  
.../api/categories/:id  
.../api/tags/:id  

## Features

- This application was created using Git Bash to navigate the E-Commerce database and testing in Insonmia, along with Node.js, MYSQL, Dotenv, Express, and Sequelize.


## Screenshots/videos:

> Demo videos: 
- Part One [_here_](https://drive.google.com/). 
- Part Two [_here_](https://drive.google.com/). 
- Part Three [_here_](https://drive.google.com/). 


![Example screenshot](https://github.com/)


## Installation
In the root folder of this apps, you will need to install node package. Enter in terminal: npm i. 
That will install the following files: 
* dotenv: ^8.2.0
* express: ^4.17.1
* mysql2: ^2.1.0
* sequelize: ^5.21.7

Then update your mysql database. 
1. Rename: ".env.Example" to ".env"
2. Update your DB_USER & DB_PASSWORD to access your mysql. Example: 

    DB_NAME='ecommerce_db'
    DB_USER='root'
    DB_PASSWORD='password'
3. In mysql, set up the database: 
    source ./db/schema.sql
4. Exit mysql.

In terminal, we need to generate the seeds. You can update this base code, if you have your own database structure. 

    npm run seed

## Usage


## License -->

  MIT License

    Copyright (c) 2023, Github username: s0m3y3
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact

Created by s0m3y3 [(github)](https://github.com/s0m3y3/E-commerce).  
Last updated: 10/19/2023