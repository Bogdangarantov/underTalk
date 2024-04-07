package com.example.undertalk.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String hello() {
        System.out.println("HERE");
        return "page";
    }
}
