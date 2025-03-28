package com.musikaStudio.util;

import com.musikaStudio.entity.CategoriaEntity;
import com.musikaStudio.entity.IntrumentoEntity;
import com.musikaStudio.entity.MarcaEntity;

import java.util.List;

public class InstrumentoDTO {

    private List<IntrumentoEntity> instrumentos;

    public InstrumentoDTO(List<IntrumentoEntity> instrumentos){
        this.instrumentos = instrumentos;

    }

    public List<IntrumentoEntity> getInstrumentos() {
        return instrumentos;
    }

    public void setInstrumentos(List<IntrumentoEntity> instrumentos) {
        this.instrumentos = instrumentos;
    }
}
