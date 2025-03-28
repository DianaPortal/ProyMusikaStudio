package com.musikaStudio.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


@Entity
@Table(name = "ventas")
public class VentaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_venta")
    private Long idVenta;

    private Date fechaVenta;
    private double precioTotal;
    private boolean confirmada;


    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<DetVentaEntity> detallesVenta = new ArrayList<>();


    @ManyToOne
    @JoinColumn(name = "id_metodo_pago")
    private MetPagoEntity metodoPago;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private UsuarioEntity usuario;

    // Getters y Setters
    public MetPagoEntity getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(MetPagoEntity metodoPago) {
        this.metodoPago = metodoPago;
    }

    public UsuarioEntity getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioEntity usuario) {
        this.usuario = usuario;
    }

    public Date getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(Date fechaVenta) {
        this.fechaVenta = fechaVenta;
    }

    public boolean isConfirmada() {
        return confirmada;
    }

    public void setConfirmada(boolean confirmada) {
        this.confirmada = confirmada;
    }

    public List<DetVentaEntity> getDetallesVenta() {
        return detallesVenta;
    }

    public void setDetallesVenta(List<DetVentaEntity> detallesVenta) {
        this.detallesVenta = detallesVenta;
    }

    public void calcularTotal() {
        if (detallesVenta != null) {
            this.precioTotal = detallesVenta.stream()
                    .mapToDouble(DetVentaEntity::getSubTotal)
                    .sum();
        } else {
            this.precioTotal = 0;
        }
    }    
    
    public double getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(double precioTotal) {
        this.precioTotal = precioTotal;
    }
    
    
	
}
