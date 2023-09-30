SELECT Survived, Pclass, Sex, count(SURVIVED)
FROM TITANIC GROUP BY Survived, Pclass, Sex 
HAVING survived = 0 ORDER BY count;