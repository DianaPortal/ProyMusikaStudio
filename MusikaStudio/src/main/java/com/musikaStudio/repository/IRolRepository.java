package com.musikaStudio.repository;

import com.musikaStudio.entity.RolEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<RolEntity, Long> {
}
