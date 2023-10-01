BEGIN;
UPDATE account SET balance = balance + 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 1;
ROLLBACK;