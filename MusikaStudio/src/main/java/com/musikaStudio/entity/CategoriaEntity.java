package com.musikaStudio.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "categorias")
public class CategoriaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_categoria")
    private Long idCategoria;
    private String nombre;
    private String descripcion;

    @JsonBackReference
    @OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY)
    private List<IntrumentoEntity> listaInstrumentos;



    public Long getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Long idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public List<IntrumentoEntity> getListaInstrumentos() {
        return listaInstrumentos;
    }

    public void setListaInstrumentos(List<IntrumentoEntity> listaInstrumentos) {
        this.listaInstrumentos = listaInstrumentos;
    }
}
