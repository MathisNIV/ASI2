package com.cpe.springboot.message.services;

import com.cpe.springboot.message.controller.MessageService;
import com.cpe.message.model.MessageDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;


@Service
public class MessageReceiver {

    private final MessageService messageService;

    @Autowired
    public MessageReceiver(MessageService messageService) {
        this.messageService = messageService;
    }
    
    @JmsListener(destination = "${spring-messaging.queue.add-message}")
    public void receiveMessageAdd(MessageDTO message) {
        messageService.addMessageSync(message);
    }
}
