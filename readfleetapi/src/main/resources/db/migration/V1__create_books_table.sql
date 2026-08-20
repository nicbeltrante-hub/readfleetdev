   CREATE TABLE books (
       id BIGSERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       author VARCHAR(255),
       genre VARCHAR(255),
       status VARCHAR(50) NOT NULL,
       total_pages INTEGER,
       pages_read INTEGER,
       cover_color VARCHAR(255),
       start_date DATE,
       end_date DATE,
       rating INTEGER
   );