package com.agarcia.storeapp_springboot.persistence.repository;

import com.agarcia.storeapp_springboot.persistence.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<ClientEntity, Long> {
}
