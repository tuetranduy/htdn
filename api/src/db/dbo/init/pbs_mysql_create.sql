drop database if exists pbs;
create database pbs;
use pbs;

CREATE TABLE `clients` (
	`client_id` int NOT NULL AUTO_INCREMENT,
	`identify_number` varchar(1024) NOT NULL,
	`account_id` int NOT NULL,
	PRIMARY KEY (`client_id`)
);

CREATE TABLE `cars` (
	`car_id` int NOT NULL AUTO_INCREMENT,
	`license_number` varchar(1024) NOT NULL,
	`type` varchar(1024) NOT NULL,
	`user_id` int NOT NULL,
	PRIMARY KEY (`car_id`)
);

CREATE TABLE `payment` (
	`payment_id` int NOT NULL AUTO_INCREMENT,
	`balance` FLOAT NOT NULL,
	`user_id` int NOT NULL,
	PRIMARY KEY (`payment_id`)
);

CREATE TABLE `payment_details` (
	`paymentDetails_id` int NOT NULL AUTO_INCREMENT,
	`timestamp` DATETIME,
	`changed_amount` FLOAT,
	`payment_id` int NOT NULL,
	`booking_detail_id` int,
	PRIMARY KEY (`paymentDetails_id`)
);

CREATE TABLE `booking_details` (
	`booking_detail_id` int NOT NULL AUTO_INCREMENT,
	`start_time` DATETIME,
	`end_time` DATETIME,
	`client_id` int NOT NULL,
	`parkinglot_id` int NOT NULL,
	`status` int NOT NULL,
	PRIMARY KEY (`booking_detail_id`)
);

CREATE TABLE `vendors` (
	`vendor_id` int NOT NULL AUTO_INCREMENT,
	`account_id` int NOT NULL,
	PRIMARY KEY (`vendor_id`)
);

CREATE TABLE `accounts` (
	`account_id` int NOT NULL AUTO_INCREMENT,
	`username` varchar(1024) NOT NULL,
	`password` varchar(1024) NOT NULL,
	`email` varchar(1024) NOT NULL,
	`name` varchar(1024) NOT NULL,
	`type` int NOT NULL,
    `hashsalt` varchar(1024),
	PRIMARY KEY (`account_id`)
);

CREATE TABLE `parking_lots` (
	`parkinglot_id` int NOT NULL AUTO_INCREMENT,
	`address` varchar(1024) NOT NULL,
	`number_of_slots` int NOT NULL,
	`cost` FLOAT NOT NULL,
	`isActive` bool NOT NULL,
	`vendor_id` int NOT NULL,
	PRIMARY KEY (`parkinglot_id`)
);

CREATE TABLE `requests` (
	`request_id` bigint NOT NULL AUTO_INCREMENT,
	`parkinglot_id` int NOT NULL,
	PRIMARY KEY (`request_id`)
);

CREATE TABLE `parkinglot_details` (
	`slot_id` int NOT NULL AUTO_INCREMENT,
	`isBusy` int,
	`isAvailable` int,
	`parkinglot_id` int NOT NULL,
	PRIMARY KEY (`slot_id`)
);

ALTER TABLE `pbs`.`parking_lots` 
ADD COLUMN `lat` FLOAT NULL AFTER `vendor_id`,
ADD COLUMN `long` FLOAT NULL AFTER `lat`;

ALTER TABLE `clients` ADD CONSTRAINT `client_fk0` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`account_id`);

ALTER TABLE `cars` ADD CONSTRAINT `cars_fk0` FOREIGN KEY (`user_id`) REFERENCES `clients`(`client_id`);

ALTER TABLE `payment` ADD CONSTRAINT `payment_fk0` FOREIGN KEY (`user_id`) REFERENCES `clients`(`client_id`);

ALTER TABLE `payment_details` ADD CONSTRAINT `payment_details_fk0` FOREIGN KEY (`payment_id`) REFERENCES `payment`(`payment_id`);

ALTER TABLE `payment_details` ADD CONSTRAINT `payment_details_fk1` FOREIGN KEY (`booking_detail_id`) REFERENCES `booking_details`(`booking_detail_id`);

ALTER TABLE `booking_details` ADD CONSTRAINT `booking_details_fk0` FOREIGN KEY (`client_id`) REFERENCES `clients`(`client_id`);

ALTER TABLE `booking_details` ADD CONSTRAINT `booking_details_fk1` FOREIGN KEY (`parkinglot_id`) REFERENCES `parking_lots`(`parkinglot_id`);

ALTER TABLE `vendors` ADD CONSTRAINT `vendors_fk0` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`account_id`);

ALTER TABLE `parking_lots` ADD CONSTRAINT `parking_lots_fk0` FOREIGN KEY (`vendor_id`) REFERENCES `vendors`(`vendor_id`);

ALTER TABLE `requests` ADD CONSTRAINT `requests_fk0` FOREIGN KEY (`parkinglot_id`) REFERENCES `parking_lots`(`parkinglot_id`);

ALTER TABLE `parkinglot_details` ADD CONSTRAINT `parkinglot_details_fk0` FOREIGN KEY (`parkinglot_id`) REFERENCES `parking_lots`(`parkinglot_id`);

