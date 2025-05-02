package com.agarcia.storeapp_springboot.persistence.repository;

import com.agarcia.storeapp_springboot.persistence.entity.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<BrandEntity, Long> {
}
