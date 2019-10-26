create database libraryDB;

create table categories(
    id_categories varchar(2) not null,
    name_categories varchar(50) not null,
    primary key(id_categories)
);

create table books(
    id_books int(4) not null auto_increment,
    name_books varchar(50) not null,
    stock_books int(4),
    image_books varchar(255),
    decs_books varchar(255),
    id_categories varchar(2),
    primary key(id_books),
    constraint fk_categories_01 foreign key(id_categories) references categories(id_categories)
);

insert into categories values
("WD", "Web Development"),
("MD", "Mobile Development"),
("GD", "Game Development");

insert into books values 
(null, "Html for Beginner", 10, "html.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "WD"),
(null, "Css for Beginner", 16, "css.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "WD"),
(null, "Php for Beginner", 7, "php.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "WD"),
(null, "Javascript for Beginner", 9, "javascript.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "WD"),
(null, "Java for Beginner", 15, "java.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "MD"),
(null, "Kotlin for Beginner", 23, "kotlin.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "MD"),
(null, "Android Studio for Beginner", 3, "android-studio.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "MD"),
(null, "C# for Beginner", 11, "c#.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "GD"),
(null, "Unity 3D for Beginner", 19, "unity.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum lectus", "GD");

