package com.snippet.snippetapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import com.snippet.snippetapp.entities.Snippets;

public interface ISnippetsRepository extends MongoRepository<Snippets, String>{

}
