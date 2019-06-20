UPDATE products
SET name = ${name},
    description = ${description},
    price = ${price},
    image_url = ${image_url}
WHERE product_id = $1;

SELECT * FROM products;