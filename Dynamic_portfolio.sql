-- FYP Head_start Program
-- Schema Creation of
--                     My Dynamic Portfolio project
SET search_path to "public";

-- Table num 1 Creation
CREATE TABLE Contact_messages (
    Message_id SERIAL PRIMARY KEY,
    Sender_name VARCHAR(100) NOT NULL,
    Sender_email VARCHAR(100) NOT NULL,
    Message_body TEXT NOT NULL,
    Received_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    Is_read BOOLEAN DEFAULT FALSE
);

-- Table num 2 Creation
CREATE TABLE Site_content (
Id INT PRIMARY KEY DEFAULT 1,
About_headline VARCHAR(255),
About_description TEXT,
About_image_url VARCHAR(255),
Contact_email VARCHAR(110),
Linkedin_url VARCHAR(265),
Github_url VARCHAR(285),
CONSTRAINT single_row_lock CHECK (id = 1)
);

-- Table num 3 Creation
CREATE TABLE Education(
Education_id SERIAL PRIMARY KEY,
Institution VARCHAR(150) NOT NULL,
Degree VARCHAR(160) NOT NULL,
Start_date DATE NOT NULL,
End_date DATE,
Description TEXT
);

-- Table num 4 Creation
CREATE TABLE Skills(
Skill_id SERIAL PRIMARY KEY,
Skill_name VARCHAR(230) NOT NULL UNIQUE,
Category VARCHAR(50),
Icon_url VARCHAR(255),
Description TEXT 
);

-- Table Num 5 Creation
CREATE TABLE Projects(
Project_id SERIAL PRIMARY KEY,
Title VARCHAR(250) NOT NULL,
Description TEXT NOT NULL,
Image_url VARCHAR(255),
Project_url VARCHAR(255),
Github_url VARCHAR(255)
);

-- Table Num 6 Creation
CREATE TABLE Admins(
Admin_id SERIAL PRIMARY KEY,
Username VARCHAR(150) UNIQUE NOT NULL,
Password_hash VARCHAR(255) NOT NULL
);

-- table num 7 Creation
CREATE TABLE Certificates (
Certificate_id SERIAL PRIMARY KEY,
Title VARCHAR(250),
Issuing_organization VARCHAR(200),
Date_issued DATE,
Certificate_url VARCHAR(290),
Description TEXT
);

-- table num 8 Creation
CREATE TABLE Project_skills (
Project_id INT NOT NULL,
Skill_id INT NOT NULL,
PRIMARY KEY (Project_id, Skill_id),
FOREIGN KEY (Project_id) REFERENCES Projects(Project_id) ON DELETE CASCADE,
FOREIGN KEY (Skill_id) REFERENCES Skills(Skill_id) ON DELETE CASCADE
);

DROP TABLE Project_skills;
DROP TABLE Contact_messages;
DROP TABLE Education;
DROP TABLE Projects;
DROP TABLE Skills;
DROP TABLE Admins;
DROP TABLE Certificates;
DROP TABLE Site_content;