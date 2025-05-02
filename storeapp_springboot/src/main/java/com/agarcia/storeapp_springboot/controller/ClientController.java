package com.agarcia.storeapp_springboot.controller;

import com.agarcia.storeapp_springboot.persistence.entity.ClientEntity;
import com.agarcia.storeapp_springboot.persistence.repository.ClientRepository;
import com.agarcia.storeapp_springboot.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    //Get list client
    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<ClientEntity> getListClient(){
        return clientService.getsListClient();
    }

    //Get list Client by id
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ClientEntity getIdClient(@PathVariable long id) {
        return clientService.getsIdClient(id);
    }

    //create new Client
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ClientEntity createClient(@RequestBody ClientEntity client){
        return clientService.createsClient(client);
    }

    //update client
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ClientEntity updateClient (@PathVariable long id, @RequestBody ClientEntity client){
        return clientService.updatesClient(id, client);
    }

    //delete client by id
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClient(@PathVariable long id){
        clientService.deletesClient(id);
    }

}
