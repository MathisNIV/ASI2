package com.cpe.springboot.message.services;

import com.cpe.message.model.MessageDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class MessageSender {

    private final JmsTemplate jmsTemplate;

    private static final String ADD_MESSAGE_QUEUE_KEY = "spring-messaging.queue.add-message";

    private String addMessageQueue;

    private final Environment environment;

    @Autowired
    public MessageSender(JmsTemplate jmsTemplate, Environment environment) {
        this.jmsTemplate = jmsTemplate;
        this.environment = environment;
    }

    @PostConstruct
    public void init() {
        addMessageQueue = environment.getProperty(ADD_MESSAGE_QUEUE_KEY);
    }

    public void setAddMessageQueue(String addMessageQueue) {
        this.addMessageQueue = addMessageQueue;
    }

    public void addMessage(MessageDTO message) {
        jmsTemplate.convertAndSend(addMessageQueue, message);
    }
}
