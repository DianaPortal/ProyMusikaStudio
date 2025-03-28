package com.musikaStudio.util;


import com.musikaStudio.entity.RolEntity;
import com.musikaStudio.entity.TDocumentoEntity;
import com.musikaStudio.entity.UsuarioEntity;

public class UsuarioDetalleDTO {

    private UsuarioEntity usuario;
    private RolEntity rol;
    private TDocumentoEntity documento;

    public UsuarioDetalleDTO(UsuarioEntity usuario, RolEntity rol, TDocumentoEntity documento) {
        this.usuario = usuario;
        this.rol = rol;
        this.documento = documento;
    }

    public UsuarioEntity getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioEntity usuario) {
        this.usuario = usuario;
    }

    public RolEntity getRol() {
        return rol;
    }

    public void setRol(RolEntity rol) {
        this.rol = rol;
    }

    public TDocumentoEntity getDocumento() {
        return documento;
    }

    public void setDocumento(TDocumentoEntity documento) {
        this.documento = documento;
    }
}
