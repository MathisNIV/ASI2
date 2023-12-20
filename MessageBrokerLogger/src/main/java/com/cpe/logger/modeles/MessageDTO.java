package com.cpe.logger.modeles;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class MessageDTO implements Serializable{
    private Integer id;
    private String text;
    private Integer socketId;
    private Integer userId;

    public MessageDTO() {
    }

    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public Integer getUserId() {
        return userId;
    }
    
    public void setUserId(Integer userId) {
        this.userId = userId;
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
        return "{id:" + id + ", text:" + text + ", socketId:" + socketId + "}";
    }
}
