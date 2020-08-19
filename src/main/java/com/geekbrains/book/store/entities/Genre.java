package com.geekbrains.book.store.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Genre {
    FANTASY("Fantasy"),
    SCI_FI("Sci-Fi"),
    DETECTIVE("Detective");
    private final String genreName;
}
