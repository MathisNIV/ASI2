package com.cpe.springboot.user.services;

import com.cpe.springboot.user.controller.UserService;
import com.cpe.springboot.user.model.UserDTO;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

@Service
public class UserReceiver {

    private final UserService userService;
    private static final Logger log = org.apache.logging.log4j.LogManager.getLogger(UserReceiver.class);

    @Autowired
    public UserReceiver(UserService userService) {
        this.userService = userService;
    }

    @JmsListener(destination = "${spring-messaging.queue.update-user}")
    public void receiveUserUpdate(UserDTO user) {
        userService.updateUserSync(user);
    }

    @JmsListener(destination = "${spring-messaging.queue.add-user}")
    public void receiveUserAdd(UserDTO user) {
        userService.addUserSync(user);
    }
}
