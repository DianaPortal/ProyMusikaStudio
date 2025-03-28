package com.musikaStudio.entity;



import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "detalle_ventas")
public class DetVentaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_detalle_venta")
    private Long idDetalleVenta;

    private int cantidad;
    private double subTotal;

    @ManyToOne
    @JoinColumn(name = "id_instrumento")
    private IntrumentoEntity instrumento;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "id_venta")
    private VentaEntity venta;

    @PrePersist
    @PreUpdate
    public void calcularSubTotal() {
        if (instrumento != null) {
            this.subTotal = instrumento.getPrecio() * cantidad;
        }
    }

    // Getters y Setters
    public Long getIdDetalleVenta() {
        return idDetalleVenta;
    }

    public void setIdDetalleVenta(Long idDetalleVenta) {
        this.idDetalleVenta = idDetalleVenta;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(double subTotal) {
        this.subTotal = subTotal;
    }

 // Getters y Setters para la lista de instrumentos
    
    public IntrumentoEntity getInstrumento() {
        return instrumento;
    }

   
    public void setInstrumento(IntrumentoEntity instrumento) {
        this.instrumento = instrumento;
    }

    public VentaEntity getVenta() {
        return venta;
    }

    public void setVenta(VentaEntity venta) {
        this.venta = venta;
    }
    

    
}
