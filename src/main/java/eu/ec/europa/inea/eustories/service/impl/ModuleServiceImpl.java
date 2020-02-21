package eu.ec.europa.inea.eustories.service.impl;

import eu.ec.europa.inea.eustories.domain.Module;
import eu.ec.europa.inea.eustories.repository.ModuleRepository;
import eu.ec.europa.inea.eustories.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleServiceImpl implements ModuleService {

    ModuleRepository moduleRepository;

    @Autowired
    public ModuleServiceImpl(ModuleRepository moduleRepository) {
        this.moduleRepository = moduleRepository;
    }

    @Override
    public List<Module> retieveAllModules() {
        return moduleRepository.findAll();
    }
}
