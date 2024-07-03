
CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);

--sample data inserted for reference
INSERT INTO todos (name, date) VALUES 
('Complete React project', '2024-07-10'),
('Buy groceries', '2024-07-05'),
('Doctor appointment', '2024-07-08'),
('Call mom', '2024-07-04'),
('Finish book', '2024-07-15');
