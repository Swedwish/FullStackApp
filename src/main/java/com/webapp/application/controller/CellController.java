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

    @GetMapping("/findAll")
    public List<Cell> findAll(){
        return cellService.findAllCells();
    }

    @PostMapping("/add")
    public Cell add(@RequestBody Cell cell){
        return cellService.saveCell(cell);
    }

    @PutMapping("/changeTemperature")
    public Cell changeTemperatureById(@RequestBody Map<String,Object> data){
        Integer id = Integer.parseInt((String) data.get("id"));
        Integer temperature = Integer.parseInt((String) data.get("averageTemperature"));
        return cellService.changeTemperatureById(id, temperature);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id) {
        cellService.deleteById(id);
    }
}
