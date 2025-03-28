package com.musikaStudio.controller;


import com.musikaStudio.entity.CategoriaEntity;
import com.musikaStudio.entity.IntrumentoEntity;
import com.musikaStudio.entity.MarcaEntity;
import com.musikaStudio.service.CategoriaService;
import com.musikaStudio.service.InstrumentoService;
import com.musikaStudio.service.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/instrumento")
public class InstrumentoController {

    @Autowired
    private InstrumentoService instrumentoService;

    @Autowired
    private CategoriaService categoriaService;

    @Autowired
    private MarcaService marcaService;

    @GetMapping("listar")
    public List<IntrumentoEntity> getAll(){
        return instrumentoService.listarInstrumentos();
    }

    @GetMapping("buscar/{idInstrumento}")
    public ResponseEntity<IntrumentoEntity> getById(@PathVariable("idInstrumento") Long instrumentoId){
       Optional<IntrumentoEntity> instrumentoOpc = instrumentoService.obtenerInstrumento(instrumentoId);
        return instrumentoOpc.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("guardar")
    public ResponseEntity<String> guardarInstrumento(@RequestBody IntrumentoEntity instrumento) {

        if (instrumento.getCategoria() == null || instrumento.getCategoria().getIdCategoria() == null) {
            return ResponseEntity.badRequest().body("La categoría es obligatoria.");
        }


        Long categoriaId = instrumento.getCategoria().getIdCategoria();
        Optional<CategoriaEntity> categoriaOpcional = categoriaService.obtenerCategoria(categoriaId);

        if (!categoriaOpcional.isPresent()) {
            return ResponseEntity.badRequest().body("La categoría especificada no existe.");
        }


        CategoriaEntity categoria = categoriaOpcional.get();
        instrumento.setCategoria(categoria);


        if (instrumento.getMarca() == null || instrumento.getMarca().getIdMarca() == null) {
            return ResponseEntity.badRequest().body("La marca es obligatoria.");
        }


        Long marcaId = instrumento.getMarca().getIdMarca();
        Optional<MarcaEntity> marcaOpcional = marcaService.ObtenerMarca(marcaId);

        if (!marcaOpcional.isPresent()) {
            return ResponseEntity.badRequest().body("La marca especificada no existe.");
        }


        MarcaEntity marca = marcaOpcional.get();
        instrumento.setMarca(marca);


        IntrumentoEntity instrumentoGuardado = instrumentoService.guardarInstrumento(instrumento);

        return ResponseEntity.ok("Instrumento guardado exitosamente con ID: " + instrumentoGuardado.getIdInstrumento());
    }

    @DeleteMapping("eliminar/{idInstrumento}")
    public ResponseEntity<String> eliminarInstrumento(@PathVariable("idInstrumento") Long instruId) {
        Optional<IntrumentoEntity> instrumentoOpc = instrumentoService.obtenerInstrumento(instruId);

        if (!instrumentoOpc.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("El instrumento con ID " + instruId + " no existe.");
        }

        instrumentoService.eliminarInstrumento(instruId);
        return ResponseEntity.ok("Instrumento con ID " + instruId + " eliminado exitosamente.");
    }

}
