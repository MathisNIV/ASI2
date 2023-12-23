package com.cpe.springboot.common.tools;
import com.cpe.springboot.message.model.MessageModel;
import com.cpe.card.model.CardDTO;
import com.cpe.springboot.card.model.CardModel;
import com.cpe.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;

import java.util.HashSet;
import java.util.Set;

import com.cpe.message.model.MessageDTO;

public class DTOMapper {
	
	public static CardDTO fromCardModelToCardDTO(CardModel cM) {
		CardDTO cDto = new CardDTO(cM.getName(), cM.getDescription(), cM.getFamily(), cM.getFamily(), cM.getImgUrl(), cM.getSmallImgUrl());
		cDto.setId(cM.getId());
		cDto.setEnergy(cM.getEnergy());
		cDto.setHp(cM.getHp());
		cDto.setDefence(cM.getDefence());
		cDto.setAttack(cM.getAttack());
		cDto.setPrice(cM.getPrice());
		if (cM.getUser() != null) {
			cDto.setUserId(cM.getUser().getId());
		} else {
			cDto.setUserId(null);
		}
		return cDto;
	}
	
	public static CardModel fromCardDtoToCardModel(CardDTO cD) {
		CardModel cm = new CardModel(cD);
		cm.setEnergy(cD.getEnergy());
		cm.setHp(cD.getHp());
		cm.setDefence(cD.getDefence());
		cm.setAttack(cD.getAttack());
		cm.setPrice(cD.getPrice());
		cm.setId(cD.getId());
		return cm;
	}
	
	public static UserDTO fromUserModelToUserDTO(UserModel uM) {
		UserDTO uDto =new UserDTO();
		Set<Integer> newCardList = new HashSet<>();
		uDto.setId(uM.getId());
		uDto.setLogin(uM.getLogin());
		uDto.setPwd(uM.getPwd());
		uDto.setAccount(uM.getAccount());
		uDto.setLastName(uM.getLastName());
		uDto.setSurName(uM.getSurName());
		uDto.setEmail(uM.getEmail());
		uDto.setHost(uM.getHost());
		uDto.setSocketId(uM.getSocketId());
		uDto.setRoomId(uM.getRoomId());
		uDto.setWin(uM.getWin());
		uDto.setTurn(uM.getTurn());
		for (CardModel card : uM.getCardList()) {
			newCardList.add(card.getId());			
		}
		uDto.setCardList(newCardList);
		return uDto;
	}

	public static MessageDTO fromMessageModelToMessageDTO(MessageModel mM) {
		MessageDTO mD = new MessageDTO();
		mD.setId(mM.getId());
		mD.setSocketId(mM.getSocketId());
		mD.setText(mM.getText());
		mD.setUserId(mM.getUserId());
		return mD;
	}
}
