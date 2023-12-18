package com.cpe.springboot.message.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class MessageModel {
    
    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String text;
    Integer socketId;

    public MessageModel() {
    }

    public MessageModel(Integer id, String text, Integer socketId) {
        this.id = id;
        this.text = text;
        this.socketId = socketId;
    }

    public MessageModel(MessageDTO message) {
        this.id = message.getId();
        this.text = message.getText();
        this.socketId = message.getSocketId();
    }

    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getText() {
        return text;
    }
    
    public void setText(String text) {
        this.text = text;
    }
    
    public Integer getSocketId() {
        return socketId;
    }
    
    public void setSocketId(Integer socketId) {
        this.socketId = socketId;
    }

    public String toString() {
        return "{id=" + id + ", text=" + text + ", socketId=" + socketId + "}";
    }
}
