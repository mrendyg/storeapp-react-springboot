package com.agarcia.storeapp_springboot.service;

import com.agarcia.storeapp_springboot.persistence.entity.ProductEntity;
import com.agarcia.storeapp_springboot.persistence.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductEntity> getsListProduct(){
        List<ProductEntity> products = productRepository.findAll();
        //We sort the list by id
        products.sort(Comparator.comparing(ProductEntity :: getId));
        return products;
    }

    public ProductEntity getsIdProduct(long id){
        return productRepository.findById(id).orElse(null);
    }

    public ProductEntity createsProduct(ProductEntity product){
        return productRepository.save(product);
    }

    public ProductEntity updatesProduct(long id, ProductEntity product){
        ProductEntity updatedProduct = productRepository.findById(id).get();
        updatedProduct.setName(product.getName());
        updatedProduct.setPrice(product.getPrice());
        updatedProduct.setStock(product.getStock());
        return productRepository.save(updatedProduct);
    }

    public void deletesProduct(long id){
        ProductEntity deletedProduct = productRepository.findById(id).get();
        productRepository.delete(deletedProduct);
    }

    public List<ProductEntity> getsLowStockProduct(){
        int lowStock = 5;

        List<ProductEntity> listProduct = this.getsListProduct();
        List<ProductEntity> listLowStock = new ArrayList<ProductEntity>();

        for(ProductEntity product: listProduct){
            if(product.getStock() <= lowStock){
                listLowStock.add(product);
            }
        }
        return listLowStock;
    }

    //see the most economical products
    public List<ProductEntity> getsLowPriceProduct(){
        int lowPrice = 1000;

        List<ProductEntity> listProduct = this.getsListProduct();
        List<ProductEntity> lowPriceProduct = new ArrayList<ProductEntity>();

        for(ProductEntity product : listProduct){
            if (product.getPrice()<=lowPrice){
                lowPriceProduct.add(product);
            }
        }
        return lowPriceProduct;
    }

    //search from price indicating downwards
    public List<ProductEntity> getsSearchPriceProduct(int price){
        List<ProductEntity> listProduct = this.getsListProduct();
        List<ProductEntity> listSearch = new ArrayList<ProductEntity>();

        for(ProductEntity product : listProduct){
            if (product.getPrice()<=price){
                listSearch.add(product);
            }
        }

        return listSearch;
    }

    //ver los productos mas caros
    public List<ProductEntity> getsHigherPrices(){
        List<ProductEntity> products = productRepository.findAll();
        //We sort the list by id
        products.sort(Comparator.comparing(ProductEntity::getPrice).reversed());
        return products;
    }

    //Ver los productos mas vendidos


}
