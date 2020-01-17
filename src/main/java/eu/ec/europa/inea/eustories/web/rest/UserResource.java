package eu.ec.europa.inea.eustories.web.rest;


import eu.ec.europa.inea.eustories.domain.LoggedInUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserResource {

    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    @GetMapping("/users/current")
    public LoggedInUser getLoggedInUser() {
        return LoggedInUser.builder().username("kapatth").build();
    }


}
