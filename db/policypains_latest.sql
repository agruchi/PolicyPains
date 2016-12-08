-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2016 at 07:17 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `policypains`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE IF NOT EXISTS `address` (
  `address1` varchar(200) DEFAULT NULL,
  `address2` varchar(200) NOT NULL,
  `address3` varchar(200) DEFAULT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `phone` varchar(45) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE IF NOT EXISTS `complaint` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `subject` varchar(45) NOT NULL,
  `policyid` int(11) NOT NULL,
  `comlaint_type` varchar(45) NOT NULL,
  `complaint_details` varchar(45) NOT NULL,
  `complaint_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE IF NOT EXISTS `document` (
  `policyid` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `scan` varchar(45) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `follow-up`
--

CREATE TABLE IF NOT EXISTS `follow-up` (
  `id` int(11) NOT NULL,
  `company_response_date` datetime NOT NULL,
  `company_response` varchar(500) DEFAULT NULL,
  `company_action_taken` varchar(500) DEFAULT NULL,
  `customer_feedback` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `follow-up_transaction`
--

CREATE TABLE IF NOT EXISTS `follow-up_transaction` (
  `id` int(11) NOT NULL,
  `customerid` int(11) NOT NULL,
  `followupid` int(11) NOT NULL,
  `reprsentativeid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `policy`
--

CREATE TABLE IF NOT EXISTS `policy` (
  `id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `purchase_source` varchar(45) DEFAULT NULL,
  `purchase_date` datetime NOT NULL,
  `number_of_premiums_paid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `registerid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `middlename` varchar(45) NOT NULL,
  `usertitle` varchar(45) DEFAULT NULL,
  `gender` varchar(1) NOT NULL,
  `occupation` varchar(45) DEFAULT NULL,
  `usertype` varchar(45) NOT NULL,
  `addressid` int(11) NOT NULL,
  `registration_registerid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userid` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `salt` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `usertype` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `username`, `password`, `salt`, `email`, `usertype`) VALUES
(2, 'test', 'test', 'test', 'test@test.com', 'regular'),
(3, 'ruchi', '76b8e201fc1654e97a92bf46a1503d484f4b799d1d4fae1ec79b8fdf12af603b', '4880745823a5d405', 'ruchi@ruchi.com', 'admin'),
(4, 'dubey', 'a175d020188e2206caed7ac5e848b35c00502bde8375385dcea57927e91cab54', '62ffad412497c702', 'amitabhdd@gmail.com', 'regular');

-- --------------------------------------------------------

--
-- Table structure for table `user_registration`
--

CREATE TABLE IF NOT EXISTS `user_registration` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `registrationid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`id`),
  ADD KEY `complaint_policy_idx` (`policyid`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`),
  ADD KEY `document_policy_idx` (`policyid`);

--
-- Indexes for table `follow-up`
--
ALTER TABLE `follow-up`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `follow-up_transaction`
--
ALTER TABLE `follow-up_transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `followup_user_idx` (`followupid`),
  ADD KEY `followup_user_idx1` (`customerid`);

--
-- Indexes for table `policy`
--
ALTER TABLE `policy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`registerid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `user_registration`
--
ALTER TABLE `user_registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `follow-up`
--
ALTER TABLE `follow-up`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `follow-up_transaction`
--
ALTER TABLE `follow-up_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `policy`
--
ALTER TABLE `policy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `registerid` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user_registration`
--
ALTER TABLE `user_registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_registration` FOREIGN KEY (`id`) REFERENCES `registration` (`registerid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `complaint`
--
ALTER TABLE `complaint`
  ADD CONSTRAINT `complaint_policy` FOREIGN KEY (`policyid`) REFERENCES `policy` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `complaint_registration` FOREIGN KEY (`id`) REFERENCES `registration` (`registerid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `document_policy` FOREIGN KEY (`policyid`) REFERENCES `policy` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `follow-up_transaction`
--
ALTER TABLE `follow-up_transaction`
  ADD CONSTRAINT `followup-transaction_followup` FOREIGN KEY (`followupid`) REFERENCES `follow-up` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `followup_user` FOREIGN KEY (`customerid`) REFERENCES `user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
