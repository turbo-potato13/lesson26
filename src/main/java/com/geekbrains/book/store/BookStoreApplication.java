package com.geekbrains.book.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookStoreApplication {
	// Домашнее задание:
	// 1. Перенесите логику фильтров и пагинации на AngularJS

	public static void main(String[] args) {
		SpringApplication.run(BookStoreApplication.class, args);
	}
}
