
DROP TABLE IF EXISTS clothes;

CREATE TABLE clothes(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  type varchar(255)
);