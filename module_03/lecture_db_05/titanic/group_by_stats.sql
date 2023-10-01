SELECT Pclass, Sex, avg(SURVIVED) as avg_survived
FROM TITANIC GROUP BY Pclass, Sex
HAVING avg(SURVIVED) > 0.2
ORDER BY avg_survived;