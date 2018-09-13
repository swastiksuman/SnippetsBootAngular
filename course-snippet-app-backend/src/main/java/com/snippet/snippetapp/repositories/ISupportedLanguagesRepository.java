package com.snippet.snippetapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.snippet.snippetapp.entities.SupportedLanguages;

public interface ISupportedLanguagesRepository extends CrudRepository<SupportedLanguages, Long>{

}
