package com.cpe.user.model;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;


@JsonInclude(Include.NON_NULL)
public class UserDTO implements Serializable{
	private Integer id;
	private String login;
	private String pwd;
	private float account;
	private String lastName;
	private String surName;
	private String email;
	private Boolean host = false;
	private Integer socketId = 0;
	private Integer roomId = 0;
	private Boolean win = false;
	private Boolean turn = false;
	private Set<Integer> cardList = new HashSet<>();
	
	public UserDTO() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public Set<Integer> getCardList() {
		return cardList;
	}

	public void setCardList(Set<Integer> cardList) {
		this.cardList = cardList;
	}

	public float getAccount() {
		return account;
	}

	public void setAccount(float account) {
		this.account = account;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getSurName() {
		return surName;
	}

	public void setSurName(String surName) {
		this.surName = surName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getHost() {
		return host;
	}

	public Integer getSocketId() {
		return socketId;
	}

	public Integer getRoomId() {
		return roomId;
	}

	public Boolean getWin() {
		return win;
	}

	public Boolean getTurn() {
		return turn;
	}

	public void setHost(Boolean host) {
		this.host = host;
	}

	public void setSocketId(Integer socketId) {
		this.socketId = socketId;
	}

	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}

	public void setWin(Boolean win) {
		this.win = win;
	}

	public void setTurn(Boolean turn) {
		this.turn = turn;
	}

	public String toString() {
		return '{' + "id:" + id + ", login:" + login + ", pwd:" + pwd + ", account:" + account + ", lastName:"
				+ lastName + ", surName:" + surName + ", email:" + email + ", host:" + host + ", socketId:" + socketId
				+ ", roomId:" + roomId + ", turn:" + turn + ", win:" + win + ", cardList:" + cardList + '}';
	}
}
