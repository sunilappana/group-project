package com.greatlearning.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.greatlearning.entity.Question;

@Repository
public interface QuestionAndAnswerRepositroy extends JpaRepository<Question, Integer>{

}
