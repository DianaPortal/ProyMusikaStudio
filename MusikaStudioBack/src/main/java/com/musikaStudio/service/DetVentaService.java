package com.musikaStudio.service;

import com.musikaStudio.entity.DetVentaEntity;
import com.musikaStudio.repository.IDetalleVenta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetVentaService {

    @Autowired
    private IDetalleVenta _detalleVenta;

    public List<DetVentaEntity> listSaleDetails(){
        return _detalleVenta.findAll();
    }

}
