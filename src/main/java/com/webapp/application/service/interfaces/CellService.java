package com.webapp.application.service.interfaces;

import com.webapp.application.model.Cell;

import java.util.List;
import java.util.Optional;

public interface CellService {
    Cell saveCell(Cell cell);
    List<Cell> findAllCells();
    Cell changeTemperatureById(int id,int temperature);
    Optional<Cell> getCellById(Integer id);
    void deleteById(int id);
}
