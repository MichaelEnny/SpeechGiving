package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.models.Talk;
import com.example.demo.repos.TalkRepo;

@SpringBootTest
class TalkApplicationTests {

	@Autowired
	TalkRepo talkRepository;
	
	@Test
	void contextLoads() {
	}
	
	@Test
	public void saveProd()
	{
		Talk t1=new Talk();
		t1.setName("Jerry");
		t1.setDuration("44 mins");
		t1.setSpeaker("Setting speakker");
		t1.setVenue("Lancaster");
		talkRepository.save(t1);
	}

}
