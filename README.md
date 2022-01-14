![alt text](https://github.com/davigravi/RoomHawk/blob/main/frontend/public/images/favicon.png "Favicon")

# **RoomHawk** 

[RoomHawk](https://room-hawk.herokuapp.com/), a full-stack application inspired by Airbnb, is an online platform for users to host and rent out spots for travel.

Visit its [wiki](https://github.com/davigravi/RoomHawk/wiki) for more information.

## **Live Link**

[RoomHawk](https://room-hawk.herokuapp.com/)

## **Installation**

#### **Prerequisites**

* Node.js

* NPM

* PostgresSQL

**Get Started**

* Clone the repository: `https://github.com/davigravi/RoomHawk.git`

* Run `npm install` to install dependencies

* Create a Postgres database called `auth_db`

* Create a `.env` file in the root directory, following `.env.example` as a reference.

* Initialize the database:

    * `npx dotenv sequelize db:migrate`

    * `npx dotenv sequelize db:seed:all`

    * Run `npm start` to launch the server.

## **Features**



* Account Regristration and Sign-in

![alt text](https://github.com/davigravi/RoomHawk/blob/main/frontend/public/images/readme1.png "View Listings")

* Spots
    * Users can post listings via a form.
    * Users can view other people's listings.
    * Users can delete their listings.
    * Users can edit their listings.

## **Technologies**

* JavaScript
* CSS
* React
* Redux
* Express
* Node.js
* PostgreSQL
* Sequelize

## **Documentation**


* [Feature List](https://github.com/davigravi/RoomHawk/wiki/Feature-List)
* [Database Schema](https://github.com/davigravi/RoomHawk/wiki/Database-Schema)
