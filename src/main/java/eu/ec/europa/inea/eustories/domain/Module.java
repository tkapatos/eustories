package eu.ec.europa.inea.eustories.domain;

import lombok.*;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"code"})
@Document(collection = "modules")
public class Module {
    private String id;
    @Indexed
    private String code;
    @Indexed
    private String name;
    private String description;

}
