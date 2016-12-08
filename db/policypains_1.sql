-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2016 at 10:51 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

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
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `phone` int(15) NOT NULL,
  `email` varchar(250) NOT NULL,
  `country` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `experience` varchar(250) NOT NULL,
  `position` varchar(250) NOT NULL,
  `attachment` mediumblob NOT NULL,
  `message` varchar(500) NOT NULL,
  `functionalarea` varchar(250) NOT NULL,
  `industry` varchar(250) NOT NULL,
  `datesubmitted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `noticeperiod` varchar(250) NOT NULL,
  `flex_1` varchar(250) NOT NULL,
  `flex_2` varchar(250) NOT NULL,
  `flex_3` varchar(250) NOT NULL,
  `flex_4` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`id`, `name`, `phone`, `email`, `country`, `city`, `experience`, `position`, `attachment`, `message`, `functionalarea`, `industry`, `datesubmitted`, `noticeperiod`, `flex_1`, `flex_2`, `flex_3`, `flex_4`) VALUES
(82, 'Girish Verma', 2147483647, 'greeshsoni@gmail.com.com', '', '', 'Four year six months', 'As s Sales & Distribution', '', 'Totally four year six month experience telecom industries...and pls find my CV and pls give the opportunity as per my skills.....', '', '', '2016-05-19 12:14:51', '', '', '', '', ''),
(81, 'Hardev Singh', 2147483647, 'hardevsingh803@gmail.com', '', '', '4 year 3 Month', 'Accounts Executive', '', 'i am looking for a job change agra and aligarh location.', '', '', '2016-05-18 13:54:48', '', '', '', '', ''),
(8, 'Amit Goyal', 0, 's1@123.com', 'India', 'Pune', '12 years', 'UI Developer', '', 'testing', '', '', '0000-00-00 00:00:00', '', '', '', '', ''),
(80, 'Imran Uddin', 2147483647, 'imranuddinnawab@gmail.com', '', '', '10', 'Accountant Executive', '', 'Sir/mam\r\nif any suitable job in Delhi NCR & UAE plz infrom me', '', '', '2016-05-18 12:20:46', '', '', '', '', ''),
(79, 'AKASH AGARWAL', 2147483647, 'AKASH_AGARWAL102@YAHOO.COM', '', '', '7 YEARS', 'ACCOUNT MANAGER', '', 'LOOKING FOR JOB ', '', '', '2016-05-18 10:27:23', '', '', '', '', ''),
(69, 'Rekha', 76876786, 'rekha@gmail.com', '', '', '13', 'Teacher', '', 'testing chrome browser', '', '', '0000-00-00 00:00:00', '', '', '', '', ''),
(70, 'honey gupta', 2147483647, 'guptahoney899@gmail.com', '', '', '3 years', 'HR', '', 'APPLIED FOR HR POST ', '', '', '2016-03-30 05:22:20', '', '', '', '', ''),
(71, 'ATANU ROY', 2147483647, 'atanuroy99@gmail.com', '', '', '24 YEARS', 'Suitable post', '', 'I am an MBA in marketing ,having 24 yrs of experience in sales & marketing', '', '', '2016-04-01 05:29:40', '', '', '', '', ''),
(72, 'Ajay Tomar', 2147483647, 'ajaytomar609@gmail.com', '', '', '6 months', 'graphic designer', '', 'seeking  a position in an organization where i can enhance my skills as  graphic designer', '', '', '2016-04-03 07:27:48', '', '', '', '', ''),
(73, 'Sanjay Kumar', 2147483647, 'sanjaykumar@gmail.com', '', '', '1 year', 'Sales Executive', '', 'To work with the the progressive organization that   gives me opportunity to learn ', '', '', '2016-04-03 07:40:57', '', '', '', '', ''),
(74, 'Ankit mishra', 907339195, 'mishrankit1469@gmail.com', '', '', '9 yers', 'Sales Executive', '', 'I m seeking a position in good organization where i can learn & prove my self', '', '', '2016-04-03 07:45:51', '', '', '', '', ''),
(75, 'Chaman Kumar Singh', 2147483647, 'chamansingh331@gmail.com', '', '', 'fresher', 'graphic designer', '', 'Seeking innovative & challenging career.', '', '', '2016-04-03 08:32:15', '', '', '', '', ''),
(76, 'Syed Amir', 2147483647, 'syed.amir586@gmail.com', '', '', 'fresher', 'graphic designer', '', '.........', '', '', '2016-04-03 08:45:14', '', '', '', '', ''),
(77, 'Hina Hindwani', 2147483647, 'hindwanihina@gmail.com', '', '', '1.5 years', 'graphic designer', '', '...............', '', '', '2016-04-03 08:50:01', '', '', '', '', ''),
(78, 'Ashish goyal', 2147483647, 'ashishgoyal0510@gmail.com', '', '', '5 years', 'team leader', '', '................', '', '', '2016-04-03 09:06:23', '', '', '', '', ''),
(83, 'mudit sharma', 2147483647, 'muditsha@rediffmail.com', '', '', '6 years', 'collections', '', 'please find my resume for working  in collection department any nbfc or banking sector  ', '', '', '2016-05-21 08:21:42', '', '', '', '', ''),
(84, 'Ankit Sisodiya', 2147483647, 'as22786@gmail.com', '', '', 'Fresher', 'Trainee', '', 'I have a experience in sales around one year.but i am looking for a job in operation....', '', '', '2016-05-21 10:11:16', '', '', '', '', ''),
(85, 'chetan verma', 2147483647, 'chetanverma16791@gmail.com', '', '', '4.8', 'office assistant', '', 'need urgent new job', '', '', '2016-05-23 13:13:22', '', '', '', '', ''),
(86, 'JINAL KUMAR', 2147483647, 'jinalco.in@gmail.com', '', '', '6 YEARS', 'DESKTOP SUPPORT ENGG.', '', 'if this type jobs availeble plz contect.', '', '', '2016-05-24 05:19:45', '', '', '', '', ''),
(87, 'ANKIT AGRAWAL', 2147483647, 'maccankit2010@Gmail.com', '', '', '3 years', 'RF ENGINEER ', '', 'LOOKING FOR A JOB CHANGE ', '', '', '2016-05-24 08:17:55', '', '', '', '', ''),
(88, 'anurag doharey', 2147483647, 'tomgun007008@yahoo.co.in', '', '', '3y', 'asm', '', 'hi\r\n sir', '', '', '2016-05-24 17:17:08', '', '', '', '', ''),
(89, 'Swati', 2147483647, 'swtisaini.84@gmail.com', '', '', '6.5years', 'HR', '', 'Looking for the job of HR', '', '', '2016-05-25 02:16:23', '', '', '', '', ''),
(90, 'swati', 2147483647, 'swatisaini.84@gmail.com', '', '', '6.5years', 'HR ', '', 'Looking for the job of HR', '', '', '2016-05-25 02:18:58', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) UNSIGNED NOT NULL,
  `fname` varchar(250) NOT NULL,
  `lname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `country` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `contactdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `fname`, `lname`, `email`, `country`, `city`, `description`, `contactdate`) VALUES
(17, 'amit', 'agarwal', 'agr.amitg@gmail.com', 'india', 'agra', 'need help in manpower', '0000-00-00 00:00:00'),
(16, 'amit', 'goyal', 'agr.amitg@gmail.com', 'india', 'agra', 'hi looking for manpower', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(100) NOT NULL,
  `name` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `companyname` varchar(250) NOT NULL,
  `companytype` varchar(250) NOT NULL,
  `heardfrom` varchar(250) DEFAULT NULL,
  `jobtitle` varchar(250) NOT NULL,
  `joblocation` varchar(250) NOT NULL,
  `jobcategory` varchar(250) NOT NULL,
  `jobdesc` varchar(250) DEFAULT NULL,
  `employmenttype` varchar(250) NOT NULL,
  `certify` varchar(1) NOT NULL,
  `jobposteddate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `name`, `phone`, `email`, `companyname`, `companytype`, `heardfrom`, `jobtitle`, `joblocation`, `jobcategory`, `jobdesc`, `employmenttype`, `certify`, `jobposteddate`) VALUES
(30, 'Rekha Sharma', '4089232812', 'ag_ruchi@yahoo.com', 'GotPrint', 'medium-company-20', 'search_engine', 'Sr Developer', 'San Jose', 'Art/Media/Writers', 'testing', 'full_time', '1', '2016-03-15 08:51:32'),
(31, 'Ankit mishra', '9027339195', 'mishraankit469@gmail.com', 'Baba Construction', 'medium-company-20', 'other', 'Sales Executive', '282001', 'Construction/Skilled Trade', 'Worked as Sales Executive for 9 Years   in a Construction Company.', 'full_time', '1', '2016-03-29 08:38:59'),
(32, 'Aashi', '7571944440', 'goelashi@gmail.com', 'Emsource Consulting', 'recruiting-firm', 'search_engine', 'Receptionist', 'Lucknow ', 'Education', 'asdaakdjkasjdakakjjjjkkkkk', 'full_time', '1', '2016-04-03 07:43:23'),
(33, 'Aashi', '7571944440', 'goelashi@gmail.com', 'Emsource Consulting', 'recruiting-firm', 'search_engine', 'Receptionist', 'Lucknow ', 'Education', 'asdaakdjkasjdakakjjjjkkkkk', 'full_time', '1', '2016-04-03 07:43:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `salt` varchar(250) DEFAULT NULL,
  `email` varchar(250) NOT NULL,
  `usertype` varchar(250) NOT NULL DEFAULT 'regular',
  `signupdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`, `email`, `usertype`, `signupdate`) VALUES
(1, 'amit', '3900946e5a9e1390ac4baec38ce64af059cc4269c6b7c945fcfc8a99f586493a', '62de6954747ec382', 'amitg.agr@gmail.com', 'admin', '0000-00-00 00:00:00'),
(2, 'anujbansal', '15a4fd43e6db6af3b2590095cb230f91132ce3f530e343bc1df0cfc7377442b8', '25ed517863753bac', 'anujb.mtr@gmail.com', 'regular', '0000-00-00 00:00:00'),
(3, 'ruchi', 'c0102a0ce03b11cdc450d58dd65db63d5b0b9017d83ba6b738d908b900dad43f', '2ee2919a35410a2d', 'ruchi@ruchi.com', 'regular', '2016-03-22 07:39:39'),
(4, 'Girish Verma', 'd0317cf5dfc131c8a51105166813d0df4c2ecfdc17e9bb4e66beaf95d043e50c', '2353027a57fdc7fc', 'greeshsoni@gmail.com.com', 'regular', '2016-05-19 12:15:59'),
(5, 'chetan786', '55f4f1406cc8ea9c28e9b9e65b515f1aca00b72f446497801ac2c79865b43872', '61571669438c4d62', 'chetanverma16791@gmail.com', 'regular', '2016-05-23 13:10:41'),
(6, 'swati', 'e357034f45d104715a373dcf21e50a76ad38cb285abf23420090d3f1fb20fd2a', '4f4048235cb2d321', 'swatisaini.84@gmail.com', 'regular', '2016-05-25 02:12:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
