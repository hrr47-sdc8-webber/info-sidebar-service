DROP DATABASE IF EXISTS zagat;

CREATE DATABASE zagat;

USE zagat;

CREATE TABLE Restaurants (
  Restaurant_ID int NOT NULL AUTO_INCREMENT,
  Restaurant_Name varchar(30) NOT NULL,
  Website varchar(50) NOT NULL,
  Telephone varchar(12) NOT NULL,
  PRIMARY KEY (Restaurant_ID)
)

CREATE TABLE Addresses (
  id int NOT NULL AUTO_INCREMENT,
  Street_Address varchar(100) NOT NULL,
  City varchar(25) NOT NULL,
  USA_State varchar(25) NOT NULL,
  Zip_Code int NOT NULL,
  RestaurantID int,
  PRIMARY KEY (id),
  FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID)
)

CREATE TABLE Opening_Times (
  id int NOT NULL AUTO_INCREMENT,
  RestaurantID int,
  Weekday varchar(9) NOT NULL,
  Start_Hour char(5) NOT NULL,
  End_Hour char(5) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID)
)