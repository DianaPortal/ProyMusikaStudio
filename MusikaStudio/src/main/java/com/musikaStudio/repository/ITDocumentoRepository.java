package com.musikaStudio.repository;

import com.musikaStudio.entity.TDocumentoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITDocumentoRepository extends JpaRepository<TDocumentoEntity,Long> {
}
