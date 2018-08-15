package com.snippet.snippetapp.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.snippet.snippetapp.models.Language;
import com.snippet.snippetapp.models.SnippetsVO;

@CrossOrigin
@RestController
@RequestMapping("/snippets")
public class HomeController {

	@GetMapping("/allsnippets")
	public List<SnippetsVO> getAllSnippets() {
		List<SnippetsVO> snippetsList = new ArrayList<SnippetsVO>();
		snippetsList.add(new SnippetsVO(1L, "JavaSnippet", Language.JAVA, "import"));
		snippetsList.add(new SnippetsVO(2L, "CSnippet", Language.C, "include"));
		return snippetsList;
	}
}
