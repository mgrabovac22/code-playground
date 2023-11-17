SET foreign_key_checks = 0;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `idauthor` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idauthor`),
  UNIQUE KEY `idPisci_UNIQUE` (`idauthor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
INSERT INTO `author` VALUES (1,'Mario Puzo');
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `idBook` int NOT NULL AUTO_INCREMENT,
  `book_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `genre_book` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `book_release_year` int NOT NULL,
  `author_name` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `users` int NOT NULL,
  `grade` int NOT NULL,
  PRIMARY KEY (`idBook`),
  UNIQUE KEY `idKnjige_UNIQUE` (`idBook`),
  KEY `users2_idx` (`users`),
  CONSTRAINT `users2` FOREIGN KEY (`users`) REFERENCES `user` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
INSERT INTO `book` VALUES (3,'Godfather','Mafia',1969,'1',1,5);
UNLOCK TABLES;

--
-- Table structure for table `book_author_fk_table`
--

DROP TABLE IF EXISTS `book_author_fk_table`;
CREATE TABLE `book_author_fk_table` (
  `book` int NOT NULL,
  `author` int NOT NULL,
  PRIMARY KEY (`book`,`author`),
  KEY `knjige_idx` (`book`),
  KEY `pisci_idx` (`author`),
  CONSTRAINT `knjige` FOREIGN KEY (`book`) REFERENCES `book` (`idBook`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `writer` FOREIGN KEY (`author`) REFERENCES `author` (`idauthor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_author_fk_table`
--

LOCK TABLES `book_author_fk_table` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `book_genres`
--

DROP TABLE IF EXISTS `book_genres`;

CREATE TABLE `book_genres` (
  `idBook_genre` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idBook_genre`),
  UNIQUE KEY `idZanrovi_UNIQUE` (`idBook_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_genres`
--

LOCK TABLES `book_genres` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `book_genres_fk_table`
--

DROP TABLE IF EXISTS `book_genres_fk_table`;
CREATE TABLE `book_genres_fk_table` (
  `book` int NOT NULL,
  `genre` int NOT NULL,
  PRIMARY KEY (`book`,`genre`),
  KEY `knjige_idx` (`book`),
  KEY `zanrovi_idx` (`genre`),
  CONSTRAINT `knjige_zanr` FOREIGN KEY (`book`) REFERENCES `book` (`idBook`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `zanrovi` FOREIGN KEY (`genre`) REFERENCES `book_genres` (`idBook_genre`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_genres_fk_table`
--

LOCK TABLES `book_genres_fk_table` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
  `idMovie` int NOT NULL AUTO_INCREMENT,
  `movie_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `movie_release_year` int NOT NULL,
  `movie_grade` int NOT NULL,
  `movie_genre` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  `user` int NOT NULL,
  PRIMARY KEY (`idMovie`),
  UNIQUE KEY `idFilmovi_UNIQUE` (`idMovie`),
  KEY `user_idx` (`user`),
  CONSTRAINT `user1` FOREIGN KEY (`user`) REFERENCES `user` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
INSERT INTO `movie` VALUES (4,'Godfather',1972,5,'Mafia',1);
UNLOCK TABLES;

--
-- Table structure for table `movie_genre_fk_table`
--

DROP TABLE IF EXISTS `movie_genre_fk_table`;
CREATE TABLE `movie_genre_fk_table` (
  `movie_genre_fk` int NOT NULL,
  `movie_fk` int NOT NULL,
  PRIMARY KEY (`movie_genre_fk`,`movie_fk`),
  KEY `zanr_idx` (`movie_genre_fk`),
  KEY `film_zanr_idx` (`movie_fk`),
  CONSTRAINT `genre_movie` FOREIGN KEY (`movie_genre_fk`) REFERENCES `movie_genres` (`idGenre_movies`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `movie_genre` FOREIGN KEY (`movie_fk`) REFERENCES `movie` (`idMovie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie_genre_fk_table`
--

LOCK TABLES `movie_genre_fk_table` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `movie_genres`
--

DROP TABLE IF EXISTS `movie_genres`;
CREATE TABLE `movie_genres` (
  `idGenre_movies` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idGenre_movies`),
  UNIQUE KEY `idZanr_filmovi_UNIQUE` (`idGenre_movies`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie_genres`
--

LOCK TABLES `movie_genres` WRITE;
INSERT INTO `movie_genres` VALUES (2,'Mafia');
UNLOCK TABLES;

--
-- Table structure for table `show`
--

DROP TABLE IF EXISTS `show`;
CREATE TABLE `show` (
  `idshows` int NOT NULL AUTO_INCREMENT,
  `show_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `genre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `rating` int NOT NULL,
  `episodes` int NOT NULL,
  `users` int NOT NULL,
  PRIMARY KEY (`idshows`),
  UNIQUE KEY `idshows_UNIQUE` (`idshows`),
  KEY `users_idx` (`users`),
  CONSTRAINT `users` FOREIGN KEY (`users`) REFERENCES `user` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `show`
--

LOCK TABLES `show` WRITE;
INSERT INTO `show` VALUES (3,'Suits','Drama',5,108,1);
UNLOCK TABLES;

--
-- Table structure for table `show_genre_fk_table`
--

DROP TABLE IF EXISTS `show_genre_fk_table`;
CREATE TABLE `show_genre_fk_table` (
  `show_genre` int NOT NULL,
  `show` int NOT NULL,
  PRIMARY KEY (`show_genre`,`show`),
  KEY `show_idx` (`show`),
  KEY `zanr_shows_idx` (`show_genre`),
  CONSTRAINT `show` FOREIGN KEY (`show`) REFERENCES `show` (`idshows`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `zanr_shows` FOREIGN KEY (`show_genre`) REFERENCES `show_genres` (`idgenre_shows`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `show_genre_fk_table`
--

LOCK TABLES `show_genre_fk_table` WRITE;
UNLOCK TABLES;

--
-- Table structure for table `show_genres`
--

DROP TABLE IF EXISTS `show_genres`;
CREATE TABLE `show_genres` (
  `idgenre_shows` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idgenre_shows`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `show_genres`
--

LOCK TABLES `show_genres` WRITE;
INSERT INTO `show_genres` VALUES (2,'Drama');
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `idUsers` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `age` int DEFAULT NULL,
  `password` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idUsers`),
  UNIQUE KEY `idUsers_UNIQUE` (`idUsers`),
  UNIQUE KEY `Name_UNIQUE` (`Name`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES (1,'Marin','grabovac@gmail.com','2003-06-12',20,'1234'),(26,'Luka','luka@gmail.com','2004-02-14',19,'345');
UNLOCK TABLES;

SET foreign_key_checks = 1;
