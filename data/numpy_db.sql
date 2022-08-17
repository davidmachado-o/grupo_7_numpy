CREATE DATABASE  IF NOT EXISTS `numpy_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `numpy_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: numpy_db
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Razer'),(2,'Corsair '),(3,'Mountain'),(4,'Logitech'),(5,'Asus'),(6,'Acer'),(7,'Samsung'),(8,'Dx Racer'),(9,'Cougar'),(10,'Newskill'),(11,'AMD '),(12,'Intel'),(13,'MSI'),(14,'Dell'),(15,'HP'),(16,'Lenovo'),(17,'Toshiba'),(18,'LG'),(19,'Apple'),(20,'Sony');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand_category`
--

DROP TABLE IF EXISTS `brand_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id_idx` (`brand_id`),
  CONSTRAINT `brand_11` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_category`
--

LOCK TABLES `brand_category` WRITE;
/*!40000 ALTER TABLE `brand_category` DISABLE KEYS */;
INSERT INTO `brand_category` VALUES (1,1,1),(2,1,4),(3,1,1),(4,2,2),(5,2,3),(6,2,4),(7,3,5),(8,3,6),(9,3,7),(10,4,8),(11,4,9),(12,4,10),(13,5,11),(14,5,12);
/*!40000 ALTER TABLE `brand_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Mouse'),(2,'Teclado'),(3,'Monitor'),(4,'Silla'),(5,'Procesador'),(6,'Combo');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image_1` varchar(45) NOT NULL,
  `image_2` varchar(45) NOT NULL,
  `image_3` varchar(45) NOT NULL,
  `products_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `products_id_idx` (`products_id`),
  CONSTRAINT `products_id` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `products_id` int(11) NOT NULL,
  `orders_id` int(11) NOT NULL,
  `price` varchar(45) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_idx` (`products_id`),
  KEY `orders_id_idx` (`orders_id`),
  CONSTRAINT `orders_id` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` varchar(45) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order_status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `picture` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `picture` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id_idx` (`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `model` varchar(45) DEFAULT NULL,
  `processor` varchar(45) DEFAULT NULL,
  `memory` varchar(45) DEFAULT NULL,
  `storage` varchar(45) DEFAULT NULL,
  `price_current` varchar(45) NOT NULL,
  `price_discount` varchar(45) NOT NULL,
  `stock` int(11) NOT NULL,
  `description` varchar(900) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id_idx` (`category_id`),
  KEY `brand_id_idx` (`brand_id`),
  CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,1,1,'Razer Basilisk','Razer 40',NULL,NULL,NULL,'100','90',20,'El mouse G502 es todo un icono que ha ocupado las primeras posiciones de las listas generación tras generación. Y es el mouse que eligen quienes juegan en serio. Ahora, el mouse G502 se une a las filas de los mouse inalámbricos para juegos más avanzados del mundo con el lanzamiento de G502 LIGHTSPEED.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(2,1,4,'Logitech G502 Lightspeed','G502 Lightspeed',NULL,NULL,NULL,'120','100',20,'El mouse G502 es todo un icono que ha ocupado las primeras posiciones de las listas generación tras generación. Y es el mouse que eligen quienes juegan en serio. Ahora, el mouse G502 se une a las filas de los mouse inalámbricos para juegos más avanzados del mundo con el lanzamiento de G502 LIGHTSPEED.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(3,1,1,'Razer DeathAdder V2 Pro','DeathAdder V2 Pro',NULL,NULL,NULL,'90','80',20,'Con más de 10 millones de Razer DeathAdder vendidos, el mouse gamer con más éxito de todos los tiempos se ha deshecho del cable para ofrecer una comodidad sin límites. Contempla al Razer DeathAdder V2 Pro - un mouse gamer que da paso a una nueva era de dominio gracias a la libertad total de movimiento y control.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(4,2,2,'Corsair K100 RGB Optical','K100 RGB Optical',NULL,NULL,NULL,'80','75',10,'El Corsair K100 RGB Optical es una potente y rápida solución para juegos de alto rendimiento. Con una resolución de 1920x1080, una velocidad de refresco de 144Hz, una cámara de vídeo de 120p y una cámara de vídeo de 120p, el K100 RGB Optical es el mouse de juegos de alto rendimiento más rápido del mercado.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(5,2,3,'Mountain Everest Max','Everest Max',NULL,NULL,NULL,'120','110',3,'La última palabra en teclados mecánicos con modularidad y personalización como ningún otro. Con un teclado numérico modular, una base multimedia, un reposamanos e interruptores intercambiables en caliente con iluminación RGB individual, hazlo tuyo y alcanza tu cima con la máxima flexibilidad y libertad de elección.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(6,2,4,'Logitech G915 Lightspeed','G915 Lightspeed',NULL,NULL,NULL,'70','65',10,'Un avance en diseño e ingeniería, el G915 incorpora tecnología LIGHTSPEED inalámbrica de calidad profesional, RGB LIGHTSYNC avanzada y nuevos interruptores mecánicos de alto desempeño y perfil bajo. Construido meticulosamente con materiales de primera calidad, el G915 tiene un sofisticado diseño de incomparable belleza, resistencia y desempeño. Descubre el G915 LIGHTSPEED y juega en la siguiente dimensión.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(7,3,5,'Asus Rog Swift PG35VQ','Rog Swift PG35VQ','NA',NULL,NULL,'100','100',10,'Monitor gamer ultrapanorámico de 35” 21:9 (3840 x 1440), FALD de 512 zonas, Brillo máximo de 1000 nits, 200 Hz OC., 2 ms, G-SYNC Ultimate, DisplayHDR1000™, Punto cuántico, Control inteligente de ventilación, Aura Sync, Amplificador ESS de alta fidelidad','2022-07-27 03:00:00','2022-08-17 16:18:33'),(8,3,6,'Acer Predator X27','Predator X27',NULL,NULL,NULL,'300','320',20,'El monitor de pantalla de 27 pulgadas de Acer Predator X27 es una potente solución para juegos de alto rendimiento. Con una resolución de 1920x1080, una velocidad de refresco de 144Hz, una cámara de vídeo de 120p y una cámara de vídeo de 120p, el X27 es el monitor de juegos de alto rendimiento más rápido del mercado','2022-07-27 03:00:00','2022-07-27 03:00:00'),(9,3,7,'Samsung CRG5','CRG5','NA',NULL,NULL,'400','380',10,'El primer monitor de juegos curvo de 240 Hz de Samsung elimina prácticamente el retraso de entrada, lo que te ayuda a reaccionar con la rapidez de los rayos a través de una pantalla curva envolvente. Relación de contraste 3000:1 te permite ver a los enemigos con mayor claridad, incluso en escenas más oscuras.','2022-07-27 03:00:00','2022-08-17 16:18:08'),(10,4,8,'Dx Racer GLADIATOR Series','GLADIATOR Series',NULL,NULL,NULL,'310','300',10,'Apoyabrazos 4D (R1-52-N0-CSide; R1-52-N0-DSide) Cubierta PU (símil cuero) Apoyacabeza y almohadón lumbar incluido Ruedas de 3 pulgadas. Mecanismo multifunción de balanceo. Altura usuario recomendada de 1,70 a 1,90 mts Peso Neto de la silla 25,5 kg. Límite de peso recomendado 120 kg Color Negro/Rojo. Armado no incluido. Viene en caja con instrucciones para armar.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(11,4,9,'Cougar Armor Titan','Armor Titan',NULL,NULL,NULL,'220','210',10,'RMOR TITAN es el trono de juego perfecto para aquellos que desean disfrutar de sus juegos con absoluta comodidad mientras disfrutan de una silla de juego visualmente atractiva. Dotado de una estructura extra grande y con soporte para hasta 160 kg, muchas opciones de ajuste y materiales de alta calidad, si está buscando la mejor silla para juegos, ¡está buscando ARMOR TITAN!','2022-07-27 03:00:00','2022-07-27 03:00:00'),(12,4,10,'Newskill Takamikura','Takamikura',NULL,NULL,NULL,'310','100',10,'Takamikura ha sido ideada bajo estos tres preceptos. Con ella proveemos a los jugadores de un gran confort y satisfacción durante las largas horas de juego, entrenamientos y competiciones. Gracias a Takamikura, podrás pasar de una posición de juego a una de descanso solo con ajustar su respaldo de 90º a 180º. Los reposabrazos de Takamikura disponen de ajuste multidireccional. Es decir: ajuste en altura, traslación frontal y horizontal.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(13,5,11,'AMD Ryzen 7 5700G','Ryzen 7 5700G','Ryzen 7',NULL,NULL,'410','380',20,'El procesador AMD Ryzen 7 5700G es una potente arquitectura de 64 bits, con una velocidad de hasta 3.9 GHz, y una memoria de hasta 16 GB de RAM. Su diseño de procesador de 64 bits, con una arquitectura de 64 bits, permite a los usuarios de AMD Ryzen 7 5700G tener una experiencia de juego más rápida y eficiente. Su procesador de 64 bits, con una arquitectura de 64 bits, permite a los usuarios de AMD Ryzen 7 5700G tener una experiencia de juego más rápida y eficiente.','2022-07-27 20:40:01','2022-07-27 20:40:01'),(14,5,12,'Intel Core i7 12700K','Core i7 12700K','Core i7','NA','NA','80','80',10,'Procesadores Intel Core de 12va Generación: una generación como ninguna otra. Con una nueva arquitectura híbrida de desempeño sin precedentes, los procesadores Intel Core de 12va Generación ofrecen una combinación única de núcleos de desempeño y de eficiencia (núcleos P y núcleos E). Y eso significa desempeño en usos reales, que se amplía de forma intuitiva para adaptarse a lo que esté haciendo.','2022-07-27 03:00:00','2022-08-17 16:27:24'),(15,5,12,'Intel Core i5 10400','Core i5 10400','Core i5',NULL,NULL,'100','97',10,'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.','2022-07-27 03:00:00','2022-07-27 03:00:00'),(16,6,11,'Combo Amd Ryzen 7 5800x3d + 64gb + X570 Plus','Ryzen 7 5800X3D','Ryzen 7','64gb','128gb','500','480',10,'Procesador: AMD RYZEN 7 5800X3D 4.5GHZ AM4 / SIN COOLER - SIN VIDEO. Motherboard: MOTHER MSI X570 A PRO AM4. Memoria: 2 X MEMORIA DDR4 ADATA XPG 32GB 3200MHZ SPECTRIX GREY D50G RGB','2022-07-27 03:00:00','2022-07-27 03:00:00'),(17,6,12,'Combo Intel Core i7-12700K + 64gb + GTX 1660 6gb','Core i7-12700K','Core i7','64gb','128gb','1000','900',20,'Procesador: INTEL CORE I7-9700K 3.6GHZ / SIN COOLER - SIN VIDEO. Motherboard: MOTHER ASUS PRIME Z370-A PRO AM4. Memoria: 2 X MEMORIA DDR4 ADATA XPG 32GB 3200MHZ SPECTRIX GREY D50G RGB','2022-07-27 03:00:00','2022-07-27 03:00:00'),(18,6,11,'Combo Amd Ryzen 9 5950x + 32gb 3600mhz + B550','Ryzen 9 5950X','Ryzen 9','32gb','128gb','800','760',10,'Procesador: AMD RYZEN 9 5950X 3.9GHZ AM4 / SIN COOLER - SIN VIDEO. Motherboard: MOTHER ASUS PRIME Z370-A PRO AM4. Memoria: 2 X MEMORIA DDR4 ADATA XPG 32GB 3200MHZ SPECTRIX GREY D50G RGB','2022-07-27 03:00:00','2022-07-27 03:00:00');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'1');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_products_id` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `picture_id` varchar(100) NOT NULL,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_type_id_idx` (`user_type_id`),
  KEY `picture_id_idx` (`picture_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,1,'image-1660767605320-535066677.jpeg','Mercedes',' ','mm.cavanagh@hotmail.com','$2a$10$Xy8QX8ggoa.ytwi4nvoruudAIiLS2Am2HhVaaeR.JrTk0ybaWtL16'),(2,1,1,'image-1660767787117-476877362.jpeg','David',' ','david@gmail.com','$2a$10$Z8YJRiJX846EbrLvHckC8upp68jWwXwEqfBEZCSenJZgxnCKfyPZ.'),(3,1,1,'image-1660767901547-629107395.jpeg','Aylin',' ','aylin@gmail.com','$2a$10$mDyMw/sOlFVZ3BST/k8HNO3tLzlVyGreGCsNxJ/.TyVd..XBtPzFC'),(4,1,1,'image-1660767961763-621754559.png','Alejo',' ','alejo@gmail.com','$2a$10$QA/VYHZUFVd9wDgwhrUoVugdWgmKH.IQjT1qsHJJ/y3qp29AoqQUW');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_products`
--

DROP TABLE IF EXISTS `users_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `products_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_id_idx` (`users_id`),
  CONSTRAINT `users_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_products`
--

LOCK TABLES `users_products` WRITE;
/*!40000 ALTER TABLE `users_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-17 17:28:01
