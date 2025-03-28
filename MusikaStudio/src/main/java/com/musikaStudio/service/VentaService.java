package com.musikaStudio.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.musikaStudio.util.DetalleVentaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musikaStudio.entity.DetVentaEntity;
import com.musikaStudio.entity.IntrumentoEntity;
import com.musikaStudio.entity.MetPagoEntity;
import com.musikaStudio.entity.UsuarioEntity;
import com.musikaStudio.entity.VentaEntity;
import com.musikaStudio.repository.IInstrumentoRepository;
import com.musikaStudio.repository.IMetPagoRepository;
import com.musikaStudio.repository.IUsuarioRepository;
import com.musikaStudio.repository.VentaRepository;

@Service
public class VentaService {

	@Autowired
	private VentaRepository ventaRepository;

	@Autowired
	private IInstrumentoRepository instrumentoRepository;

	@Autowired
	private IMetPagoRepository metodoPagoRepository;

	@Autowired
	private IUsuarioRepository usuarioRepository;

	// Obtener o crear un carrito para el usuario
	public VentaEntity obtenerCarrito(Long usuarioId) {
		return ventaRepository.findByUsuarioIdUsuarioAndConfirmadaFalse(usuarioId).orElseGet(() -> {
			VentaEntity nuevaVenta = new VentaEntity();
			nuevaVenta.setConfirmada(false);
			nuevaVenta.setPrecioTotal(0.0);
			nuevaVenta.setFechaVenta(new Date());
			Optional<UsuarioEntity> usuarioOpt = usuarioRepository.findById(usuarioId);
			if (usuarioOpt.isPresent()) {
				nuevaVenta.setUsuario(usuarioOpt.get());
			} else {
				throw new IllegalStateException("Usuario no encontrado con ID: " + usuarioId);
			}

			return ventaRepository.save(nuevaVenta);
		});
	}

	// Agregamos un instr. --->l carrito
	public VentaEntity agregarAlCarrito(Long usuarioId, DetalleVentaDTO detalleDTO) {
		VentaEntity carrito = obtenerCarrito(usuarioId);
		if (carrito.getDetallesVenta() == null) {
			carrito.setDetallesVenta(new ArrayList<>());
		}
		// Buscar-verificar si el instrumento ya esta ---> carrito
		Optional<DetVentaEntity> detalleExistente = carrito.getDetallesVenta().stream()
				.filter(d -> d.getInstrumento().getIdInstrumento().equals(detalleDTO.getInstrumentoId())).findFirst();

		if (detalleExistente.isPresent()) {
			// Actualizar la cantidad y subtotal
			DetVentaEntity detalle = detalleExistente.get();
			detalle.setCantidad(detalle.getCantidad() + detalleDTO.getCantidad());
			detalle.calcularSubTotal();
		} else {
			// Agregar un nuevo detalle al carrito
			DetVentaEntity nuevoDetalle = new DetVentaEntity();
			nuevoDetalle.setCantidad(detalleDTO.getCantidad());
			IntrumentoEntity instrumento = instrumentoRepository.findById(detalleDTO.getInstrumentoId()).orElseThrow();
			nuevoDetalle.setInstrumento(instrumento);
			nuevoDetalle.setVenta(carrito);
			nuevoDetalle.calcularSubTotal();
			carrito.getDetallesVenta().add(nuevoDetalle);
		}

		// Recalcular el total
		carrito.calcularTotal();
		return ventaRepository.save(carrito);
	}

	// Eliminar un istrumento --> carrito
	public VentaEntity eliminarDelCarrito(Long usuarioId, Long instrumentoId) {
		VentaEntity carrito = obtenerCarrito(usuarioId);

		carrito.getDetallesVenta()
				.removeIf(detalle -> detalle.getInstrumento().getIdInstrumento().equals(instrumentoId));

		carrito.calcularTotal();
		return ventaRepository.save(carrito);
	}

	// Confirmar --> venta
	public VentaEntity confirmarVenta(Long usuarioId, Long id_metodo_pago) {

		VentaEntity carrito = obtenerCarrito(usuarioId);

		if (carrito.getDetallesVenta().isEmpty()) {
			throw new IllegalStateException("El carrito está vacío");
		}

		// Obtener --> método de pago
		MetPagoEntity metodoPago = metodoPagoRepository.findById(id_metodo_pago).orElseThrow(
				() -> new IllegalArgumentException("Método de pago no encontrado con ID: " + id_metodo_pago));

		// Asociar el método de pago a la venta
		carrito.setMetodoPago(metodoPago);
		carrito.setConfirmada(true);
		return ventaRepository.save(carrito);
	}

	// Obtener resumen ---> carrito
	public VentaEntity obtenerResumenCarrito(Long usuarioId) {
		return obtenerCarrito(usuarioId);
	}
	
	
	// Cantidad de dinero de ingreso
	public Double calcularIngresos(Date fechaInicio, Date fechaFin) {	  
	    List<VentaEntity> ventasConfirmadas = ventaRepository.findByConfirmadaTrueAndFechaVentaBetween(fechaInicio, fechaFin);
    
	    return ventasConfirmadas.stream()
	            .mapToDouble(VentaEntity::getPrecioTotal)
	            .sum();
	}


    // Cantidad de ventas confirmadas
	public Long contarVentasConfirmadas(Date fechaInicio, Date fechaFin) {	    
	    return ventaRepository.findByConfirmadaTrueAndFechaVentaBetween(fechaInicio, fechaFin).stream()
	            .count();
	}


    // Total de instrumentos vendidos
	public Long contarProductosVendidos(Date fechaInicio, Date fechaFin) {	    
	    List<VentaEntity> ventasConfirmadas = ventaRepository.findByConfirmadaTrueAndFechaVentaBetween(fechaInicio, fechaFin);	 
	    return ventasConfirmadas.stream()
	            .flatMap(venta -> venta.getDetallesVenta().stream()) 
	            .mapToLong(DetVentaEntity::getCantidad) 
	            .sum();
	}

}
