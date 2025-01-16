FROM php:8.2-apache

RUN apt-get update -y && apt-get install -y openssl zip unzip git

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-install pdo pdo_mysql

RUN php -m| grep mbstring

WORKDIR /app

COPY . /app

RUN composer install

CMD php artisan serve --port=8000

EXPOSE 8000