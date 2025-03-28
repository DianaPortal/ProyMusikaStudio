package com.musikaStudio.repository;

import com.musikaStudio.entity.MetPagoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetPagoRepository extends JpaRepository<MetPagoEntity, Long> {
}