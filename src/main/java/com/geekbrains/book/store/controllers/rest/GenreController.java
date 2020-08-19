package com.geekbrains.book.store.controllers.rest;

import com.geekbrains.book.store.entities.Book;
import com.geekbrains.book.store.entities.Genre;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/genres")
@AllArgsConstructor
public class GenreController {

    @GetMapping
    public Genre[] getGenres(){
        return Genre.values();
    }
}
