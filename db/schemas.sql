DROP DATABASE IF EXISTS employee_tracker_DB;

CREATE DATABASE employee_tracker_DB;

USE employee_tracker_DB;

CREATE TABLE department ( 
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee_role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT(1) AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) ,
last_name VARCHAR (30) ,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);




INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Jane', 'Austen', '2249', '8080');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Mark', 'Twain','2245', '8080');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Baskin', 'Carroll','2278', '8080');
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Andre', 'Asselin','2289', '8080');
 
SELECT * FROM employee;