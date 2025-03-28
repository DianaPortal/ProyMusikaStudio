package com.musikaStudio.service;


import com.musikaStudio.entity.RolEntity;
import com.musikaStudio.repository.IRolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService {

    @Autowired
    private IRolRepository rolRepository;

    public List<RolEntity> listarRol(){
        return rolRepository.findAll();
    }

    public Optional<RolEntity> obtenerRol(Long id){
        return rolRepository.findById(id);
    }

    public void GuardarRol(RolEntity rol){
        rolRepository.save(rol);
    }

    public void EliminarRol(Long id){
        rolRepository.deleteById(id);
    }
}
