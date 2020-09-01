DROP DATABASE IF EXISTS restaurants;
CREATE DATABASE restaurants;

\c restaurants;


DROP TABLE IF EXISTS restaurant;

CREATE TABLE IF NOT EXISTS restaurant (
  Restaurant_Name varchar(800) NOT NULL,
  Website varchar(800) NOT NULL,
  Street_Address varchar(800) NOT NULL,
  City varchar(800) NOT NULL,
  USA_State varchar(800) NOT NULL,
  Zip_Code varchar(800) NOT NULL,
  Telephone varchar(800) NOT NULL,
  written_review varchar(800) NOT NULL,
  scoreOne varchar(800) NOT NULL,
  scoreTwo varchar(800) NOT NULL,
  scoreThree varchar(800) NOT NULL,
  Start_Hour varchar(800) NOT NULL,
  End_Hour varchar(800) NOT NULL,
  average_price varchar(800) NOT NULL,
  singleSentenceDescriptor varchar(800) NOT NULL,
  neighborhood varchar(800) NOT NULL,
  typeOfFood varchar(800) NOT NULL
);