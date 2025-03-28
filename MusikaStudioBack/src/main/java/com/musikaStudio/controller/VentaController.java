package com.musikaStudio.controller;

import com.musikaStudio.util.DetalleVentaDTO;
import com.musikaStudio.entity.VentaEntity;
import com.musikaStudio.service.VentaService;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/ventas")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    // Agregar un producto --> carrito
    @PostMapping("/{usuarioId}/carrito")
    @ResponseStatus(HttpStatus.CREATED)
    public VentaEntity agregarAlCarrito(@PathVariable Long usuarioId, @RequestBody DetalleVentaDTO detalleDTO) {
        return ventaService.agregarAlCarrito(usuarioId, detalleDTO);
    }

    // Eliminar producto --> carrito
    @DeleteMapping("/{usuarioId}/carrito/{instrumentoId}")
    public VentaEntity eliminarDelCarrito(@PathVariable Long usuarioId, @PathVariable Long instrumentoId) {
        return ventaService.eliminarDelCarrito(usuarioId, instrumentoId);
    }

    // Confirmar la compra 
    @PutMapping("/{usuarioId}/confirmar/{metodoPagoId}")
    public VentaEntity confirmarVenta(@PathVariable Long usuarioId, @PathVariable Long metodoPagoId) {
        return ventaService.confirmarVenta(usuarioId, metodoPagoId);
    }


    // Obtener resumen --> carrito
    @GetMapping("/{usuarioId}/carrito")
    public VentaEntity obtenerResumenCarrito(@PathVariable Long usuarioId) {
        return ventaService.obtenerResumenCarrito(usuarioId);
    }
    
    // Cantidad de dinero de ingreso
    @GetMapping("/reportes/ingresos")
    public Map<String, Double> obtenerIngresos(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin) {
        Double ingresos = ventaService.calcularIngresos(fechaInicio, fechaFin);
        return Map.of("ingresos", ingresos);
    }

    //  Cantidad de ventas confirmadas
    @GetMapping("/reportes/ventas-confirmadas")
    public Map<String, Long> obtenerVentasConfirmadas(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin) {
        Long totalVentas = ventaService.contarVentasConfirmadas(fechaInicio, fechaFin);
        return Map.of("ventasConfirmadas", totalVentas);
    }

    // Total de productos vendidos
    @GetMapping("/reportes/productos-vendidos")
    public Map<String, Long> obtenerProductosVendidos(
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaInicio,
            @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date fechaFin) {
        Long totalProductos = ventaService.contarProductosVendidos(fechaInicio, fechaFin);
        return Map.of("productosVendidos", totalProductos);
    }


}
