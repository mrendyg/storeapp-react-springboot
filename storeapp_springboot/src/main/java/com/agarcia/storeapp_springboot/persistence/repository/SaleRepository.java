package com.agarcia.storeapp_springboot.persistence.repository;

import com.agarcia.storeapp_springboot.persistence.DTO.HighestSaleDTO;
import com.agarcia.storeapp_springboot.persistence.entity.SaleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface SaleRepository extends JpaRepository<SaleEntity, Long> {
    SaleEntity findTopByOrderByTotalDesc();
}
