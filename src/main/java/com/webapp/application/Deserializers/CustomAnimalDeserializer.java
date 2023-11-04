package com.webapp.application.Deserializers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.webapp.application.model.Animal;

import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class CustomAnimalDeserializer extends JsonDeserializer<Animal> {

    @Override
    public Animal deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);

        // Extract values from the JSON node
        String name = node.get("name").asText();
        String species = node.get("species").asText();
        String dateOfBirthStr = node.get("date_of_birth").asText();
        String gender = node.get("gender").asText();
        int cell_id = node.get("cell_id").asInt();
        // Handle date deserialization with the desired format
        Date dateOfBirth = parseDateOfBirth(dateOfBirthStr);

        // Create and return the Animal object
        Animal animal = new Animal();
        animal.setName(name);
        animal.setSpecies(species);
        animal.setDateOfBirth(dateOfBirth);
        animal.setGender(gender);

        return animal;
    }

    private Date parseDateOfBirth(String dateStr) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd"); // Adjust the date format as needed
            java.util.Date parsedDate = dateFormat.parse(dateStr);
            return new Date(parsedDate.getTime());
        } catch (Exception e) {
            // Handle the date parsing error
            e.printStackTrace();
            return null;
        }
    }
}
