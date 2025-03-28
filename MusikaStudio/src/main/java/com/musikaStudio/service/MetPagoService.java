package com.musikaStudio.service;


import com.musikaStudio.entity.MetPagoEntity;
import com.musikaStudio.repository.IMetPagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MetPagoService {

    @Autowired
    private IMetPagoRepository metPagoRepository;

    public List<MetPagoEntity> listaMetPago(){
        return metPagoRepository.findAll();
    }

    public Optional<MetPagoEntity> obtenerMetPago(Long id){
        return metPagoRepository.findById(id);
    }

    public void GuardarMetPago(MetPagoEntity metPago){
        metPagoRepository.save(metPago);
    }

    public void EliminarMetPago(Long id){
        metPagoRepository.deleteById(id);
    }
    public MetPagoEntity guardarMetodoPago(MetPagoEntity metodoPago) {
        return metPagoRepository.save(metodoPago);
    }
}
