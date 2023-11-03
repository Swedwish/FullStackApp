package com.webapp.application.deserializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.webapp.application.model.Animal;

import java.io.IOException;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class AnimalDeserializer extends StdDeserializer<Animal> {
    public AnimalDeserializer() {
        this(null);
    }

    public AnimalDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public Animal deserialize(JsonParser parser, DeserializationContext context) {
        Animal animal = new Animal();
        try {
            JsonNode node = parser.getCodec().readTree(parser);
            String name = node.get("name").asText();
            String species = node.get("species").asText();
            String dateOfBirth = node.get("date_of_birth").asText();
            SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
            Date parsedDate;
            parsedDate = new java.sql.Date(dateFormat.parse(dateOfBirth).getTime());

            String gender = node.get("gender").asText();


            animal.setName(name);
            animal.setSpecies(species);
            animal.setDate_of_birth(parsedDate);
            animal.setGender(gender);

            return animal;
        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
    }
}