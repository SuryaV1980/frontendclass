create database  goverment;
use goverment;

create table Employee(

employeeid int primary key auto_increment,
employeename varchar(20),
employeeage int,
employeeemail varchar(30),
employeenumber varchar(20),
employeejoindate date DEFAULT (CURRENT_DATE),
userrole varchar(20) default "Admin",
updatedate timestamp default current_timestamp

);

drop table Employee;

insert into Employee (employeename,employeeage,employeeemail,employeenumber)value("Isha",22,"isha@gmail.com","+1(556)102-604");

