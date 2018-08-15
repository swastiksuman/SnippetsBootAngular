package com.snippet.snippetapp.models;

public enum Language {
	JAVA("JAVA"), C("C"), CPlus("C++");

	public final String name;

	Language(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}
}
