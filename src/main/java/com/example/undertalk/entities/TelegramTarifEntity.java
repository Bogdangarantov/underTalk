package com.example.undertalk.entities;

import lombok.*;

@Data
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TelegramTarifEntity {
    String name;
    String phone;
    String tariff;
}
