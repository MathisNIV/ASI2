package com.cpe.springboot.message.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.cpe.message.model.MessageDTO;
import com.cpe.springboot.common.tools.DTOMapper;
import com.cpe.springboot.message.model.MessageModel;


@CrossOrigin
@RestController
public class MessageRestController {
    
    private final MessageService messageService;

    public MessageRestController(MessageService messageService) {
        this.messageService = messageService;
    }

    @RequestMapping(method=RequestMethod.GET, value="/messages")
    private List<MessageDTO> getAllMessages() {
        List<MessageDTO> mModelList = new ArrayList<MessageDTO>();
        for(MessageModel mM: messageService.getAllMessages()){
            mModelList.add(DTOMapper.fromMessageModelToMessageDTO(mM));
        }
        return mModelList;
    }

    @RequestMapping(method=RequestMethod.POST, value="/message")
    public String addMessage(@RequestBody MessageDTO message) {
        return messageService.addMessageAssync(message);
    }
}
