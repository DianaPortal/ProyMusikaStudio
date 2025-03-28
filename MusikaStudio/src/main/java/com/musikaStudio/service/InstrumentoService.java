package com.musikaStudio.service;

import com.musikaStudio.entity.IntrumentoEntity;
import com.musikaStudio.repository.IInstrumentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstrumentoService {

    @Autowired
    private IInstrumentoRepository instrumentoRepository;

    @Autowired
    private  CategoriaService categoriaService;

    @Autowired
    private MarcaService marcaService;


    public List<IntrumentoEntity> listarInstrumentos(){
        return instrumentoRepository.findAll();
    }

    public Optional<IntrumentoEntity> obtenerInstrumento(Long id){
        return instrumentoRepository.findById(id);
    }

    public IntrumentoEntity guardarInstrumento(IntrumentoEntity instrumento){
        instrumentoRepository.save(instrumento);
        return instrumento;
    }

    public void eliminarInstrumento(Long id){
        instrumentoRepository.deleteById(id);
    }

    public List<IntrumentoEntity> listarPorCategoria(Long idCategoria){
        return instrumentoRepository.findByCategoria_IdCategoria(idCategoria);
    }

    public List<IntrumentoEntity> listarActivos(){
        return instrumentoRepository.findByActivoTrue();
    }

    public List<IntrumentoEntity> listarPorMarca(Long idMarca){
        return instrumentoRepository.findByMarca_IdMarca(idMarca);
    }
}
