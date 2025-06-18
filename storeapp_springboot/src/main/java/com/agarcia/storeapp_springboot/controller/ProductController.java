package com.agarcia.storeapp_springboot.controller;

import com.agarcia.storeapp_springboot.persistence.entity.ProductEntity;
import com.agarcia.storeapp_springboot.service.ProductService;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    //view list of products
    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductEntity> getListProduct(){
        return productService.getsListProduct();
    }

    //view products by id
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductEntity getIdProduct(@PathVariable long id){
        return productService.getsIdProduct(id);
    }

    //Create new product
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ProductEntity createProduct(@RequestBody ProductEntity product){
        return productService.createsProduct(product);
    }

    //update product
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ProductEntity updateProduct(@PathVariable long id, @RequestBody ProductEntity product){
        return productService.updatesProduct(id, product);
    }

    //delete product
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable long id){
        productService.deletesProduct(id);
    }

    //GetProduct low stock
    @GetMapping("/lowstock")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductEntity> getLowStockProduct(){
        return productService.getsLowStockProduct();
    }

    // see the most economical products
    @GetMapping("/lowprice")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductEntity> lowPriceProdutos(){
        return productService.getsLowPriceProduct();
    }

    //search from price indicating downwards
    @GetMapping("/price/{price}")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductEntity> searchPrice(@PathVariable int price){
       return productService.getsSearchPriceProduct(price);
    }

    //see the most expensive products
    @GetMapping("/higherprice")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductEntity> higherPriceProduct(){
        return productService.getsHigherPrices();
    }

}
