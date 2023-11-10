package com.webapp.application.service.implementations;

import com.webapp.application.model.Cell;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.service.interfaces.CellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CellServiceImpl implements CellService {
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
    public Cell changeTemperatureById(int id, int temperature) {
        // Find the cell by ID
        Cell cell = cellRepository.findById(id).orElse(null);

        if (cell != null) {
            // Update the average temperature
            cell.setAverageTemperature(temperature);

            // Save the updated cell back to the database
            cellRepository.save(cell);
        } else {
            throw new RuntimeException("No cell with ID" + id);
        }
        return cell;
    }

    @Override
    public Optional<Cell> getCellById(Integer id) {
        return cellRepository.findById(id);
    }

    @Override
    public void deleteById(int id){
        cellRepository.findById(id).map(cell -> {
            cellRepository.delete(cell);
            return cell;
        }).orElseThrow(() -> new RuntimeException("No cell with id" + id));
    }

}
