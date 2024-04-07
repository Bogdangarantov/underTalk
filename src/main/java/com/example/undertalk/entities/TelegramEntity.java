package com.example.undertalk.entities;

import lombok.*;

@Data
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TelegramEntity {
    String name;
    String phone;
}
