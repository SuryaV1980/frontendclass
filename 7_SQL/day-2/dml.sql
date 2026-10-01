create database students;
use students;

create table students(

studentid int primary key auto_increment,
studentname varchar(20),
studentage int,
studentdepartment varchar(20),
studentcity varchar(20),
createdby timestamp,
updatedby datetime default current_timestamp 


);

-- TASK 1: Insert Student

INSERT INTO students
(studentname, studentage, studentdepartment, studentcity)
VALUES
('Ravi', 22, 'CSE', 'Chennai');


-- TASK 2: Insert Multiple Students

INSERT INTO students
(studentname, studentage, studentdepartment, studentcity)
VALUES
('Arun', 23, 'IT', 'Madurai'),
('Bala', 21, 'ECE', 'Chennai'),
('Priya', 24, 'CSE', 'Coimbatore');


-- TASK 3: Update City

UPDATE students
SET studentcity = 'Bangalore'
WHERE studentid = 2;


-- TASK 4: Update Age

UPDATE students
SET studentage = 25
WHERE studentid = 3;


-- TASK 5: Update Multiple Columns

UPDATE students
SET studentage = 24,
    studentdepartment = 'IT',
    studentcity = 'Chennai'
WHERE studentid = 1;


-- TASK 6: Update Using Department

UPDATE students
SET studentcity = 'Madurai'
WHERE studentdepartment = 'CSE';


-- TASK 7: Delete One Student

DELETE FROM students
WHERE studentid = 4;


-- TASK 8: Delete Using City

DELETE FROM students
WHERE studentcity = 'Salem';


-- TASK 9: Timestamp Update

UPDATE students
SET studentcity = 'Chennai'
WHERE studentid = 2;



