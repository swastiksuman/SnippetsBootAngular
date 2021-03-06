package com.snippet.snippetapp.models;

import javax.validation.constraints.Size;

import com.snippet.snippetapp.entities.Snippets;

public class SnippetsVO {
	private String id;
	
	@Size(min=3, max=255)
	private String name;
	private Language language;
	private String code;

	public SnippetsVO() {
		super();
	}

	public SnippetsVO(Snippets snippets) {
		this.id = snippets.getId();
		this.name = snippets.getName();
		this.language = snippets.getLanguage();
		this.code = snippets.getCode();
	}

	public SnippetsVO(String id, String name, Language language, String code) {
		super();
		this.id = id;
		this.name = name;
		this.language = language;
		this.code = code;
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

	@Override
	public String toString() {
		return "SnippetsVO [id=" + id + ", name=" + name + ", language=" + language + ", code=" + code + "]";
	}
}
