package com.musikaStudio.service;


import com.musikaStudio.entity.MarcaEntity;
import com.musikaStudio.repository.IMarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarcaService {

    @Autowired
    private IMarcaRepository marcaRepository;

    public List<MarcaEntity> listarMarca(){
        return marcaRepository.findAll();
    }

    public Optional<MarcaEntity> ObtenerMarca(Long id){
        return marcaRepository.findById(id);

    }

    public void GuardarMarca(MarcaEntity marca){
        marcaRepository.save(marca);
    }

    public void EliminarMarca(Long id){
        marcaRepository.deleteById(id);
    }
}
