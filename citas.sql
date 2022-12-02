-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-12-2022 a las 16:41:58
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `citas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citapaciente`
--

CREATE TABLE `citapaciente` (
  `ID` int(10) NOT NULL,
  `idDoctor` int(10) NOT NULL,
  `idPaciente` int(10) NOT NULL,
  `fecha` date NOT NULL,
  `motivo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citapaciente`
--

INSERT INTO `citapaciente` (`ID`, `idDoctor`, `idPaciente`, `fecha`, `motivo`) VALUES
(1, 1, 1, '0000-00-00', 'Prueba'),
(2, 1, 1, '0000-00-00', 'prueba'),
(3, 15, 1, '0000-00-00', 'prueba2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctores`
--

CREATE TABLE `doctores` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `hospital` varchar(50) NOT NULL,
  `turno` varchar(50) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `especialidad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `doctores`
--

INSERT INTO `doctores` (`id`, `nombre`, `password`, `hospital`, `turno`, `apellidos`, `especialidad`) VALUES
(1, 'Alberto', '12345alberto', 'La paz', 'Tarde', 'Pérez', 'Pediatría'),
(15, 'Ana', 'ana', 'Puerta de Hierro', 'mañana', 'Herrera', 'digestivo'),
(16, 'Lucas', 'lucas', 'La Fe', 'tarde', 'Genis', 'corazón');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familiares`
--

CREATE TABLE `familiares` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `paciente` varchar(50) NOT NULL,
  `hospital` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `nombre`, `password`, `email`, `telefono`) VALUES
(1, 'Julian', '123456', 'julian@email.com', '123458794');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `nombre`, `password`) VALUES
(1, 'correo@gmail.com', 'Prueba', '12345'),
(2, 'lucas@email.com', 'Lucas', 'lucas12'),
(3, 'pepe@email.com', 'Pepe', 'pepedos'),
(4, 'pepe@email.com', 'Pepe', 'pepedos'),
(40, 'nacho@email.com', 'Nacho', 'nacho');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citapaciente`
--
ALTER TABLE `citapaciente`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `cita_doctor` (`idDoctor`),
  ADD KEY `cita_paciente` (`idPaciente`);

--
-- Indices de la tabla `doctores`
--
ALTER TABLE `doctores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `familiares`
--
ALTER TABLE `familiares`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citapaciente`
--
ALTER TABLE `citapaciente`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `doctores`
--
ALTER TABLE `doctores`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `familiares`
--
ALTER TABLE `familiares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citapaciente`
--
ALTER TABLE `citapaciente`
  ADD CONSTRAINT `cita_doctor` FOREIGN KEY (`idDoctor`) REFERENCES `doctores` (`id`),
  ADD CONSTRAINT `cita_paciente` FOREIGN KEY (`idPaciente`) REFERENCES `pacientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
