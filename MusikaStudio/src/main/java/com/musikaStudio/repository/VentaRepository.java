package com.musikaStudio.repository;

import com.musikaStudio.entity.VentaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface VentaRepository extends JpaRepository<VentaEntity, Long> {
	Optional<VentaEntity> findByUsuarioIdUsuarioAndConfirmadaFalse(Long idUsuario);
	 List<VentaEntity> findByConfirmadaTrueAndFechaVentaBetween(Date fechaInicio, Date fechaFin);

}

