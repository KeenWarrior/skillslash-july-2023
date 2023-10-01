-- https://www.w3resource.com/sql-exercises/sql-joins-exercises.php
-- Q1 
SELECT salesman.name as Salesman,
    customer.cust_name as Customer,
    salesman.city
from customer
    INNER JOIN salesman ON salesman.city = customer.city;


-- Q2
SELECT orders.ord_no, orders.purch_amt, customer.cust_name, customer.city
FROM orders
INNER JOIN customer ON customer.customer_id = orders.customer_id
WHERE orders.purch_amt BETWEEN 500 AND 2000;


--Q3
SELECT customer.cust_name as customer, salesman.name as salesman, salesman.city, salesman.commission
FROM salesman
INNER JOIN customer ON customer.salesman_id = salesman.salesman_id;

--Q4
SELECT customer.cust_name as customer, salesman.name as salesman, salesman.city, salesman.commission
FROM customer
INNER JOIN salesman ON customer.salesman_id = salesman.salesman_id
WHERE salesman.commission > 0.12;

--Q11
SELECT * 
FROM (orders INNER JOIN customer ON customer.customer_id = orders.customer_id)
INNER JOIN salesman ON salesman.salesman_id = customer.salesman_id;

--Q16
SELECT customer.cust_name, customer.grade, customer.city, orders.ord_no, orders.purch_amt
FROM orders
LEFT JOIN customer ON customer.customer_id = orders.customer_id;


-- Q18 
SELECT salesman.name as Salesman,
    customer.cust_name as Customer,
    salesman.city
from customer
    FULL JOIN salesman ON salesman.city = customer.city;





