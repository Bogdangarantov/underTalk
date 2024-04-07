package com.example.undertalk.services;

import com.example.undertalk.entities.TelegramEntity;
import com.example.undertalk.entities.TelegramTarifEntity;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class TelegramService {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private static final String URL = "https://api.telegram.org/bot7162444679:AAG3C17n7uSLk2yhO7TtNA5s78nWqrhTkqU/sendMessage";
    public void send(TelegramEntity telegramEntity) throws JsonProcessingException {

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject chat = new JSONObject();
        chat.put("chat_id", "6301056618");
        chat.put("text", "Ім'я : "+telegramEntity.getName()+"\nТелефон : "+telegramEntity.getPhone());
        HttpEntity<String> request = new HttpEntity<String>(chat.toString(), headers);
        String personResultAsJsonStr =restTemplate.postForObject(URL, request, String.class);
        JsonNode root = objectMapper.readTree(personResultAsJsonStr);

    }
    public void sendWithTariff(TelegramTarifEntity telegramEntity) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject chat = new JSONObject();
        chat.put("chat_id", "6301056618");
        chat.put("text", "Ім'я : "+telegramEntity.getName()+"\nТелефон : "+telegramEntity.getPhone()+"\nТариф : "+telegramEntity.getTariff());
        HttpEntity<String> request = new HttpEntity<String>(chat.toString(), headers);
        String personResultAsJsonStr =restTemplate.postForObject(URL, request, String.class);
        JsonNode root = objectMapper.readTree(personResultAsJsonStr);

    }
}
