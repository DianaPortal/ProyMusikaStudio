package com.musikaStudio.service;


import com.musikaStudio.entity.UsuarioEntity;
import com.musikaStudio.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private IUsuarioRepository usuarioRepository;


    public List<UsuarioEntity> listarUsuario(){
       return usuarioRepository.findAll();
    }

    public Optional<UsuarioEntity> obtenerUsuario(Long id){
        return usuarioRepository.findById(id);
    }

    public UsuarioEntity guardarUsuario(UsuarioEntity usuario){
        usuarioRepository.save(usuario);
        return usuario;
    }

    public void eliminarUsuario(Long id){
        usuarioRepository.deleteById(id);
    }

}
