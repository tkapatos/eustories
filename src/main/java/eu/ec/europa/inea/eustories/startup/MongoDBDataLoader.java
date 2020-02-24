package eu.ec.europa.inea.eustories.startup;

import eu.ec.europa.inea.eustories.domain.Criterion;
import eu.ec.europa.inea.eustories.domain.Initiative;
import eu.ec.europa.inea.eustories.domain.Module;
import eu.ec.europa.inea.eustories.domain.Story;
import eu.ec.europa.inea.eustories.repository.InitiativeRepository;
import eu.ec.europa.inea.eustories.repository.ModuleRepository;
import eu.ec.europa.inea.eustories.repository.StoryRepository;
import eu.ec.europa.inea.eustories.util.Constants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.Arrays;

import static eu.ec.europa.inea.eustories.util.Constants.SpringProfiles.DEV;

@Component
@Profile(DEV)
@Slf4j
public class MongoDBDataLoader implements ApplicationRunner {

    @Autowired
    ModuleRepository moduleRepository;

    @Autowired
    InitiativeRepository initiativeRepository;

    @Autowired
    StoryRepository storyRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Module pciref = Module.builder().code("PCIREF").name("Transparency Platform").description("Transparency Platform module").build();
        moduleRepository.save(pciref);
        Module ga = Module.builder().code("GA").name("Grant Agreement").description("Grant Agreement module").build();
        moduleRepository.save(ga);
        Module pfu = Module.builder().code("PFU").name("Project Follow-up").description("Project Follow-up module").build();
        moduleRepository.save(pfu);

        Initiative initiative1 = Initiative.builder().code("TP_1").description("First version of Transparency Platform stories").module(pciref).build();
        initiativeRepository.save(initiative1);
        Initiative initiative2 = Initiative.builder().code("CP").description("Contact Points stories").module(pciref).build();
        initiativeRepository.save(initiative2);
        Initiative initiative3 = Initiative.builder().code("IND").description("CEF2 Indicators stories").module(pciref).build();
        initiativeRepository.save(initiative3);

        /* as an Admin/PM/read only user I want to batch download the PCI Fiche of severals PCIs  */
        Criterion criterion9652_1 = Criterion.builder().given("Given that there is a user on the PCI List page having selected some PCI codes\n" +
            "and PDF format")
            .when("When the user clicks on the \"Download PCI fiche\" button")
            .then("Then the system is generating one PCI fiche (in PDF) for each selected PCI Code in the grid in the pdf format.\n" +
            "All generated documents will be zipped together and a download link will be sent by email to the logegd in user.").build();
        Criterion criterion9652_2 = Criterion.builder().given("Given that there is a user on the PCI List page having selected some PCI codes\n" +
            "and Word format")
            .when("When the user clicks on the \"Download PCI fiche\" button")
            .then("Then the system is generating one PCI fiche for each selected PCI Code (in word) in the grid in the pdf format.\n" +
            "All generated documents will be zipped together and a download link will be sent by email to the logegd in user.").explanations("Do something").toBeDiscussed("Discuss something").build();
        Story story9652 = Story.builder().initiative(initiative1).criteria(Arrays.asList(criterion9652_1,criterion9652_2)).description("").
            summary("as an Admin/PM/read only user I want to batch download the PCI Fiche of severals PCIs ").jiraId("9652").status(Constants.Status.TO_D0)
            .points(5).build();
        storyRepository.save(story9652);

        /* as an Admin/PM/read only user I want to batch download the PCI implementation plan of severals PCIs   */
        Criterion criterion9653_1 = Criterion.builder().given("Given that there is a user on the PCI List page having selected some PCI codes and PDF format")
            .when("When the user clicks on the \"Download PCI Implementation plan\" button")
            .then("Then the system is generating one PCI Implementation plan (in Pdf) for each selected PCI Code in the grid in the pdf format. All generated documents will be zipped together and a download link will be sent by email to the logegd in user.").build();
        Criterion criterion9653_2 = Criterion.builder().given("Given that there is a user on the PCI List page having selected some PCI codes and Word format")
            .when("When the user clicks on the \"Download PCI fiche\" button")
            .then("Then the system is generating one PCI fiche for each selected PCI Code (in word) in the grid in the pdf format. All generated documents will be zipped together and a download link will be sent by email to the logegd in user.")
            .explanations("Do something").build();
        Story story9653 = Story.builder().initiative(initiative1).criteria(Arrays.asList(criterion9653_1,criterion9653_2)).description("").
            summary("as an Admin/PM/read only user I want to batch download the PCI implementation plan of severals PCIs").jiraId("9653").status(Constants.Status.TO_D0)
            .points(3).build();
        storyRepository.save(story9653);
    }
}
