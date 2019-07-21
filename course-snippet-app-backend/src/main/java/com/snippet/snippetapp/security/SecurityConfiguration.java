package com.snippet.snippetapp.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import com.auth0.spring.security.api.JwtWebSecurityConfigurer;


@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	/*@Override
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
	  }*/

	@Value(value = "${auth0.apiAudience}")
	private String apiAudience;
	@Value(value = "${auth0.issuer}")
	private String issuer;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		JwtWebSecurityConfigurer
				.forRS256(apiAudience, issuer)
				.configure(http)
				.authorizeRequests()
				.antMatchers(HttpMethod.GET, "/*.js").permitAll()
				.antMatchers(HttpMethod.GET, "/").permitAll()
				.antMatchers(HttpMethod.GET, "/snippets/allsnippets").permitAll()
				.antMatchers(HttpMethod.GET, "/api/v1/bikes").hasAuthority("view:registrations")
				.antMatchers(HttpMethod.GET, "/api/v1/bikes/**").hasAuthority("view:registration")
				.anyRequest().permitAll();
	}

}