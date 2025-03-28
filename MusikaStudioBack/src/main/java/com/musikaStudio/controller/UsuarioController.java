package com.musikaStudio.controller;


import com.musikaStudio.config.RespuestaJson;
import com.musikaStudio.entity.RolEntity;
import com.musikaStudio.entity.TDocumentoEntity;
import com.musikaStudio.entity.UsuarioEntity;
import com.musikaStudio.service.RolService;
import com.musikaStudio.service.TDocumentoService;
import com.musikaStudio.service.UsuarioService;
import com.musikaStudio.util.UsuarioDetalleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/v1/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private RolService rolService;

    @Autowired
    private TDocumentoService tDocumentoService;


    @GetMapping("listar")
    public List<UsuarioEntity> getAll(){
        return usuarioService.listarUsuario();
    }

    @GetMapping("buscar/{idUsuario}")
    public ResponseEntity<UsuarioDetalleDTO> getById(@PathVariable("idUsuario") Long usuarioId){
        Optional<UsuarioEntity> usuarioOpc = usuarioService.obtenerUsuario(usuarioId);

        if (usuarioOpc.isPresent()) {

            UsuarioEntity usuario = usuarioOpc.get();
            RolEntity rol = usuario.getRol();
            TDocumentoEntity documento = usuario.getTipoDocumento();

            UsuarioDetalleDTO detalleDTO = new UsuarioDetalleDTO(usuario,rol,documento);
            return ResponseEntity.ok(detalleDTO);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("crear")
    public ResponseEntity<?> guardarUsuario(@RequestBody UsuarioEntity usuario){

        if(usuario.getRol() == null || usuario.getRol().getIdRol() == null){
            return ResponseEntity.badRequest().body("El rol es obligatorio");
        }

        Long rolId = usuario.getRol().getIdRol();
        Optional<RolEntity> rolOpcional = rolService.obtenerRol(rolId);

        if(!rolOpcional.isPresent()){
            return ResponseEntity.badRequest().body("El rol especificado no existe");
        }

        RolEntity roles = rolOpcional.get();
        usuario.setRol(roles);

        if(usuario.getTipoDocumento() == null || usuario.getTipoDocumento().getIdDocumento() == null){
            return ResponseEntity.badRequest().body("El tipo de documento es obligatorio");
        }

        Long documentoId = usuario.getTipoDocumento().getIdDocumento();
        Optional<TDocumentoEntity> documentoOpcional = tDocumentoService.obtenerDocumento(documentoId);

        if (!documentoOpcional.isPresent()) {

            return ResponseEntity.badRequest().body("El tipo de documento no existe");
        }

        TDocumentoEntity documentos = documentoOpcional.get();
        usuario.setTipoDocumento(documentos);

        UsuarioEntity usuarioGuardado = usuarioService.guardarUsuario(usuario);

        return ResponseEntity.ok( new RespuestaJson("Usuario guardado existosamente con ID:" + usuarioGuardado.getIdUsuario()));
    }

    @DeleteMapping("eliminar/{idUsuario}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable("idUsuario") Long clienteId){
       Optional<UsuarioEntity> usuarioOpc = usuarioService.obtenerUsuario(clienteId);

        if (!usuarioOpc.isPresent()) {

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El usuario con ID:" + clienteId+ "no existe");

        }
        usuarioService.eliminarUsuario(clienteId);
        return ResponseEntity.ok("Usuario con ID:" + clienteId+ "eliminado exitosamente");
    }
}
