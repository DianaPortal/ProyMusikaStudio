package com.musikaStudio.repository;


import com.musikaStudio.entity.IntrumentoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IInstrumentoRepository extends JpaRepository<IntrumentoEntity, Long> {

    List<IntrumentoEntity> findByCategoria_IdCategoria(Long idCategoria);

    List<IntrumentoEntity> findByActivoTrue();

    List<IntrumentoEntity> findByMarca_IdMarca(Long idMarca);

    List<IntrumentoEntity> findByMarca_Nombre(String nombreMarca);
}
