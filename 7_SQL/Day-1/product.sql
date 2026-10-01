create database product;
use product;


create table product(

productid int primary key auto_increment,
productname varchar(20),
productprice varchar(30),
productquantity varchar(20),
productcat varchar(20),
productdate date DEFAULT (CURRENT_DATE),
userrole varchar(20) default "Admin",
updatedate timestamp default current_timestamp

);

insert into product (productname,productprice,productquantity,productcat)value("horlicks",20,1663,"milkpowder");