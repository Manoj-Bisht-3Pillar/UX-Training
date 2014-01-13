-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 13, 2014 at 07:47 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `master`
--

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `email` text NOT NULL,
  `address` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `fname`, `lname`, `email`, `address`) VALUES
(1, 'Raj', 'Bharti', 'raj.bharti@3pillarglobal.com', 'Noida'),
(2, 'Aaditi', 'Singla', 'aaditi.singla@3pillarglobal.com', 'Noida'),
(3, 'Aakash', 'Roy', 'aakash.roy@3pillarglobal.com', 'Noida'),
(4, 'Aaron', 'Roberts', 'aaron.roberts@3pillarglobal.com', 'Fairfax'),
(5, 'Abhinav', 'Kumar Singh', 'abhinav.singh@3pillarglobal.com', 'Noida'),
(6, 'Abhinav', 'Saraogi', 'abhinav.saraogi@3pillarglobal.com', 'Noida'),
(7, 'Abhishek', 'Kumar', 'abhishek.kumar@3pillarglobal.com', 'Noida'),
(8, 'Abhishek', 'Tyagi', 'abhishek.tyagi@3pillarglobal.com', 'Noida'),
(9, 'Abhy', 'Nadar', 'abhy.nadar@3pillarglobal.com', 'Noida'),
(10, 'Adela', 'Ileni', 'adela.ileni@3pillarglobal.com', 'Cluj-Napoca');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
