-- DROP DATABASE IF EXISTS kelpsummaries;
-- CREATE DATABASE kelpsummaries;
-- \c kelpsummaries;

DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS categories;

CREATE TABLE restaurants (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR,
  neighborhood VARCHAR,
  address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  postalCode VARCHAR,
  latitude DECIMAL,
  longitude DECIMAL,
  stars INT,
  reviewCount INT,
  phone VARCHAR
);

CREATE TABLE categories (
  id INT PRIMARY KEY NOT NULL,
  category1 VARCHAR,
  category2 VARCHAR,
  category3 VARCHAR
);
