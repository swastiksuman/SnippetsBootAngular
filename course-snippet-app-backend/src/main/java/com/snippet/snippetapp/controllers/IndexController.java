package com.snippet.snippetapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.snippet.snippetapp.entities.SupportedLanguages;
import com.snippet.snippetapp.repositories.ISupportedLanguagesRepository;

@Controller
public class IndexController {
	
	@Autowired
	ISupportedLanguagesRepository is;
	
	@RequestMapping(value={ "/", ""})
	public String getIndex() {
		return "index.html";
	}
}
