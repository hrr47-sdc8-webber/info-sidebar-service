DROP DATABASE IF EXISTS zagat;

CREATE DATABASE zagat;

USE zagat;

CREATE TABLE Restaurants (
  Restaurant_ID int NOT NULL AUTO_INCREMENT,
  Restaurant_Name varchar(50) NOT NULL UNIQUE,
  Website varchar(50) NOT NULL,
  Telephone varchar(30) NOT NULL,
  PRIMARY KEY (Restaurant_ID)
);

CREATE TABLE Addresses (
  id int NOT NULL AUTO_INCREMENT,
  Street_Address varchar(100) NOT NULL,
  City varchar(25) NOT NULL,
  USA_State varchar(20) NOT NULL,
  Zip_Code int NOT NULL,
  RestaurantID int,
  PRIMARY KEY (id)
);

CREATE TABLE Opening_Times (
  id int NOT NULL AUTO_INCREMENT,
  Start_Hour char(5) NOT NULL,
  End_Hour char(5) NOT NULL,
  RestaurantID int,
  PRIMARY KEY (id)
);

CREATE TABLE Ratings (
  id int AUTO_INCREMENT,
  food_rating char(3) NOT NULL,
  decor_rating char(3) NOT NULL,
  service_rating char(3) NOT NULL,
  written_review varchar(500) NOT NULL,
  RestaurantID int,
  PRIMARY KEY (id)
);