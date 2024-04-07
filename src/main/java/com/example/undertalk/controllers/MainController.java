package com.example.undertalk.controllers;

import com.example.undertalk.entities.TelegramEntity;
import com.example.undertalk.entities.TelegramTarifEntity;
import com.example.undertalk.services.TelegramService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MainController {
    @Autowired
    TelegramService telegramService;
    @GetMapping("/")
    public String startPage() {
        System.out.println("HERE");
        return "page";
    }

    @PostMapping("/")
    public ResponseEntity<String> telegram(@RequestBody TelegramEntity tg) throws JsonProcessingException {
        System.out.println(tg);
        telegramService.send(tg);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/tariff")
    public ResponseEntity<String> tariff(@RequestBody TelegramTarifEntity tg) throws JsonProcessingException {
        System.out.println(tg);
        telegramService.sendWithTariff(tg);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
