package com.cpe.springboot.message.controller;

import org.springframework.data.repository.CrudRepository;

import com.cpe.springboot.message.model.MessageModel;


public interface MessageRepository extends CrudRepository<MessageModel, Integer>{

    
}
