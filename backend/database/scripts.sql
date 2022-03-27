CREATE DATABASE space_Gallery;

CREATE TABLE IF NOT EXISTS images (
    id_image INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_url VARCHAR(255) NOT NULL,
    stars INT,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT image_user FOREIGN KEY (user_id) REFERENCES users(id_user),
    CONSTRAINT image_category FOREIGN KEY (category_id) REFERENCES categories(id_category)
);

CREATE TABLE IF NOT EXISTS comments (
    id_comment INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    comment TEXT,
    user_id INT NOT NULL,
    image_id INT NOT NULL,
    CONSTRAINT comment_user FOREIGN KEY (user_id) REFERENCES users(id_user),
    CONSTRAINT comment_image FOREIGN KEY (image_id) REFERENCES images(id_image)
);

CREATE TABLE IF NOT EXISTS users (
    id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_user VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id_category INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    type_category VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS labels (
    id_label INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    type_label VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS images_labels (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    image_id INT NOT NULL,
    label_id INT NOT NULL,
    CONSTRAINT fk_label FOREIGN KEY (label_id) REFERENCES labels(id_label),
    CONSTRAINT fk_image FOREIGN KEY (image_id) REFERENCES images(id_image)
);
