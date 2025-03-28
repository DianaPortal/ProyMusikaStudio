INSERT INTO categorias (descripcion, nombre) VALUES ('GUITARRA ELÉCTRICA', 'GUITARRA ELÉCTRICA');
INSERT INTO categorias (descripcion, nombre) VALUES ('GUITARRA ACÚSTICA', 'GUITARRA ACÚSTICA');
INSERT INTO categorias (descripcion, nombre) VALUES ('BAJO', 'BAJO');
INSERT INTO categorias (descripcion, nombre) VALUES ('ARPA', 'ARPA');
INSERT INTO categorias (descripcion, nombre) VALUES ('VIOLÍN', 'VIOLÍN');
INSERT INTO categorias (descripcion, nombre) VALUES ('CHARANGO', 'CHARANGO');
INSERT INTO categorias (descripcion, nombre) VALUES ('FLAUTA', 'FLAUTA');
INSERT INTO categorias (descripcion, nombre) VALUES ('QUENA', 'QUENA');
INSERT INTO categorias (descripcion, nombre) VALUES ('ZAMPOÑA', 'ZAMPOÑA');
INSERT INTO categorias (descripcion, nombre) VALUES ('BATERÍA ELÉCTRICA', 'BATERÍA ELÉCTRICA');
INSERT INTO categorias (descripcion, nombre) VALUES ('BATERÍA ACÚSTICA', 'BATERÍA ACÚSTICA');
INSERT INTO categorias (descripcion, nombre) VALUES ('TIMBAL', 'TIMBAL');
INSERT INTO categorias (descripcion, nombre) VALUES ('BONGO', 'BONGO');
INSERT INTO categorias (descripcion, nombre) VALUES ('CONGA', 'CONGA');
INSERT INTO categorias (descripcion, nombre) VALUES ('PIANO', 'PIANO');
INSERT INTO categorias (descripcion, nombre) VALUES ('TECLADO', 'TECLADO');
INSERT INTO categorias (descripcion, nombre) VALUES ('AUDIO', 'AUDIO');

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- GUITARRAS - BAJOS - FLAUTAS
INSERT INTO marcas (nombre) VALUES ('FERNDER');
INSERT INTO marcas (nombre) VALUES ('GIBSON');
INSERT INTO marcas (nombre) VALUES ('IBANEZ');
INSERT INTO marcas (nombre) VALUES ('YAMAHA');
INSERT INTO marcas (nombre) VALUES ('PEARL');
-- ARPA
INSERT INTO marcas (nombre) VALUES ('SALVI HARPS');
INSERT INTO marcas (nombre) VALUES ('CAMAC HARPS');
-- VIOLÍN
INSERT INTO marcas (nombre) VALUES ('CECILIO');
INSERT INTO marcas (nombre) VALUES ('EASTMAN STRINGS');
-- CHARANGO
INSERT INTO marcas (nombre) VALUES ('CHARANGOS ARTESANALES BOLIVIA');
INSERT INTO marcas (nombre) VALUES ('VALERIANO BERNAL');
-- QUENAS - ZAMPOÑAS
INSERT INTO marcas (nombre) VALUES ('QUENAS MORALES');
INSERT INTO marcas (nombre) VALUES ('CONDOR QUENAS');
INSERT INTO marcas (nombre) VALUES ('ANDEAN WIND INSTRUMENTS');
-- BATERÍAS - TIMBALES - BONGOS - CONGAS
INSERT INTO marcas (nombre) VALUES ('LP');
INSERT INTO marcas (nombre) VALUES ('TAMA');
INSERT INTO marcas (nombre) VALUES ('MEINL');
INSERT INTO marcas (nombre) VALUES ('TYCOON');
INSERT INTO marcas (nombre) VALUES ('MATADOR');
-- PIANOS - TECLADOS
INSERT INTO marcas (nombre) VALUES ('Casio');
INSERT INTO marcas (nombre) VALUES ('Roland');
INSERT INTO marcas (nombre) VALUES ('Korg');
INSERT INTO marcas (nombre) VALUES ('Alesis');
-- AUDIOS
INSERT INTO marcas (nombre) VALUES ('BOSE');
INSERT INTO marcas (nombre) VALUES ('SENNHEISER');
INSERT INTO marcas (nombre) VALUES ('MACKIE');
INSERT INTO marcas (nombre) VALUES ('SHURE');
INSERT INTO marcas (nombre) VALUES ('KRK');

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO metodo_pagos (nombre, activo) VALUES ('EFECTIVO', 1);
INSERT INTO metodo_pagos (nombre, activo) VALUES ('TRANSFERENCIA', 1);
INSERT INTO metodo_pagos (nombre, activo) VALUES ('TARJETA', 1);

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO roles (nombre) VALUES ('USER');
INSERT INTO roles (nombre) VALUES ('ADMIN');

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO tipo_documentos (nombre) VALUES ('DNI');
INSERT INTO tipo_documentos (nombre) VALUES ('CARNET DE EXTRANJERIA');

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- GUITARRAS LECTRICAS
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 3199, 0, '2024-11-24', 1, 1, 'Guitarra eléctrica de alta calidad.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraFenderPlayerAnniversary.webp', 'Guitarra Fender Player Anniversary');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 7899, 0, '2024-11-24', 1, 2, 'Guitarra Gibson estilo clásico.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraGibsonSG.webp', 'Guitarra Gibson SG');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1999, 0, '2024-11-24', 1, 4, 'Guitarra eléctrica Yamaha profesional.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraYamahaPacifica.webp', 'Guitarra Yamaha Pacifica');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 3399, 0, '2024-11-24', 1, 5, 'Guitarra eléctrica Pearl edición limitada.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraPearlCustom.webp', 'Guitarra Pearl Custom');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 8599, 0, '2024-11-24', 1, 3, 'Guitarra Ibanez diseño moderno.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraIbanezJem.webp', 'Guitarra Ibanez Jem');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1200, 10, '2024-11-24', 1, 1, 'Guitarra eléctrica con excelente resonancia.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraFernderStratocaster.jpg', 'Guitarra Fender Stratocaster');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 5500, 10, '2024-11-24', 1, 2, 'Guitarra de alta calidad ideal para solos.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraGibsonLesPaul.webp', 'Guitarra Gibson Les Paul');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2500, 15, '2024-11-24', 1, 3, 'Guitarra eléctrica perfecta para todos los géneros.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraIbanezRG.jpg', 'Guitarra Ibanez RG');
-- GUITARRAS ACUSTICAS
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1000, 8, '2024-11-24', 1, 4, 'Guitarra acústica con un sonido claro y brillante.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraYamahaFG800.webp', 'Guitarra Yamaha FG800');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 600, 5, '2024-11-24', 1, 5, 'Guitarra eléctrica de alta resonancia.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraPearl.webp', 'Guitarra Pearl');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 900, 10, '2024-11-24', 1, 4, 'Guitarra acústica versátil para cualquier músico.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/GuitarraYamahaA3M.webp', 'Guitarra Yamaha A3M');
-- BAJOS ELECTRICOS
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 4999, 0, '2024-11-24', 3, 1, 'Bajo eléctrico de excelente resonancia.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoFenderPrecision.webp', 'Bajo Fender Precision');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 3099, 0, '2024-11-24', 3, 2, 'Bajo eléctrico estilo vintage.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoGibsonSG.jpg', 'Bajo Gibson SG');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2899, 0, '2024-11-24', 3, 3, 'Bajo de alto rendimiento.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoIbanezSR300.webp', 'Bajo Ibanez SR300');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 799, 0, '2024-11-24', 3, 1, 'Bajo eléctrico clásico de Fender.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoFenderJazz.jpg', 'Bajo Fender Jazz');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 7299, 0, '2024-11-24', 3, 2, 'Bajo Gibson con cuerpo sólido.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoGibsonThunderbird.jpeg', 'Bajo Gibson Thunderbird');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 949, 0, '2024-11-24', 3, 3, 'Bajo eléctrico versátil de Ibanez.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/BajoIbanezGSR200.webp', 'Bajo Ibanez GSR200');
-- TECLADOS
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2000, 8, '2024-11-24', 16, 4, 'Teclado con 88 teclas contrapesadas y excelente respuesta táctil.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/YamahaP-125.webp', 'Yamaha P-125');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2500, 5, '2024-11-24', 16, 21, 'Teclado para producción con múltiples efectos integrados.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/RolandFP-30X.webp', 'Roland FP-30X');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1500, 10, '2024-11-24', 16, 20, 'Teclado portátil ideal para estudiantes de música.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/CasioCT-X700.jpg', 'Casio CT-X700');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1200, 4, '2024-11-24', 16, 4, 'Teclado avanzado con sistema de grabación integrado.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/YamahaMODX8.png', 'Yamaha MODX8');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1100, 7, '2024-11-24', 16, 21, 'Teclado con gran banco de sonidos y sensibilidad profesional.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/RolandGoKeys.webp', 'Roland Go: Keys');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 3200, 15, '2024-11-24', 16, 20, 'Teclado compacto y versátil con acompañamientos automáticos.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/CasioWK-6600.jpg', 'Casio WK-6600');
-- BATERIAS
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 3500, 6, '2024-11-24', 11, 5, 'Batería acústica de madera con excelente resonancia.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/PearlExportEXX.jpg', 'Pearl Export EXX');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 4000, 4, '2024-11-24', 11, 16, 'Batería profesional con acabados premium.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/TamaStarclassic.jpg', 'Tama Starclassic');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2800, 7, '2024-11-24', 10, 21, 'Batería electrónica compacta ideal para estudio.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/RolandTD-1DMK.png', 'Roland TD-1DMK');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 5000, 3, '2024-11-24', 11, 5, 'Batería de gama alta para conciertos.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/PearlMasterworks.webp', 'Pearl Masterworks');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 3000, 5, '2024-11-24', 11, 16, 'Batería con gran rango dinámico y calidad de sonido.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/TamaImperialstar.jpg', 'Tama Imperialstar');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2500, 8, '2024-11-24', 10, 21, 'Batería electrónica avanzada con múltiples configuraciones.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/RolandV-DrumsTD-17KVX.jpg', 'Roland V-Drums TD-17KVX');
-- TIMBALES
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 800, 12, '2024-11-24', 12, 15, 'Timbal de acero inoxidable para música latina.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/LPTitoPuenteTimbales.jpg', 'LP Tito Puente Timbales');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 900, 8, '2024-11-24', 12, 17, 'Timbal profesional con baquetas incluidas.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/MeinlMarathonTimbales.jpg', 'Meinl Marathon Timbales');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 850, 10, '2024-11-24', 12, 15, 'Timbal compacto ideal para presentaciones en vivo.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/LPAspireTimbales.webp', 'LP Aspire Timbales');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 950, 7, '2024-11-24', 12, 17, 'Timbal premium con gran resonancia.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/MeinlTimbalesPro.webp', 'Meinl Timbales Pro');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 700, 15, '2024-11-24', 12, 15, 'Timbal estándar para principiantes.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/LPCityTimbales.webp', 'LP City Timbales');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1100, 5, '2024-11-24', 12, 17, 'Timbal profesional con afinación precisa.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/MeinlPerformerSeries.jpg', 'Meinl Performer Series');
-- AUDIO
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1500, 10, '2024-11-24', 17, 27, 'Micrófono profesional para grabación de estudio.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/ShureSM7B.webp', 'Shure SM7B');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2000, 6, '2024-11-24', 17, 4, 'Mezclador digital compacto para directos.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/YamahaMG10XU.jpg', 'Yamaha MG10XU');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1200, 12, '2024-11-24', 17, 28, 'Monitor de estudio con respuesta plana.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/KRKRokit5G4.jpg', 'KRK Rokit 5 G4');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 2500, 4, '2024-11-24', 17, 25, 'Micrófono inalámbrico de alta calidad.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/SennheiserEW112PG4.jpg', 'Sennheiser EW 112P G4');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 12000, 5, '2024-11-24', 17, 26, 'Sistema de audio completo para presentaciones en vivo.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/MackieThumpSeries.jpg', 'Mackie Thump Series');
INSERT INTO instrumentos (activo, precio, stock, fecha_ingreso, id_categoria, id_marca, descripcion, imagen, nombre) VALUES (1, 1800, 8, '2024-11-24', 17, 4, 'Monitor de referencia profesional.', 'https://storagemusikastudio.blob.core.windows.net/instrumentos/YamahaHS8.jpg', 'Yamaha HS8');

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO usuarios (fecha_registro, id_rol, id_tipo_documento, nombre, apellido, correo, direccion, n_documento, password, telefono) VALUES ('2024-11-24', 2, 1, 'Diego', 'Doria', 'DiegoDoria@example.com', 'Las fresias, La Molina', '72557873', 'diego123', '928109364');
INSERT INTO usuarios (fecha_registro, id_rol, id_tipo_documento, nombre, apellido, correo, direccion, n_documento, password, telefono) VALUES ('2024-11-24', 1, 1, 'Junior', 'Torres', 'JuniorTorres@example.com', 'Las fresias, La Molina', '54372318', 'junior123', '942421364');
INSERT INTO usuarios (fecha_registro, id_rol, id_tipo_documento, nombre, apellido, correo, direccion, n_documento, password, telefono) VALUES ('2024-11-24', 1, 2, 'Luis', 'Zambrano', 'LuisZambrano@example.com', 'Las fresias, La Molina', '98045254', 'luis123', '937027692');
INSERT INTO usuarios (fecha_registro, id_rol, id_tipo_documento, nombre, apellido, correo, direccion, n_documento, password, telefono) VALUES ('2024-11-24', 1, 1, 'Diana', 'Portal', 'DianaPortal@example.com', 'Las fresias, La Molina', '67500912', 'diana123', '992595578');

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO ventas (confirmada, precio_total, fecha_venta, id_metodo_pago, id_usuario) VALUES (1, 21196, '2024-11-25', 1, 1);
INSERT INTO ventas (confirmada, precio_total, fecha_venta, id_metodo_pago, id_usuario) VALUES (1, 22099, '2024-11-25', 2, 3);

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (3, 9597, 1, 1);
INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (1, 8599, 5, 1);
INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (1, 3000, 28, 1);
INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (5, 7500, 36, 2);
INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (2, 1700, 32, 2);
INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (1, 7899, 2, 2);
INSERT INTO detalle_ventas (cantidad, sub_total, id_instrumento, id_venta) VALUES (2, 5000, 19, 2);