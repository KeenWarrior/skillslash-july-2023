CREATE TABLE TITANIC (
    PassengerId INT PRIMARY KEY,
    Survived INT,
    Pclass INT,
    Name VARCHAR(100),
    Sex VARCHAR(10),
    Age FLOAT,
    SibSp INT,
    Parch INT,
    Ticket VARCHAR(20),
    Fare FLOAT,
    Cabin VARCHAR(20),
    Embarked VARCHAR(20)
);


--  \copy titanic from './titanic.csv' DELIMITER ',' CSV HEADER;