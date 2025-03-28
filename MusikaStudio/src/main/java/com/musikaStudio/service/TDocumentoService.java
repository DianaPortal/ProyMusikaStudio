package com.musikaStudio.service;


import com.musikaStudio.entity.TDocumentoEntity;
import com.musikaStudio.repository.ITDocumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TDocumentoService {

    @Autowired
    private ITDocumentoRepository itDocumentoRepository;

    public List<TDocumentoEntity> listaDocumento(){
        return itDocumentoRepository.findAll();
    }

    public Optional<TDocumentoEntity> obtenerDocumento(Long id){
        return itDocumentoRepository.findById(id);
    }

    public void GuardarDocumento(TDocumentoEntity documento){
        itDocumentoRepository.save(documento);
    }

    public void EliminarDocumento(Long id){
        itDocumentoRepository.deleteById(id);
    }
}
