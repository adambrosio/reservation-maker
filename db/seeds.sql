
DROP DATABASE IF EXISTS reserve_db;

CREATE DATABASE reserve_db;
USE reserve_db;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  dob DATETIME
);

CREATE TABLE businesses(
  id INT AUTO_INCREMENT PRIMARY KEY,
  business_name VARCHAR(50) NOT NULL,
  category ENUM('entertainment', 'fitness', 'resturaunt', 'health/beauty', 'maintenance', 'miscellaneous'),
  street VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  owner_id INT NOT NULL,
  FOREIGN KEY(owner_id)
	REFERENCES users(id)
    ON DELETE SET NULL
);

CREATE TABLE business_entities(
  id INT AUTO_INCREMENT PRIMARY KEY,
  business_id INT NOT NULL,
  entity_name VARCHAR(50) NOT NULL,
  description VARCHAR(50),
  FOREIGN KEY(business_id)
	REFERENCES businesses(id)
    ON DELETE CASCADE
);

CREATE TABLE reservations(
  id INT AUTO_INCREMENT PRIMARY KEY,
  business_entity_id INT NOT NULL,
  user_id INT NOT NULL,
  time_start DATETIME NOT NULL,
  time_end DATETIME NOT NULL,
  reservation_status ENUM('reserved', 'open', 'out of order'),
  FOREIGN KEY(business_entity_id)
	REFERENCES business_entities(id)
	ON DELETE SET NULL,
  FOREIGN KEY(user_id)
	REFERENCES users(id)
    ON DELETE SET NULL
);

CREATE TABLE admin(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  business_id INT NOT NULL,
  FOREIGN KEY(user_id)
	REFERENCES users(id)
    ON DELETE CASCADE,
  FOREIGN KEY(business_id)
    REFERENCES businesses(id)
    ON DELETE CASCADE
);
