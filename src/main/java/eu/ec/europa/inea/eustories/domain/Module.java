package eu.ec.europa.inea.eustories.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(of = {"code"})
@EqualsAndHashCode(of = {"code"})
@Document(collection = "modules")
public class Module {
    @Id
    private String code;
    @Indexed
    private String name;
    private String description;

}
