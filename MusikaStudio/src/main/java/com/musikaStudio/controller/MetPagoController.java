package com.musikaStudio.controller;


import com.musikaStudio.entity.MetPagoEntity;
import com.musikaStudio.service.MetPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/metodoDePago")
public class MetPagoController {

    @Autowired
    private MetPagoService metPagoService;

    @GetMapping("listar")
    public List<MetPagoEntity> getAll(){
        return metPagoService.listaMetPago();
    }

    @GetMapping("/{idMetPago}")
    public Optional<MetPagoEntity> getById(@PathVariable("idMetPago") Long pagoId){
        return metPagoService.obtenerMetPago(pagoId);
    }

    @PostMapping
    public MetPagoEntity GuardarActualizar(@RequestBody MetPagoEntity metodopago){
        metPagoService.GuardarMetPago(metodopago);
        return metodopago;
    }

    @DeleteMapping("/{idMetPago}")
    public void Eliminar(@PathVariable("idMetPago") Long metPagoId){
        metPagoService.EliminarMetPago(metPagoId);
    }
}
