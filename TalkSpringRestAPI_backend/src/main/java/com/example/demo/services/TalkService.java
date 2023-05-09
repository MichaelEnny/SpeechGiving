package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Talk;
import com.example.demo.repos.TalkRepo;

@Service
@Transactional
public class TalkService {

	@Autowired
	TalkRepo repo;

	private List<Talk> talks = new ArrayList<>();
	
	public List<Talk> listAll()
	{
		return repo.findAll();
	}

	public void save(Talk talk)
	{
		repo.save(talk);
	}
	public Talk get(Integer id)
	{
		return repo.findById(id).get();
	}

	// Get all talks by venue
	public List<Talk> getTalksByVenue()
	{
		return repo.findAll();
	}

	public void delete(Integer id)
	{
		repo.deleteById(id);
	}
}
