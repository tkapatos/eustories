package eu.ec.europa.inea.eustories.web.rest;

import eu.ec.europa.inea.eustories.domain.Module;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ModuleResource {
    @GetMapping("/modules")
    public ResponseEntity<List<Module>> getModules() {
        Module pciref = Module.builder().code("PCIREF").name("Transparency Platform").description("Transparency Platform").build();
        Module ga = Module.builder().code("GA").name("Grant Agreement").description("Grant Agreement").build();
        Module pfu = Module.builder().code("PFU").name("Project Follow-up").description("Project Follow-up").build();
        List<Module> modules = Arrays.asList(pciref,ga,pfu);
        return new ResponseEntity<>(modules, HttpStatus.OK);
    }
}
