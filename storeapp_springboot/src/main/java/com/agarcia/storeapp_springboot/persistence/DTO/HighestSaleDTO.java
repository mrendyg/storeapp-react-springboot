package com.agarcia.storeapp_springboot.persistence.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class HighestSaleDTO {

    private Long idSale;
    private int totalSale;
    private int quantityProducts;
    private String nameClient;
    private String lastNameClient;

}
