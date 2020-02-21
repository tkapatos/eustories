package eu.ec.europa.inea.eustories.web.rest;

import eu.ec.europa.inea.eustories.domain.Initiative;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class InitiativeResource {

    @GetMapping("/initiatives/{moduleCode}")
    public ResponseEntity<List<Initiative>> getInitiativesByModule(@PathVariable String moduleCode) {
        Initiative initiative1 = Initiative.builder().code("TP_1").description("First version of Transparency Platform").build();
        Initiative initiative2 = Initiative.builder().code("CP").description("Contact Points").build();
        Initiative initiative3 = Initiative.builder().code("IND").description("CEF2 Indicators").build();
        List<Initiative> initiatives = Arrays.asList(initiative1,initiative2,initiative3);
        return new ResponseEntity<>(initiatives, HttpStatus.OK);
    }
}
