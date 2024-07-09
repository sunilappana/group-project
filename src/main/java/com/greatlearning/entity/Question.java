package com.greatlearning.entity;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "QUESTION_TABLE")
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String question;
	
	private boolean hasAnswered;
	
	private boolean hasApproved;
	
	private String creationDate;
	
	private String topic;
	
	@Lob
	private byte[] img;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "user_id", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	@JsonIgnore
	private User user;
	
	@OneToMany(mappedBy = "questions", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Answer> answerList;

	public Question(String question, boolean hasAnswered, boolean hasApproved, String creationDate, String topic,
			User user, List<Answer> answerList) {
		
		this.question = question;
		this.hasAnswered = false;
		this.hasApproved = false;
		this.creationDate = LocalDate.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));;
		this.topic = topic;
		this.user = user;
		this.answerList = answerList;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public boolean isHasAnswered() {
		return hasAnswered;
	}

	public void setHasAnswered(boolean hasAnswered) {
		this.hasAnswered = hasAnswered;
	}

	public boolean isHasApproved() {
		return hasApproved;
	}

	public void setHasApproved(boolean hasApproved) {
		this.hasApproved = hasApproved;
	}

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public byte[] getImg() {
		return img;
	}

	public void setImg(byte[] img) {
		this.img = img;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Answer> getAnswerList() {
		return answerList;
	}

	public void setAnswerList(List<Answer> answerList) {
		this.answerList = answerList;
	}

	
	
	
	
	
	
	

}
