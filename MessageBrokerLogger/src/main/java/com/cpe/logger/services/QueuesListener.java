package com.cpe.logger.services;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import com.cpe.message.model.MessageDTO;
import com.cpe.user.model.UserDTO;

@Service
public class QueuesListener {

    private static final Logger log = org.apache.logging.log4j.LogManager.getLogger(QueuesListener.class);

    @Autowired
    public QueuesListener() {
    }

    @JmsListener(destination = "${spring-messaging.queue.update-user.qmirror}", containerFactory = "jmsListenerContainerFactory")
    public void receiveUserUpdate(UserDTO user) {
        log.info(user);
    }

    @JmsListener(destination = "${spring-messaging.queue.add-user.qmirror}", containerFactory = "jmsListenerContainerFactory")
    public void receiveUserAdd(UserDTO user) {
        System.out.println(user);
        log.info(user);
    }

    @JmsListener(destination = "${spring-messaging.queue.add-message.qmirror}", containerFactory = "jmsListenerContainerFactory")
    public void receiveMessageAdd(String message) {
        log.info(message);
    }
}
