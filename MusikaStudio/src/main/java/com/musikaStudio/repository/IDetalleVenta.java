package com.musikaStudio.repository;

import com.musikaStudio.entity.DetVentaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDetalleVenta extends  JpaRepository<DetVentaEntity, Long> {
}
