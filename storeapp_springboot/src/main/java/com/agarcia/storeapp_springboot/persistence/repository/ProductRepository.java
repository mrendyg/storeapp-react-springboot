package com.agarcia.storeapp_springboot.persistence.repository;

import com.agarcia.storeapp_springboot.persistence.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}
