package com.webapp.application.service;

import com.webapp.application.model.Cell;

import java.util.List;
import java.util.Optional;

public interface CellService {
    public Cell saveCell(Cell cell);
    public List<Cell> findAllCells();
    public void changeTemperatureById(int id,int temperature);
    public Optional<Cell> getCellById(Integer id);
    void deleteById(int id);
}
