CREATE TABLE IF NOT EXISTS cellphone(
  cellphone_id UUID PRIMARY KEY NOT NULL,
  model VARCHAR(100) NOT NULL,
  price INTEGER NOT NULL,
  RAM INTEGER NOT NULL,
  ROM INTEGER NOT NULL
);