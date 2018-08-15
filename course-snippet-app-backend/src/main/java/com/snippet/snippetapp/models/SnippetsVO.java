package com.snippet.snippetapp.models;

public class SnippetsVO {
	private Long id;
	private String name;
	private Language language;
	private String code;

	public SnippetsVO(Long id, String name, Language language, String code) {
		super();
		this.id = id;
		this.name = name;
		this.language = language;
		this.code = code;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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
