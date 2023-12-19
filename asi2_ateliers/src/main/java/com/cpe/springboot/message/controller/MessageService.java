package com.cpe.springboot.message.controller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cpe.springboot.message.model.MessageDTO;
import com.cpe.springboot.message.model.MessageModel;
import com.cpe.springboot.message.services.MessageSender;

import java.util.ArrayList;


@Service
public class MessageService {
    
    private final MessageSender messageSender;
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository, MessageSender messageSender) {
        this.messageSender = messageSender;
        this.messageRepository = messageRepository;
    }

    public List<MessageModel> getAllMessages() {
        List<MessageModel> messageList = new ArrayList<>();
        messageRepository.findAll().forEach(messageList::add);
        return messageList;
    }

    public String addMessageAssync(MessageDTO message) {
        messageSender.addMessage(message);
        return "Request pending";
    }

    public MessageDTO addMessageSync(MessageDTO message) {
        MessageModel mBd = messageRepository.save(new MessageModel(message));
        return new MessageDTO(mBd);
    }
}
