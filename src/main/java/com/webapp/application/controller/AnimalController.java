package com.webapp.application.controller;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Cell;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.CellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/animal")
public class AnimalController {
    @Autowired
    private AnimalService animalService;
    @Autowired
    private CellService cellService;
    //@Autowired
    //private CellRepository cellRepository;

    @PostMapping("/add/{cellId}")
    public String add(@PathVariable int cellId, @RequestBody Animal animal) throws Exception {
        Cell cell = cellService.getCellById(cellId).map(celll -> {
            animal.setCell(celll);
            animalService.saveAnimal(animal);
            return celll;
        }).orElse(null);
        if (cell == null){
            cell = new Cell();
            cell.setId(cellId);
            cellService.saveCell(cell);
            animal.setCell(cell);
            animalService.saveAnimal(animal);
        }
        return "New animal added";
    }

    @GetMapping("/getByName")
    public List<Animal> getAnimalByName(String name){
        return animalService.getAnimalByName(name);
    }

    @GetMapping("/getAll")
    public List<Animal> getAllAnimal() {
        return animalService.getAllAnimals();
    }

    @DeleteMapping("/deleteById")
    public void deleteAnimalById (@RequestBody int id){
        animalService.deleteAnimalById(id);
    }

    /*@PutMapping("/updateById")
    public Animal updateAnimal(Animal animal){
        return animalService.changeAnimal(animal);
    }*/

    @PutMapping("/moveAnimal")
    public void moveById(Map<String, Object> requestBody){
        int id = (int)requestBody.get("id");
        int cell = (int)requestBody.get("cell");
        animalService.moveById(id,cell);
    }
}
