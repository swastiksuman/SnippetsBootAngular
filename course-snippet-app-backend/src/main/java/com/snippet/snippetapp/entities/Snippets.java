package com.snippet.snippetapp.entities;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.snippet.snippetapp.models.Language;
import com.snippet.snippetapp.models.SnippetsVO;

@Document(collection = "snippets")
public class Snippets {

	@Id
	private String id;
	private String name;

	private Language language;

	private String code;

	public Snippets() {
	}

	public Snippets(SnippetsVO snippetsVO) {
		this.code = snippetsVO.getCode();
		this.name = snippetsVO.getName();
		this.language = snippetsVO.getLanguage();
		if (snippetsVO.getId() != null)
			this.id = snippetsVO.getId();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Language getLanguage() {
		return language;
	}

	public void setLanguage(Language language) {
		this.language = language;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
