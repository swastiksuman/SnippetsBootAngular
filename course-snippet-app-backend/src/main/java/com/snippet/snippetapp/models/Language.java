package com.snippet.snippetapp.models;

public enum Language {
	Java("Java"), C("C"), CPlus("C++");

	public final String name;

	Language(String name) {
		this.name = name;
	}

	public String getName() {
		return this.name;
	}
}
