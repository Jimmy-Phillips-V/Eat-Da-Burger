-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

USE burgers_db

CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
    date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);