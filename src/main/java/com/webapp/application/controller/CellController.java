package com.webapp.application.controller;

import com.webapp.application.model.Cell;
import com.webapp.application.service.CellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cell")
public class CellController
{
    @Autowired
    CellService cellService;

    @GetMapping("/getAll")
    public List<Cell> findAllCells(){
        return cellService.findAllCells();
    }

    @PostMapping("/add")
    public Cell addCell(@RequestBody Cell cell){
        return cellService.saveCell(cell);
    }

    @PutMapping("/changeTemperature")
    public void changeTemperatureById(@RequestBody Map<String,Object> data){
        int id = (int)data.get("cellId");
        int temperature = (int)data.get("temperature");
        cellService.changeTemperatureById(id, temperature);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id) {
        cellService.deleteById(id);
    }
}
