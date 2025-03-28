package com.musikaStudio.controller;

import com.musikaStudio.entity.DetVentaEntity;
import com.musikaStudio.service.DetVentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/detalleVenta")
public class DetalleVentaController {

    @Autowired
    private DetVentaService _detVentaService;

    @GetMapping("/listar")
    public List<DetVentaEntity> listar(){
        return _detVentaService.listSaleDetails();
    }

}
