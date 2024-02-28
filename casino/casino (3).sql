-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2024 a las 19:59:42
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `casino`
--
CREATE DATABASE IF NOT EXISTS `casino` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `casino`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bets`
--

CREATE TABLE `bets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `description_bet` varchar(250) NOT NULL,
  `amount_bet` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bets`
--

INSERT INTO `bets` (`id`, `user_id`, `game_id`, `description_bet`, `amount_bet`) VALUES
(1, 3, 1, 'Par/Impar', 20),
(2, 3, 2, 'Alto/Bajo', 30),
(4, 3, 2, 'Pleno 12', 1000),
(5, 8, 2, 'trio', 32),
(6, 6, 2, 'pareja', 56),
(7, 3, 1, 'numero mayores', 67),
(8, 6, 1, 'pares', 23),
(11, 1, 1, 'dsf', 123),
(12, 8, 1, 'street', 4560),
(13, 1, 1, 'line_double_street', 123),
(14, 8, 2, 'color', 100),
(16, 3, 1, 'oipopi', 123),
(26, 8, 1, 'even_odd', 200),
(37, 118, 1, 'straight_up', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `game`
--

INSERT INTO `game` (`id`, `name`, `description`) VALUES
(1, 'Roulette', 'The roulette table features a spinning wheel with numbered pockets, surrounded by various betting options on a green felt surface. Players bet on where a small ball will land, determining winning bets.'),
(2, 'Poker', 'The poker table is an oval or kidney-shaped surface covered in green felt, accommodating up to 9 or 10 players. It features a central pot for bets, padded armrests, and a dedicated dealer area.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `transaction_type` set('Ingresar','Retirar','Apuesta') NOT NULL,
  `balance` int(11) NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `transaction`
--

INSERT INTO `transaction` (`id`, `user_id`, `transaction_type`, `balance`, `transaction_date`) VALUES
(9, 3, 'Ingresar', 200, '2024-02-15 21:35:28'),
(10, 3, 'Ingresar', 1000, '2024-02-26 21:25:28'),
(11, 8, 'Ingresar', 300, '2024-02-27 23:05:33'),
(12, 8, 'Retirar', 100, '2024-02-27 23:06:07'),
(13, 8, 'Ingresar', 10, '2024-02-27 23:08:54'),
(14, 8, 'Ingresar', 1000, '2024-02-27 23:14:14'),
(15, 8, 'Ingresar', 500, '2024-02-27 23:14:20'),
(16, 8, 'Retirar', 750, '2024-02-27 23:14:27'),
(17, 8, 'Ingresar', 1000, '2024-02-27 23:14:33'),
(18, 8, 'Retirar', 10000, '2024-02-27 23:14:38'),
(19, 8, 'Ingresar', 8250, '2024-02-27 23:14:48'),
(25, 118, 'Ingresar', 0, '2024-02-28 16:12:17'),
(26, 118, 'Ingresar', 0, '2024-02-28 16:12:54'),
(27, 118, 'Ingresar', 10, '2024-02-28 16:14:32'),
(28, 118, 'Ingresar', 20, '2024-02-28 16:15:01'),
(29, 118, 'Ingresar', 90, '2024-02-28 16:17:44'),
(30, 118, 'Retirar', 1000, '2024-02-28 16:23:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `balance` float NOT NULL,
  `role` set('user','admin') NOT NULL,
  `user_delete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `email`, `password`, `balance`, `role`, `user_delete`) VALUES
(1, 'Rimuru', 'Tempest', 'rimurutempest@gmail.com', 'rimuru', 1000000, 'admin', 0),
(3, 'Zero', 'Two', 'zerotwo@gmail.com', 'zerotwo', 2000000, 'user', 0),
(4, 'juan', 'garcia', 'juan@gmail.com', '1234', 0, 'user', 0),
(5, 'a', 'a', 'a@gmail.com', 'a', 0, 'user', 0),
(6, 'b', 'b', 'b@gmail.com', 'b', 0, 'user', 0),
(8, 'c', 'c', 'c@gmail.com', 'c', 0, 'user', 0),
(117, 'Juan Antonio', 'Juangaca', 'juangaca@gmail.com', '1234', 0, 'user', 0),
(118, 'aaa', 'aaa', 'aaa@gmail.com', 'aaa', -880, 'user', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bets`
--
ALTER TABLE `bets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `fk_game_id` (`game_id`);

--
-- Indices de la tabla `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_transaction` (`user_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bets`
--
ALTER TABLE `bets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bets`
--
ALTER TABLE `bets`
  ADD CONSTRAINT `fk_game_id` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_user_id_transaction` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
