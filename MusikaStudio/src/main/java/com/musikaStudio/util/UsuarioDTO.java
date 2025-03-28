package com.musikaStudio.util;

import com.musikaStudio.entity.RolEntity;
import com.musikaStudio.entity.TDocumentoEntity;
import com.musikaStudio.entity.UsuarioEntity;

import java.util.List;

public class UsuarioDTO {

    private List<UsuarioEntity> usuario;
    private List<RolEntity> rol;
    private List<TDocumentoEntity> documento;

    public UsuarioDTO(List<UsuarioEntity> usuario, List<RolEntity> rol, List<TDocumentoEntity> documento) {
        this.usuario = usuario;
        this.rol = rol;
        this.documento = documento;
    }

    public List<UsuarioEntity> getUsuario() {
        return usuario;
    }

    public void setUsuario(List<UsuarioEntity> usuario) {
        this.usuario = usuario;
    }

    public List<RolEntity> getRol() {
        return rol;
    }

    public void setRol(List<RolEntity> rol) {
        this.rol = rol;
    }

    public List<TDocumentoEntity> getDocumento() {
        return documento;
    }

    public void setDocumento(List<TDocumentoEntity> documento) {
        this.documento = documento;
    }
}
