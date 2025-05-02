package com.agarcia.storeapp_springboot.service;

import com.agarcia.storeapp_springboot.persistence.entity.BrandEntity;
import com.agarcia.storeapp_springboot.persistence.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public List<BrandEntity> getsListBrand(){
        List<BrandEntity> brands = brandRepository.findAll();
        //We sort the list by id
        brands.sort(Comparator.comparing(BrandEntity::getId));
        return brands;
    }

    public BrandEntity getsIdBrand(long id){
        return brandRepository.findById(id).orElse(null);
    }

    public BrandEntity createsBrand(BrandEntity brand){
        return brandRepository.save(brand);
    }

    public BrandEntity updatesBrand(long id, BrandEntity brand){
        BrandEntity updatedBrand = brandRepository.findById(id).get();
        updatedBrand.setName(brand.getName());
        return brandRepository.save(updatedBrand);
    }

    public void deletesBrand(long id){
        BrandEntity deletedBrand = brandRepository.findById(id).get();
        brandRepository.delete(deletedBrand);
    }

}
