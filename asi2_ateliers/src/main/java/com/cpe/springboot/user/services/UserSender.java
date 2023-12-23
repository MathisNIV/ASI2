package com.cpe.springboot.user.services;

import com.cpe.user.model.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class UserSender {

    private final JmsTemplate jmsTemplate;

    private static final String UPDATE_USER_QUEUE_KEY = "spring-messaging.queue.update-user";

    private static final String ADD_USER_QUEUE_KEY = "spring-messaging.queue.add-user";

    private String updateUserQueue;

    private String addUserQueue;


    private final Environment environment;

    @Autowired
    public UserSender(JmsTemplate jmsTemplate, Environment environment) {
        this.jmsTemplate = jmsTemplate;
        this.environment = environment;
    }

    @PostConstruct
    public void init() {
        updateUserQueue = environment.getProperty(UPDATE_USER_QUEUE_KEY);
        addUserQueue = environment.getProperty(ADD_USER_QUEUE_KEY);
    }

    public void setUpdateUserQueue(String updateUserQueue) {
        this.updateUserQueue = updateUserQueue;
    }

    public void setAddUserQueue(String addUserQueue) {
        this.addUserQueue = addUserQueue;
    }

    public void updateUser(UserDTO user) {
        jmsTemplate.convertAndSend(updateUserQueue, user);
    }

    public void addUser(UserDTO user) {
        jmsTemplate.convertAndSend(addUserQueue, user);
    }
}
