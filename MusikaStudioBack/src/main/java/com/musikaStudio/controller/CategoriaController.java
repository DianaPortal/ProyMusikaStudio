package com.musikaStudio.controller;


import com.musikaStudio.entity.CategoriaEntity;
import com.musikaStudio.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path= "api/v1/Categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping("listarCategorias")
    public List<CategoriaEntity> getAll(){
        return categoriaService.listarCategoria();
    }

    @GetMapping("/{idCategoria}")
    public Optional<CategoriaEntity> getById(@PathVariable("idCategoria") Long categorId){
        return categoriaService.obtenerCategoria(categorId);
    }

    @PostMapping
    public CategoriaEntity GuardarActualizar(@RequestBody CategoriaEntity categoria){
        categoriaService.GuardarCategoria(categoria);
        return categoria;
    }

    @DeleteMapping("/{idCategoria}")
    public void Eliminar(@PathVariable("idCategoria") Long categoriaId){
        categoriaService.EliminarCategoria(categoriaId);
    }

}
