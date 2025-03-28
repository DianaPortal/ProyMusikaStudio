package com.musikaStudio.service;

import com.musikaStudio.entity.CategoriaEntity;
import com.musikaStudio.repository.ICategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;

    public List<CategoriaEntity> listarCategoria(){
        return categoriaRepository.findAll();
    }

    public Optional<CategoriaEntity> obtenerCategoria(Long id){
        return categoriaRepository.findById(id);
    }

    public void GuardarCategoria(CategoriaEntity categoria){
         categoriaRepository.save(categoria);
    }

    public void EliminarCategoria(Long id){
        categoriaRepository.deleteById(id);
    }


}
