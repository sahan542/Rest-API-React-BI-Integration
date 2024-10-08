package com.Icieos.Rest_API_with_BI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.annotations.GeneratorType;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private Integer age;
    private String address;

}