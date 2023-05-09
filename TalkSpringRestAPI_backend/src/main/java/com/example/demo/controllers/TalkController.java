package com.example.demo.controllers;

import com.example.demo.models.Talk;
import com.example.demo.services.TalkService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/talking")
public class TalkController {

	public static final Logger logger = LoggerFactory.getLogger(TalkController.class);
	@Autowired
	TalkService service;

	// to get list of product objects to the consumer
	// get
	@GetMapping("/talks")
	public List<Talk> getList()
	{
		logger.info("Entering into method getList()");
		try {
			logger.info("finding all talk contents");
			throw new RuntimeException("Talk information list not available");
		} catch (Exception e) {
			logger.error(" Unable to find talk contents list " +e.getMessage());
			e.printStackTrace();
			StringWriter sw= new StringWriter();
			PrintWriter pw= new PrintWriter(sw);
			e.printStackTrace(pw);
			logger.error("Exception is -: " +sw.toString());
		}
		return service.listAll();
	}

	@GetMapping("/talks/{id}")
	public ResponseEntity<Talk> get(@PathVariable int id)
	{
		logger.info("Entering into method get()");
		try {
			logger.info("finding all talk contents by id");
			throw new RuntimeException("Talk information by id not available");
		} catch (Exception e) {
			logger.error(" Unable to find talk contents by id " +e.getMessage());
			e.printStackTrace();
			StringWriter sw= new StringWriter();
			PrintWriter pw= new PrintWriter(sw);
			e.printStackTrace(pw);
			logger.error("Exception is -: " +sw.toString());
		}
		try
		{
			Talk talk= service.get(id);
			return new ResponseEntity<Talk>(talk,HttpStatus.OK);
		}
		catch (NoSuchElementException e) {
			// TODO: handle exception
			return new ResponseEntity<Talk>(HttpStatus.NOT_FOUND);
		}
	}

	// Get all talks by venue
	@GetMapping("/venue")
	public List<Talk> getTalkByVenue()
	{
		logger.info("Entering into method getTalkByVenue()");
		try {
			logger.info("finding all talk contents by venue and id");
			throw new RuntimeException("Talk information list not available for venue and id");
		} catch (Exception e) {
			logger.error(" Unable to find talk contents by venue and id" +e.getMessage());
			e.printStackTrace();
			StringWriter sw= new StringWriter();
			PrintWriter pw= new PrintWriter(sw);
			e.printStackTrace(pw);
			logger.error("Exception is -: " +sw.toString());
		}
		return service.getTalksByVenue();
	}


	@PostMapping("/talks")
	public void add(@RequestBody Talk talk)
	{
		logger.info("Entering into method add()");
		try {
			logger.info("Adding talk contents to the server");
			throw new RuntimeException("Talk information not adding to talk server");
		} catch (Exception e) {
			logger.error(" Unable to add talk contents " +e.getMessage());
			e.printStackTrace();
			StringWriter sw= new StringWriter();
			PrintWriter pw= new PrintWriter(sw);
			e.printStackTrace(pw);
			logger.error("Exception is -: " +sw.toString());
		}
		service.save(talk);
	}

	@DeleteMapping("/talks/{id}")
	public void delete(@PathVariable Integer id)
	{
		logger.info("Entering into method delete()");
		try {
			logger.info("Deleting talk contents from the server");
			throw new RuntimeException("Talk information not deleting from talk server");
		} catch (Exception e) {
			logger.error(" Unable to delete talk contents " +e.getMessage());
			e.printStackTrace();
			StringWriter sw= new StringWriter();
			PrintWriter pw= new PrintWriter(sw);
			e.printStackTrace(pw);
			logger.error("Exception is -: " +sw.toString());
		}
		service.delete(id);
	}

	@PutMapping("/talks/{id}")
	public void update(@RequestBody Talk talk, @PathVariable Integer id)
	{
		//Talk p1=service.get(id);
		logger.info("Entering into method update()");
		try {
			logger.info("Updating talk contents from the server");
			throw new RuntimeException("Talk information not updating in talk server");
		} catch (Exception e) {
			logger.error(" Unable to update talk contents " +e.getMessage());
			e.printStackTrace();
			StringWriter sw= new StringWriter();
			PrintWriter pw= new PrintWriter(sw);
			e.printStackTrace(pw);
			logger.error("Exception is -: " +sw.toString());
		}

		talk.setId(id);

		service.save(talk);
	}

}
