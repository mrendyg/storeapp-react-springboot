package com.agarcia.storeapp_springboot.service;

import com.agarcia.storeapp_springboot.persistence.entity.ClientEntity;
import com.agarcia.storeapp_springboot.persistence.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<ClientEntity> getsListClient(){
        List<ClientEntity> clients = clientRepository.findAll();
        //We sort the list by id
        clients.sort(Comparator.comparing(ClientEntity::getId));
        return clients;
    }

    public ClientEntity getsIdClient(long id){
        return clientRepository.findById(id).orElse(null);
    }

    public ClientEntity createsClient(ClientEntity client){
        return clientRepository.save(client);
    }

    public ClientEntity updatesClient(long id, ClientEntity client){
        ClientEntity updatedClient = clientRepository.findById(id).get();
        updatedClient.setName(client.getName());
        updatedClient.setLastName(client.getLastName());
        updatedClient.setDni(client.getDni());
        return clientRepository.save(updatedClient);
    }

    public void deletesClient(long id){
        ClientEntity deletedClient = clientRepository.findById(id).get();
        clientRepository.delete(deletedClient);
    }

}
