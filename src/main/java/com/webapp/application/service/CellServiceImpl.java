package com.webapp.application.service;

import com.webapp.application.model.Cell;
import com.webapp.application.model.Cell;
import com.webapp.application.repository.CellRepository;
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
    public List<Cell> getAllCells() {
        return cellRepository.findAll();
    }

    @Override
    public Cell changeCellById(Cell cell) {
        Cell change = cellRepository.getReferenceById(cell.getId());
        change.setSizeM3(cell.getSizeM3());
        change.setAverageTemperature(cell.getAverageTemperature());
        return change;
    }

    @Override
    public Optional<Cell> getCellById(Integer id) {
        return cellRepository.findById(id);
    }

}
