CREATE TABLE partners_demo (
                               id SERIAL PRIMARY KEY,
                               name VARCHAR(255),
                               email VARCHAR(255),
                               theme_id VARCHAR(255)
);

ALTER TABLE partners_demo
    ADD CONSTRAINT name_unique UNIQUE (name);