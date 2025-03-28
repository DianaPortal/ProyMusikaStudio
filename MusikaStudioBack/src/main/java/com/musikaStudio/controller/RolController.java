package com.musikaStudio.controller;


import com.musikaStudio.entity.RolEntity;
import com.musikaStudio.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/Roles")
public class RolController {

    @Autowired
    private RolService rolService;

    @GetMapping
    public List<RolEntity>getAll(){
        return rolService.listarRol();
    }

    @GetMapping("/{idRol}")
    public Optional<RolEntity> getById(@PathVariable("idRol") Long rolsId){
        return rolService.obtenerRol(rolsId);
    }

    @PostMapping
    public RolEntity GuardarActualizar(@RequestBody RolEntity roles){
        rolService.GuardarRol(roles);
        return roles;
    }

    @DeleteMapping("/{idRol}")
    public void Eliminar(@PathVariable("idRol") Long rolesId){
        rolService.EliminarRol(rolesId);
    }
}
