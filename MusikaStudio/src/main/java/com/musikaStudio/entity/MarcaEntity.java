package com.musikaStudio.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="marcas")
public class MarcaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_marca")
    private Long idMarca;
    private String nombre;

    @JsonBackReference
    @OneToMany(mappedBy = "marca")
    private List<IntrumentoEntity> listaMarcas;



    public Long getIdMarca() {
        return idMarca;
    }

    public void setIdMarca(Long idMarca) {
        this.idMarca = idMarca;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<IntrumentoEntity> getListaMarcas() {
        return listaMarcas;
    }

    public void setListaMarcas(List<IntrumentoEntity> listaMarcas) {
        this.listaMarcas = listaMarcas;
    }
}
