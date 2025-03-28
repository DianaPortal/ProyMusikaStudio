package com.musikaStudio.util;


import com.musikaStudio.entity.CategoriaEntity;
import com.musikaStudio.entity.IntrumentoEntity;
import com.musikaStudio.entity.MarcaEntity;

public class IntrumentoDetalleDTO {

    private IntrumentoEntity instrumento;

    private CategoriaEntity categoria;

    private MarcaEntity marca;

    public IntrumentoDetalleDTO(IntrumentoEntity instrumento, CategoriaEntity categoria, MarcaEntity marca){

        this.instrumento = instrumento;
        this.categoria = categoria;
        this.marca = marca;
    }

    public IntrumentoEntity getInstrumento() {
        return instrumento;
    }

    public void setInstrumento(IntrumentoEntity instrumento) {
        this.instrumento = instrumento;
    }

    public CategoriaEntity getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaEntity categoria) {
        this.categoria = categoria;
    }

    public MarcaEntity getMarca() {
        return marca;
    }

    public void setMarca(MarcaEntity marca) {
        this.marca = marca;
    }
}
