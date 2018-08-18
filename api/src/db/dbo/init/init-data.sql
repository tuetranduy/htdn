/*accounts*/
insert into accounts values(1,'duytue', '123123', 'tue@gmail.com', 'duy tue', 1, '');
insert into accounts values(2,'nhatnam', '123123', 'nam@gmail.com', 'nhat nam', 0, '');
insert into accounts values(3,'anhtuan', '123123', 'tuan@gmail.com', 'anh tuan', 2, '');
insert into accounts values(4,'dangthanh', '123123', 'thanh@gmail.com', 'dang thanh', 1, '');
insert into accounts values(5,'hoangson', '123123', 'son@gmail.com', 'hoang son', 0, '');
insert into accounts values(6,'minhtien', '123123', 'tien@gmail.com', 'minh tien', 1, '');
insert into accounts values(7,'hoangphap', '123123', 'phap@gmail.com', 'hoang phap', 2, '');
insert into accounts values (8, 'vanlai', 13123, 'vanlai@gmail.com', 'Van Lai', 2, '');
insert into accounts values (9, 'admin', 13123, 'admin@gmail.com', 'amdin', 2, '');
insert into accounts values (10, 'vendor', 13123, 'vendor@gmail.com', 'vendor', 1, '');
insert into accounts values (11, 'client', 13123, 'client@gmail.com', 'client', 2, '');

/*client*/
insert into clients values(1, '210697566', 1);
insert into clients values(2, '210697566', 4);
insert into clients values(3, '210697566', 5);

/* vendors */
insert into vendors values(1,1);
insert into vendors values(2,2);
insert into vendors values(3,3);

/*cars*/
insert into cars values(1, 1232123, '4', 1);
insert into cars values(2, 6463643, '7', 2);
insert into cars values(3, 4235235, '16', 3);
insert into cars values(4, 3636366, '2', 1);
insert into cars values(5, 1244232, '21', 2);
insert into cars values(6, 7079667, '4', 3);
insert into cars values(7, 3474556, '7', 2);
insert into cars values(8, 2342364, '16', 1);

/* parking_lots */
insert into parking_lots(address, number_of_slots, cost, isActive, vendor_id) values ('k110/8 NHT', 80, 10000, 1,1);
insert into parking_lots(address, number_of_slots, cost, isActive, vendor_id) values ('129 NCT', 23, 123443, 0,1);
insert into parking_lots(address, number_of_slots, cost, isActive, vendor_id) values ('234 NLB', 456, 12000, 0,2);
insert into parking_lots(address, number_of_slots, cost, isActive, vendor_id) values ('14 phan tu', 12, 56000, 1,2);
insert into parking_lots(address, number_of_slots, cost, isActive, vendor_id) values ('12 nguyen hoang', 67, 45000, 1,3);
