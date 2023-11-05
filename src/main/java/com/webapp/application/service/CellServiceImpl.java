package com.webapp.application.service;

import com.webapp.application.model.Cell;
import com.webapp.application.repository.CellRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CellServiceImpl implements CellService{
    @Autowired
    private CellRepository cellRepository;

    @Override
    public Cell saveCell(Cell cell) {
        return cellRepository.save(cell);
    }

    @Override
    public List<Cell> findAllCells() {
        return cellRepository.findAll();
    }

    @Override
    public void changeTemperatureById(int id, int temperature) {
        Cell cell = cellRepository.getReferenceById(id);
        cell.setAverageTemperature(temperature);
    }

    @Override
    public Optional<Cell> getCellById(Integer id) {
        return cellRepository.findById(id);
    }

    @Override
    public void deleteById(int id) throws Exception {
        cellRepository.findById(id).map(cell -> {
            cellRepository.delete(cell);
            return cell;
        }).orElseThrow(() -> new Exception("No cell with this id"));
    }

}
