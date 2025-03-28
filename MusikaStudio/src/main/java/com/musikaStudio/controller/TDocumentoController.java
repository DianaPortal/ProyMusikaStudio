package com.musikaStudio.controller;


import com.musikaStudio.entity.TDocumentoEntity;
import com.musikaStudio.service.TDocumentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/Documento")
public class TDocumentoController {

    @Autowired
    private TDocumentoService tDocumentoService;

    @GetMapping
    public List<TDocumentoEntity> getAll(){
        return tDocumentoService.listaDocumento();
    }

    @GetMapping("/{idDocumento}")
    public Optional<TDocumentoEntity> getById(@PathVariable("idDocumento") Long documentoId){
        return tDocumentoService.obtenerDocumento(documentoId);

    }

    @PostMapping
    public TDocumentoEntity GuardarActualizar(@RequestBody TDocumentoEntity documento){
        tDocumentoService.GuardarDocumento(documento);
        return documento;
    }

    @DeleteMapping("/{idDocumento}")
    public void Eliminar(@PathVariable("idDocumento") Long documentId){
        tDocumentoService.EliminarDocumento(documentId);
    }

}
