drop database if exists my_data; 
create database my_data;
use my_data;

drop table if exists projects;
create table projects (
	title varchar(50) not null,
    language varchar(50) not null,
    repository varchar(100) not null,
    description varchar(500) not null
);

lock table projects write;
insert into projects values 
	('Personal Website','Javascript & React','https://github.com/deanmchugh/personal-site-react','I developed this website to build my skills in Javascript and React. The setup was bootstrapped with Create React App. I found the implementation of functionality through React very intuitive to learn, making it easy to build a basic website. Through this project, i have a better understanding of npm, node and git'),
    ('Personal Website','HTML & CSS','https://github.com/deanmchugh/siteDeanMcHugh','I developed this website to build my skills in HTML and CSS. The experience was enjoyable to see how CSS styling can manipulate the HTML into an astatically pleasing and easy to use website. The secondary benefit is the ability to show my skills in this area'),
    ('Inventory Manager','Java','https://github.com/deanmchugh/inventoryManager','A project produced in the process of completing a software development coarse. This java project was an exercize in object orientated coding. This code takes a cvs file of sales and updates the inventory and store money level. After the amount of inventory decreases below a threshold it automatically creates a itinerary for a delivery truck');
unlock tables;

drop table if exists employment;
create table employment (
	title varchar(50) not null,
    company varchar(50) not null,
    start datetime not null,
    end datetime not null,
    description varchar(500) not null,
    skills varchar(500) not null
);

lock table employment write;
insert into employment values
	('Electrical Meter Reader','Spotless Group','January 1, 2017','December 1, 2019','My current employment has built my skills in rapid accurate data entry. This is conducted on specialized hardware and software to ensure fluid collection and mobility. \nI have utilized this work to further develop my personal time management while being innovative to increase my productivity','Maintaining and operation of data capturing hardware{}Independent time management{}Data entry'),
    ('Bombardier','Australian Army','December 1, 2009','December 1, 2016','I served in the Australian defence force after leaving high school to give myself the opportunity to exercise my discipline and leadership. While serving I was promoted to the position of Bombardier and became the second in command of a section of soldiers. This required contribution from me to maximize the effectiveness of my team to execute tasks to achieve the desired outcome. \nThis experience cultivated strong work ethics and team dynamics that I can bring to any future employment','Training military personnel on equipment, weaponry, vehicles and communications devices{}Development of a fire team to execute military tactics{}Administration of a fire team for combat readiness');
unlock tables;

drop table if exists education;
create table education (
	institute varchar(50) not null,
    certificate varchar(50) not null,
    start datetime not null,
    end datetime not null,
    description varchar(500) not null,
    skills varchar(500) not null
);

lock table education write;
insert into education values
	('Queensland University of Technology','Batchelor of Information Technology','January 1, 2017','December 1, 2019','I am studying a major in Computer Science with minors in Intelligent systems and Mobile Applications. This course has exposed me to the new technologies available in current industry.\nThe use of scrum project development while completing team assignments allowed me to help the team by contributing with innovation and structured goal orientation','Structured sprint and task allocation to achieve product delivery{}Developed android and iOS applications{}Developed React websites{}Worked in small build teams');
unlock tables;