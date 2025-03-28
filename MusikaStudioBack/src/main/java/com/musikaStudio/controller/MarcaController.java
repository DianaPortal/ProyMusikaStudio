package com.musikaStudio.controller;


import com.musikaStudio.entity.MarcaEntity;
import com.musikaStudio.service.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/marca")
public class MarcaController {

    @Autowired
    private MarcaService marcaService;

    @GetMapping("listar")
    public List<MarcaEntity> getAll(){
        return marcaService.listarMarca();
    }

    @GetMapping("/{idMarca}")
    public Optional<MarcaEntity> getById(@PathVariable("idMarca") Long marcaId){
        return marcaService.ObtenerMarca(marcaId);
    }

    @PostMapping
    public MarcaEntity GuardarMarca(@RequestBody MarcaEntity marca){
        marcaService.GuardarMarca(marca);
        return marca;
    }

    @DeleteMapping("/{idMarca}")
    public void Eliminar(@PathVariable("idMarca") Long marcId){
        marcaService.EliminarMarca(marcId);
    }
}
