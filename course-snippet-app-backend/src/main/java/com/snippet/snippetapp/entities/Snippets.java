package com.snippet.snippetapp.entities;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.snippet.snippetapp.models.Language;
import com.snippet.snippetapp.models.SnippetsVO;

@Entity
@Table(name = "SNIPPETS")
public class Snippets {

	@Id
	@GeneratedValue
	private Long id;
	private String name;

	@Enumerated(EnumType.ORDINAL)
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
