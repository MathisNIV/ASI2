package com.cpe.logger.services;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import com.cpe.message.model.MessageDTO;
import com.cpe.user.model.UserDTO;

@Service
public class TopicsListener {

    private static final Logger log = org.apache.logging.log4j.LogManager.getLogger(TopicsListener.class);

    @Autowired
    public TopicsListener() {
    }

    @JmsListener(destination = "${spring-messaging.queue.update-user.qmirror}")
    public void receiveUserUpdate(UserDTO user) {
        log.info("UpdateUserQueue: " + user);
    }

    @JmsListener(destination = "${spring-messaging.queue.add-user.qmirror}")
    public void receiveUserAdd(UserDTO user) {
        log.info("AddUserQueue: " + user);
    }

    @JmsListener(destination = "${spring-messaging.queue.add-message.qmirror}")
    public void receiveMessageAdd(MessageDTO message) {
        log.info("AddMsgQueue: " + message);
    }
}
