package com.snippet.snippetapp.security;

import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("user").password("{noop}password").roles("USER").and().withUser("admin")
				.password("{noop}admin").roles("USER", "ADMIN");
	}
	
	  @Override
	  protected void configure(HttpSecurity http) throws Exception {
	    http
	      .httpBasic()
	    .and()
	    .antMatcher("/login").authorizeRequests().and()
	      .authorizeRequests()
	        .anyRequest().authenticated();
	  }
}