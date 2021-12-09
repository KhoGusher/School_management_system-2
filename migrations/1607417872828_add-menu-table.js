exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE menu (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        price DECIMAL(10, 2) NOT NULL CHECK (price > 0),
        description VARCHAR(245),
        url VARCHAR(300),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
   `);
};

exports.down = pgm => {
    pgm.sql(`
      DROP TABLE menu;
    `);
};