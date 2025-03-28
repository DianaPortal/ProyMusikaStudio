package com.musikaStudio.repository;

import com.musikaStudio.entity.MarcaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMarcaRepository extends JpaRepository<MarcaEntity, Long> {
}
