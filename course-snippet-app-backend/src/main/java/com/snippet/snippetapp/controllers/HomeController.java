package com.snippet.snippetapp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.snippet.snippetapp.entities.Snippets;
import com.snippet.snippetapp.models.Language;
import com.snippet.snippetapp.models.SnippetsVO;
import com.snippet.snippetapp.repositories.ISnippetsRepository;

@CrossOrigin
@RestController
@RequestMapping("/snippets")
public class HomeController {
	public static final List<SnippetsVO> snippetsList = new ArrayList<SnippetsVO>();

	@Autowired
	ISnippetsRepository snippetsRepository;

	@GetMapping("/allsnippets")
	public List<SnippetsVO> getAllSnippets() {
		List<SnippetsVO> listOfAllSnippets = new ArrayList<SnippetsVO>();
		snippetsRepository.findAll().forEach((snippet) -> {
			listOfAllSnippets.add(new SnippetsVO(snippet));
		});
		return listOfAllSnippets;
	}

	@PostMapping("/savesnippet")
	public String saveSnippet(@RequestBody SnippetsVO snippetVO) {
		System.out.println(snippetVO);
		System.out.println(snippetVO);
		snippetsList.add(snippetVO);
		snippetsRepository.save(new Snippets(snippetVO));
		System.out.println(snippetsList);
		return "success";
	}

	@DeleteMapping("/deletesnippet/{idToDelete}")
	public String deleteSnippet(@PathVariable("idToDelete") Long id) {
		System.out.println("ID to be deleted "+id);
		snippetsRepository.deleteById(id);
		return "success";
	}
}
