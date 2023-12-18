package com.cpe.springboot.message.controller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cpe.springboot.message.model.MessageDTO;
import com.cpe.springboot.message.model.MessageModel;

import java.util.ArrayList;


@Service
public class MessageService {
    
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<MessageModel> getAllMessages() {
        List<MessageModel> messageList = new ArrayList<>();
        messageRepository.findAll().forEach(messageList::add);
        return messageList;
    }

    public MessageDTO addMessage(MessageDTO message) {
        MessageModel mBd = messageRepository.save(new MessageModel(message));
        return new MessageDTO(mBd);
    }
}
