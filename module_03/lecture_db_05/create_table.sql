CREATE TABLE USERS (
    NAME VARCHAR(20) NOT NULL,
    EMAIL VARCHAR(20) UNIQUE,
    LOCATION VARCHAR(20) NOT NULL DEFAULT 'UNKNOWN'
);