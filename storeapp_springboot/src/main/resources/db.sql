
INSERT INTO public.brands(
	id, name)
	VALUES (1,'Fruna'),
	(2,'Evercrips'),
	(3,'Nestle'),
	(4,'Colun'),
	(5,'Costa'),
	(6,'McKay'),
	(7,'Ambrosoli');

INSERT INTO public.products(
	id, name, price, stock, brand_id)
	VALUES (1, 'Chocolito', 800, 12, 1),
	(2,'Papas Lays', 1200, 20, 2),
	(3, 'Doritos', 1200, 25, 2),
	(4, 'Sufle Queso', 800, 30, 1),
	(5,'Sufle Papa', 800, 11,1),
	(6, 'Manjar', 1200, 5, 3),
	(7, 'Manjar', 1500, 3, 4),
	(8, 'Costa Rama', 1200, 8, 5),
	(9, 'Galletas vino', 700, 9, 6),
	(10, 'Ositos de goma', 600, 10, 7),
	(11, 'Chocolate Sahne Nuss 250gr', 5500, 8, 3),
	(12, 'Chocolate Rolls crocante', 1200,4, 5);

INSERT INTO public.clients(
	id, dni, name, last_name)
	VALUES (1, '19.560.466-5', 'Andy', 'Garcia'),
	(2, '20.237.104-3', 'Aracelly', 'Godoy'),
	(3, '13.667.383-1', 'Belen', 'Oyarzo'),
	(4, '20.478.389-2', 'Jesua', 'Castillo'),
	(5, '22.398.289-4', 'Amparo', 'Hernandez'),
	(6, '21.348.234-k', 'Josefina', 'Martinez'),
	(7, '19.123.456-7', 'Antonella', 'Garcia');

