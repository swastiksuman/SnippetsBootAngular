package com.snippet.snippetapp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.snippet.snippetapp.entities.Snippets;
import com.snippet.snippetapp.entities.SupportedLanguages;
import com.snippet.snippetapp.models.Language;
import com.snippet.snippetapp.models.SnippetsVO;
import com.snippet.snippetapp.repositories.ISnippetsRepository;
import com.snippet.snippetapp.repositories.ISupportedLanguagesRepository;

@CrossOrigin
@RestController
@RequestMapping("/snippets")
public class HomeController {
	public static final List<SnippetsVO> snippetsList = new ArrayList<SnippetsVO>();

	@Autowired
	ISnippetsRepository snippetsRepository;
	
	@Autowired
	ISupportedLanguagesRepository supportedLanguagesRepository;

	@GetMapping("/allsnippets")
	public List<SnippetsVO> getAllSnippets() {
		List<SnippetsVO> listOfAllSnippets = new ArrayList<SnippetsVO>();
		snippetsRepository.findAll().forEach((snippet) -> {
			listOfAllSnippets.add(new SnippetsVO(snippet));
		});
		return listOfAllSnippets;
	}

	@PostMapping(value="/savesnippet", produces="application/json")
	public SnippetsVO saveSnippet(@RequestBody @Valid SnippetsVO snippetVO) {
		System.out.println(snippetVO);
		System.out.println(snippetVO);
		snippetsList.add(snippetVO);
		Snippets newSnippets = snippetsRepository.save(new Snippets(snippetVO));
		snippetVO.setId(newSnippets.getId());
		return snippetVO;
	}

	@DeleteMapping(value="/deletesnippet/{idToDelete}", produces="application/json")
	public String deleteSnippet(@PathVariable("idToDelete") String id) {
		System.out.println("ID to be deleted "+id);
		snippetsRepository.deleteById(id);
		return "{\"success\": 1}";
	}
	
	@GetMapping("/getsnippet/{id}")
	public SnippetsVO getSnippetById(@PathVariable("id") String id){
		return new SnippetsVO(snippetsRepository.findById(id).get());
	}
	
	@PostMapping("/testpost")
	public void someTest(@RequestParam("first_name") String firstName, @RequestParam("last_name") String lastName){
		System.out.println(firstName+lastName);
	}
	
	@GetMapping("/getSupportedLanguages")
	public List<SupportedLanguages> getListOfSupportedLanguages(){
		System.out.println("Supported Languages Called");
		List<SupportedLanguages> listOfSupportedLanguages = new ArrayList<SupportedLanguages>();
		supportedLanguagesRepository.findAll().forEach((data) -> listOfSupportedLanguages.add(data));
		System.out.println(listOfSupportedLanguages);
		return listOfSupportedLanguages;
	}
	
}
