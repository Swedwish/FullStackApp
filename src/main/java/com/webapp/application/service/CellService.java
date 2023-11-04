package com.webapp.application.service;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Cell;

import java.util.List;
import java.util.Optional;

public interface CellService {
    public Cell saveCell(Cell cell);
    public List<Cell> getAllCells();
    public Cell changeCellById(Cell animal);
    public Optional<Cell> getCellById(Integer id);

}
