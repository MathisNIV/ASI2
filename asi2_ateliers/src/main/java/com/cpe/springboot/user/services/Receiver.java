package com.cpe.springboot.user.services;

import com.cpe.springboot.user.controller.UserService;
import com.cpe.springboot.user.model.UserDTO;
import javax.jms.JMSException;
import javax.jms.TextMessage;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.message.ObjectMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

@Service
public class Receiver {

    private final UserService userService;
    private static final Logger log = org.apache.logging.log4j.LogManager.getLogger(Receiver.class);

    @Autowired
    public Receiver(UserService userService) {
        this.userService = userService;
    }

    @JmsListener(destination = "${spring-messaging.queue.name}")
    public void receiveMessage(UserDTO user) {
        userService.updateUserSync(user);
    }
}
