CREATE TABLE Restaurants (
  Restaurant_ID int NOT NULL AUTO_INCREMENT,
  Restaurant_Name varchar(30) NOT NULL
  Website varchar(50) NOT NULL
  PRIMARY KEY (Restaurant_ID)
)

CREATE TABLE Addresses (
  Street_Address varchar(100) NOT NULL,
  City varchar(25) NOT NULL,
  USA_State varchar(25) NOT NULL,
  Zip_Code int NOT NULL,
  RestaurantID int,
  FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID)
)

CREATE TABLE Opening_Times (
  Weekday_Number int NOT NULL,
  Start_Hour varchar(10) NOT NULL,
  End_Hour varchar(10) NOT NULL,
  FOREIGN KEY (RestaurantID) REFERENCES Restaurants(RestaurantID)
)