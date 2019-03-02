CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idbookList_UNIQUE` (`id`)
) ENGINE=InnoDB

INSERT INTO `books`.`books` (`title`) VALUES ('Время космоса');

CREATE TABLE `descriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `autor` varchar(80) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB

INSERT INTO `books`.`descriptions` (`autor`, `description`, `date`, `image`) VALUES ('Соловьев', 'Книга про космос', '2019-02-02', '11');
